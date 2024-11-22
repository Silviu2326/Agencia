// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Phone,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Palette,
  Lightbulb,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { es } from 'date-fns/locale';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
  Box,
  Paper,
  Typography,
  Stack,
  Grid,
  Tooltip,
  alpha,
  Snackbar,
  Alert, // Importar Alert para mensajes más estilizados
} from '@mui/material';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { supabase } from '../supabaseClient'; // Asegúrate de que la ruta es correcta

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0095ff',
      light: '#36aeff',
      dark: '#0077ff',
    },
    secondary: {
      main: '#9500ff',
      light: '#ae36ff',
      dark: '#7700ff',
    },
    background: {
      paper: 'rgba(17, 24, 39, 0.8)',
      default: '#111827',
    },
  },
  typography: {
    fontFamily: '"Inter var", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            borderColor: 'rgba(0, 149, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 149, 255, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            transition: 'all 0.2s ease-in-out',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.2s ease-in-out',
            },
            '&:hover fieldset': {
              borderColor: '#0095ff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0095ff',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #0095ff, #9500ff)',
          boxShadow: '0 4px 16px rgba(0, 149, 255, 0.2)',
          '&:hover': {
            background: 'linear-gradient(45deg, #36aeff, #ae36ff)',
            boxShadow: '0 8px 24px rgba(0, 149, 255, 0.3)',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.1)',
          '&:hover': {
            borderColor: '#0095ff',
            backgroundColor: 'rgba(0, 149, 255, 0.1)',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0095ff',
          },
        },
      },
    },
  },
});

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Estados para Snackbar
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    {
      id: 'web',
      name: 'Desarrollo Web',
      duration: '45 min',
      description: 'Sitios web personalizados y optimizados',
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      id: 'app',
      name: 'Aplicaciones Móviles',
      duration: '45 min',
      description: 'Apps nativas y multiplataforma',
      icon: <Smartphone className="h-5 w-5" />,
    },
    {
      id: 'design',
      name: 'Diseño UI/UX',
      duration: '30 min',
      description: 'Interfaces intuitivas y atractivas',
      icon: <Palette className="h-5 w-5" />,
    },
    {
      id: 'consulting',
      name: 'Consultoría Digital',
      duration: '60 min',
      description: 'Asesoramiento estratégico',
      icon: <Lightbulb className="h-5 w-5" />,
    },
  ];

  const timeSlots = [
    { time: '09:00', period: 'AM' },
    { time: '10:00', period: 'AM' },
    { time: '11:00', period: 'AM' },
    { time: '12:00', period: 'PM' },
    { time: '14:00', period: 'PM' },
    { time: '15:00', period: 'PM' },
    { time: '16:00', period: 'PM' },
    { time: '17:00', period: 'PM' },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'contact@webcraft.com',
      link: 'mailto:contact@webcraft.com',
      gradient: 'linear-gradient(135deg, #0095ff 0%, #36aeff 100%)',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Teléfono',
      value: '+34 683 52 96 29',
      link: 'tel:+34 683 52 96 29 ',
      gradient: 'linear-gradient(135deg, #9500ff 0%, #ae36ff 100%)',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Ubicación',
      value: 'Valencia',
      gradient: 'linear-gradient(135deg, #ff0095 0%, #ff36ae 100%)',
    },
  ];

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessSnackbarOpen(false);
    setErrorSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setErrorMessage('Por favor, completa todos los campos requeridos.');
      setErrorSnackbarOpen(true);
      return;
    }

    // Combinar selectedDate y selectedTime en un solo objeto Date
    const [hours, minutes] = selectedTime.split(':');
    const appointmentDate = new Date(selectedDate);
    appointmentDate.setHours(parseInt(hours, 10));
    appointmentDate.setMinutes(parseInt(minutes, 10));
    appointmentDate.setSeconds(0);
    appointmentDate.setMilliseconds(0);

    const now = new Date();
    const twentyHoursLater = new Date(now.getTime() + 20 * 60 * 60 * 1000);

    if (appointmentDate < twentyHoursLater) {
      setErrorMessage(
        'Las citas deben programarse con al menos 20 horas de antelación.'
      );
      setErrorSnackbarOpen(true);
      return;
    }

    const formData = {
      selected_date: appointmentDate.toISOString(),
      selected_time: selectedTime,
      selected_service: selectedService,
      email,
      phone,
      created_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
        setErrorMessage(
          'Hubo un problema al programar la cita. Intenta de nuevo.'
        );
        setErrorSnackbarOpen(true);
      } else {
        setSuccessSnackbarOpen(true);
        // Reiniciar el formulario
        setSelectedDate(null);
        setSelectedTime('');
        setSelectedService('');
        setEmail('');
        setPhone('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error al enviar el formulario. Intenta de nuevo.');
      setErrorSnackbarOpen(true);
    }
  };

  const isFormValid =
    selectedDate && selectedTime && selectedService && email && phone;

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px]"
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <CalendarIcon className="h-8 w-8 text-primary-400" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent"
                  sx={{
                    backgroundSize: '200% auto',
                    animation: 'gradient 8s linear infinite',
                  }}
                >
                  Agenda una Consulta
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mt: 2, maxWidth: '600px', mx: 'auto' }}
                >
                  Descubre cómo podemos transformar tu visión en realidad
                  digital
                </Typography>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={ref} className="py-20 relative">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: '1200px',
              mx: 'auto',
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Grid container spacing={4}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <Stack spacing={4} sx={{ height: '100%' }}>
                  {/* Service Selection */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ flex: 1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Sparkles className="h-5 w-5 text-primary-400" />
                        Selecciona el Servicio
                      </Typography>
                      <FormControl sx={{ flex: 1 }}>
                        <InputLabel>Servicio</InputLabel>
                        <Select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          label="Servicio"
                        >
                          {services.map((service) => (
                            <MenuItem
                              key={service.id}
                              value={service.id}
                              sx={{
                                py: 2,
                                '&:hover': {
                                  backgroundColor: alpha(
                                    darkTheme.palette.primary.main,
                                    0.1
                                  ),
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 2,
                                }}
                              >
                                <Box
                                  sx={{
                                    p: 1,
                                    borderRadius: 1,
                                    bgcolor: alpha(
                                      darkTheme.palette.primary.main,
                                      0.1
                                    ),
                                    color: 'primary.main',
                                  }}
                                >
                                  {service.icon}
                                </Box>
                                <Box>
                                  <div className="font-medium text-gray-300">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {service.description} • {service.duration}
                                  </div>
                                </Box>
                              </Box>
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Paper>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ flex: 1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Mail className="h-5 w-5 text-primary-400" />
                        Información de Contacto
                      </Typography>
                      <Stack
                        spacing={3}
                        sx={{ flex: 1, justifyContent: 'center' }}
                      >
                        <TextField
                          fullWidth
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          required
                          InputProps={{
                            sx: {
                              borderRadius: '12px',
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Teléfono"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="tel"
                          required
                          InputProps={{
                            sx: {
                              borderRadius: '12px',
                            },
                          }}
                        />
                      </Stack>
                    </Paper>
                  </motion.div>
                </Stack>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={6}>
                <Stack spacing={4} sx={{ height: '100%' }}>
                  {/* Calendar */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ flex: 1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <CalendarIcon className="h-5 w-5 text-primary-400" />
                        Selecciona el Día
                      </Typography>
                      <Box
                        sx={{ flex: 1, display: 'flex', alignItems: 'center' }}
                      >
                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          adapterLocale={es}
                        >
                          <DateCalendar
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            disablePast
                          />
                        </LocalizationProvider>
                      </Box>
                    </Paper>
                  </motion.div>

                  {/* Time Slots */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ flex: 1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Clock className="h-5 w-5 text-primary-400" />
                        Selecciona la Hora
                      </Typography>
                      <Box
                        sx={{ flex: 1, display: 'flex', alignItems: 'center' }}
                      >
                        <Grid container spacing={2}>
                          {timeSlots.map(({ time, period }) => (
                            <Grid item xs={6} sm={4} key={time}>
                              <Tooltip
                                title={`Disponible ${period}`}
                                arrow
                                placement="top"
                              >
                                <Button
                                  fullWidth
                                  variant={
                                    selectedTime === time
                                      ? 'contained'
                                      : 'outlined'
                                  }
                                  onClick={() => setSelectedTime(time)}
                                  sx={{
                                    height: '48px',
                                    borderRadius: '12px',
                                  }}
                                >
                                  {time}
                                </Button>
                              </Tooltip>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Paper>
                  </motion.div>
                </Stack>
              </Grid>
            </Grid>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Button
                  type="submit" // Asegúrate de que el botón es de tipo submit
                  variant="contained"
                  size="large"
                  disabled={!isFormValid}
                  endIcon={<ArrowRight />}
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  Confirmar Cita
                </Button>
              </Box>
            </motion.div>
          </Box>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 relative">
          <Box
            sx={{
              maxWidth: '1200px',
              mx: 'auto',
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Grid container spacing={4}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          '& .icon-wrapper': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="icon-wrapper"
                        sx={{
                          mb: 3,
                          p: 2,
                          borderRadius: '16px',
                          background: info.gradient,
                          transition: 'transform 0.3s ease-in-out',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Link
                          to={info.link}
                          className="text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <Typography color="text.secondary">
                          {info.value}
                        </Typography>
                      )}
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </section>

        {/* Snackbar para mensajes de éxito */}
        <Snackbar
          open={successSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: '100%' }}
          >
            Perfecto, has pedido tu consulta gratuita.
          </Alert>
        </Snackbar>

        {/* Snackbar para mensajes de error */}
        <Snackbar
          open={errorSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: '100%' }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
};

export default Contact;

// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Tus credenciales de Supabase
const SUPABASE_URL = 'https://wxyyzjpqndwzwygdhgvq.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4eXl6anBxbmR3end5Z2RoZ3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMTAyMjEsImV4cCI6MjA0NzY4NjIyMX0.72axa9osl-YOLZRsHbJraMPsdSmESQzhxeveWPxdtL0';

// Crear el cliente de Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://daerhpcxsklqtpcdjjqh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZXJocGN4c2tscXRwY2RqanFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwODYzMTgsImV4cCI6MjA1MzY2MjMxOH0.UW0cjQlJakKj32lgA1bvWj56ef-UjbIgio_CQ0q4GlA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
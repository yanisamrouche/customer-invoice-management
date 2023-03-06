import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = "https://fdezozztgafhxkllqbnh.supabase.co/rest/v1";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZXpvenp0Z2FmaHhrbGxxYm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDc4NDQsImV4cCI6MTk5MzA4Mzg0NH0.rpOybLjWOaGD-ArHkP_RYv0SXZNPfjaGDStddH7vXeI";

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
export { supabase };

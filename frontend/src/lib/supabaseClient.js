import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'REACT_APP_SUPABASE_URL=https://esuyzcbllzjanqtekmjc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzdXl6Y2JsbHpqYW5xdGVrbWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MDIyODcsImV4cCI6MjA2MjE3ODI4N30.7iEEf_0EaKEhg-MSMPaPMTP2kaKYSlYjPdOTHfMqz84';

export const supabase = createClient(supabaseUrl, supabaseKey);
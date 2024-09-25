import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://tetebbhzedgueilgfnkw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldGViYmh6ZWRndWVpbGdmbmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMTk0MjUsImV4cCI6MjA0Mjc5NTQyNX0.tdaBEQBGF7xaHqVAUhEUpLFIdrNZzAIqMPKBbPmH_qs"

export const supabase = createClient(supabaseUrl, supabaseKey)
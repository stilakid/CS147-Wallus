// Import supabase in the file you need to use supabase in.

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://kzkmpwezvgztlppzuott.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6a21wd2V6dmd6dGxwcHp1b3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNDI2MTIsImV4cCI6MTk4NTcxODYxMn0.2LtZHIQ6lMz__TU6FLNFyeYveaZ3ZMvp4xQx5iHUM9s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
});
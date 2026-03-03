// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://szwqyfhsfmusduoqeway.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6d3F5ZmhzZm11c2R1b3Fld2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTE3NzUsImV4cCI6MjA4NzY4Nzc3NX0.GI0y8n7D3JhCx5ZNplQ5sgw6KjKkkEQnAeKAcD0k9ek'
)
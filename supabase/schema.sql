-- =============================================================================
-- ESQUEMA DE BASE DE DATOS SUPABASE PARA VIBROMINE LANDING PAGE
-- Copia y pega este script en el "SQL Editor" de tu proyecto en Supabase
-- =============================================================================

-- 1. Crear tabla para prospectos, contactos y solicitudes de cotización
CREATE TABLE IF NOT EXISTS public.vibromine_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    full_name TEXT NOT NULL,
    company TEXT NOT NULL,
    role_position TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service_interest TEXT NOT NULL,
    urgency_level TEXT DEFAULT 'Normal',
    location_faena TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'Nuevo' CHECK (status IN ('Nuevo', 'En Revisión', 'Cotizado', 'Cerrado'))
);

-- 2. Habilitar Row Level Security (RLS)
ALTER TABLE public.vibromine_leads ENABLE ROW LEVEL SECURITY;

-- 3. Crear política para permitir que cualquier visitante del sitio web pueda enviar una cotización (INSERT)
CREATE POLICY "Permitir inserción pública de cotizaciones"
ON public.vibromine_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4. Crear política para que solo usuarios autenticados (administradores de VIBROMINE) puedan leer los registros
CREATE POLICY "Permitir lectura solo a administradores autenticados"
ON public.vibromine_leads
FOR SELECT
TO authenticated
USING (true);

-- Comentarios de documentación
COMMENT ON TABLE public.vibromine_leads IS 'Solicitudes de cotización y contacto recibidas desde la Landing Page de VIBROMINE (Antofagasta, Chile)';

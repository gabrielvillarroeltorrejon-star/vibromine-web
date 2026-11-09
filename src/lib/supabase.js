import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Verifica si las credenciales reales de Supabase están configuradas
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('tu-proyecto-id') &&
  supabaseUrl.startsWith('https://')
)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

const LOCAL_STORAGE_KEY = 'vibromine_local_leads'

/**
 * Envía una solicitud de cotización o contacto a Supabase.
 * Si aún no se han configurado las variables de entorno de Supabase,
 * almacena el registro localmente en el navegador para demostración funcional sin errores.
 */
export async function submitQuotationLead(leadData) {
  const payload = {
    full_name: leadData.fullName?.trim(),
    company: leadData.company?.trim(),
    role_position: leadData.rolePosition?.trim() || 'No especificado',
    email: leadData.email?.trim(),
    phone: leadData.phone?.trim(),
    service_interest: leadData.serviceInterest,
    urgency_level: leadData.urgencyLevel || 'Normal',
    location_faena: leadData.locationFaena?.trim() || 'Antofagasta / Zona Norte',
    message: leadData.message?.trim(),
    status: 'Nuevo'
  }

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('vibromine_leads')
      .insert([payload])
      .select()

    if (error) {
      console.error('Error al guardar en Supabase:', error)
      throw new Error(error.message || 'No se pudo registrar la solicitud en la base de datos.')
    }

    saveLeadLocally(payload, 'cloud')
    return { mode: 'supabase', data }
  } else {
    // Simulación de latencia de red para experiencia realista
    await new Promise((resolve) => setTimeout(resolve, 650))
    const saved = saveLeadLocally(payload, 'local_demo')
    return { mode: 'local_fallback', data: [saved] }
  }
}

function saveLeadLocally(payload, syncSource) {
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
    const newRecord = {
      id: crypto?.randomUUID ? crypto.randomUUID() : `lead-${Date.now()}`,
      created_at: new Date().toISOString(),
      sync_source: syncSource,
      ...payload
    }
    existing.unshift(newRecord)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing.slice(0, 20)))
    return newRecord
  } catch (e) {
    return payload
  }
}

export function getLocalLeads() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

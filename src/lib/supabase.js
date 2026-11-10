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
const OFFICIAL_PRIMARY_EMAIL = 'juanc.gonzalez.a@vibromine.cl'
const OFFICIAL_CC_EMAILS = 'administracion@vibromine.cl'

/**
 * Envía la cotización por correo electrónico a los correos oficiales de VIBROMINE:
 * - juanc.gonzalez.a@vibromine.cl
 * - administracion@vibromine.cl
 */
async function sendQuotationEmailNotification(payload) {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_PRIMARY_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        _subject: `Nueva Cotización VIBROMINE: ${payload.service_interest} — ${payload.company}`,
        _cc: OFFICIAL_CC_EMAILS,
        _replyto: payload.email,
        _template: 'table',
        _captcha: 'false',
        Nombre_Completo: payload.full_name,
        Empresa_o_Faena: payload.company,
        Cargo_o_Area: payload.role_position,
        Correo_Cliente: payload.email,
        Telefono_Contacto: payload.phone,
        Servicio_Solicitado: payload.service_interest,
        Prioridad: payload.urgency_level,
        Ubicacion_Faena: payload.location_faena,
        Detalle_Requerimiento: payload.message,
        Destinatarios_Oficiales: 'juanc.gonzalez.a@vibromine.cl, administracion@vibromine.cl'
      })
    })
    return response.ok
  } catch (err) {
    console.warn('Aviso: envío de correo directo pendiente de conexión:', err)
    return false
  }
}

/**
 * Envía una solicitud de cotización o contacto a los correos oficiales y a Supabase.
 * Si aún no se han configurado las variables de entorno de Supabase,
 * almacena el registro localmente y despacha la notificación por correo.
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
    recipient_emails: 'juanc.gonzalez.a@vibromine.cl, administracion@vibromine.cl',
    status: 'Enviado'
  }

  // Envía notificación a juanc.gonzalez.a@vibromine.cl y administracion@vibromine.cl
  const emailPromise = sendQuotationEmailNotification(payload)

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('vibromine_leads')
      .insert([payload])
      .select()

    if (error) {
      console.error('Error al guardar en Supabase:', error)
      throw new Error(error.message || 'No se pudo registrar la solicitud en la base de datos.')
    }

    await emailPromise
    saveLeadLocally(payload, 'cloud')
    return { mode: 'supabase', data }
  } else {
    await emailPromise
    const saved = saveLeadLocally(payload, 'email_official')
    return { mode: 'email_official', data: [saved] }
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

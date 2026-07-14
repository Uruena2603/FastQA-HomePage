export const CONTACT_EMAIL = 'contacto@fastqa.com'
export const SUPPORT_EMAIL = 'soporte@fastqa.com'
export const CONTACT_PHONE = '+52 (55) 1234-5678'
export const CONTACT_PHONE_E164 = '525512345678'

export function buildMailtoDemoUrl(source: string): string {
  const subject = encodeURIComponent('Solicitud de demo FastQA')
  const body = encodeURIComponent(
    `Hola FastQA,\n\nQuiero solicitar una demo.\nOrigen: ${source}\n\nNombre:\nEmpresa:\nMensaje:\n`,
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export function buildWhatsappDemoUrl(source: string): string {
  const text = encodeURIComponent(
    `Hola FastQA, quiero solicitar una demo. Llegué desde: ${source}`,
  )
  return `https://wa.me/${CONTACT_PHONE_E164}?text=${text}`
}

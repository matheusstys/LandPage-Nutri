export const config = {
  name: 'SEUNOME',
  whatsapp: 'SEUWHATSAPP',   // só números: ex. 11999998888
  instagram: 'SEUINSTAGRAM', // sem @: ex. nutri.fulana
  crn: 'CRN-0 00000',        // seu registro profissional
  price: 'R$ 297',
  spots: 'vagas limitadas',
} as const

export type Config = typeof config

export const links = {
  whatsapp: (msg: string) =>
    `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(msg)}`,
  instagram: `https://instagram.com/${config.instagram}`,
} as const

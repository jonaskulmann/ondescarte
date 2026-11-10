'use server'

export async function getGeocodificarEndereco(endereco: string) {
  if (!endereco.trim()) return null

  const q = encodeURIComponent(`${endereco}, Porto Alegre, RS, Brasil`)

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1&countrycodes=br`,
    { headers: { 'User-Agent': 'ondescarte (ondescarte@gmail.com)' } }
  )

  if (!res.ok) return null

  const data = await res.json()
  if (!data.length) return null

  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
  }
}
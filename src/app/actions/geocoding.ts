'use server'

export async function getGeocodificarEndereco(endereco: string) {

    if (!endereco) return null

    const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${endereco}&format=json&limit=1`,
    { headers: { 'User-Agent': 'ondescarte' } }
    )

    const data = await res.json()

    if (!data.length) return null

    return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
    }

}
'use client'

import { useState } from 'react';
import { getGeocodificarEndereco } from '../actions/geocoding';

export default function TesteGeo() {
  const [endereco] = useState('avenida paulista, são paulo, brasil');
  const [coordenadas, setCoordenadas] = useState<{ lat: number; lon: number } | null>(null);

    async function handleGeocodificar() {
        const coordenadas = await getGeocodificarEndereco(endereco);
        setCoordenadas(coordenadas);
    }

    return (

        <div>
            <button onClick={handleGeocodificar}>Chamar Action</button>
            {coordenadas && <p>Coordenadas: {coordenadas.lat}, {coordenadas.lon}</p>}
        </div>


    )

}
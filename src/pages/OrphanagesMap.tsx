import React from 'react'
import mapMarkerImg from '../images/map_marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import 'leaflet/dist/leaflet.css'

import { Map, TileLayer } from 'react-leaflet'

import '../style/pages/orphanege-page.css'

function OrphanegeMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criancas estao esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Sao Paulo</strong>
                    <span>Sao Paulo</span>
                </footer>
                
            </aside>
            <Map
            center={[-23.6289361,-46.6617802]}
            zoom={15}
            style={{width: "100%", height: "100%"}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </ Map>

            <Link to="" className="create-orphanege">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );
}

export default OrphanegeMap
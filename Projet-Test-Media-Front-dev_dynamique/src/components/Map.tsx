import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const spotsData = [
  { id: 1, region: 'Region A', format: 'Format A', company: 'Company A', lat: 51.505, lng: -0.09 },
  { id: 2, region: 'Region B', format: 'Format B', company: 'Company B', lat: 51.51, lng: -0.1 },
  // Add more spot data as needed
];

const Map: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-200 p-4">
        <select
          value={filter || ''}
          onChange={(e) => setFilter(e.target.value || null)}
          className="p-2 border border-gray-300 rounded"
        > 
          <option value="">Tous les spots</option>
          {/* Generate options from unique regions, formats, or companies */}
          {Array.from(new Set(spotsData.map(spot => spot.region))).map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      {/* Map */}
      <div className="flex-grow">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ width: '150px', height: '150px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Render markers based on filtered data */}
          {spotsData.filter(spot => !filter || spot.region === filter).map(spot => (
            <Marker key={spot.id} position={[spot.lat, spot.lng]}>
              <Popup>
                <div>
                  <h3>{spot.company}</h3>
                  <p>{spot.format}</p>
                  <p>{spot.region}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

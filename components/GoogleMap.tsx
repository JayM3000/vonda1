'use client';

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { restaurantInfo } from '@/data/restaurant-info';

// Default coordinates for VONDA'S KITCHEN in Newark, NJ
// These are approximate based on the address
const defaultCenter = {
  lat: 40.737,
  lng: -74.172
};

const containerStyle = {
  width: '100%',
  height: '300px'
};

// In a production environment, you would want to move this to an environment variable
const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY'; // This will be replaced in production with a real key

export default function GoogleMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      loadingElement={
        <div className="h-full w-full flex items-center justify-center bg-gray-200">
          <p className="text-gray-500">Loading map...</p>
        </div>
      }
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={15}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker
          position={defaultCenter}
          title={restaurantInfo.name}
        />
      </GoogleMap>
    </LoadScript>
  );
}

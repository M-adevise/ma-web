import { useEffect, useState } from 'react';
import { Coordinate } from '../interfaces';
import { mapProvider } from '../providers/map-provider';
import { cache, getCached } from '../utils';

export const useGetGeoLocation = () => {
  const [location, setLocation] = useState<Coordinate>({
    longitude: -74.004001,
    latitude: 40.741474,
    name: undefined,
  });

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(async p => {
        const { latitude, longitude } = p.coords;

        const data = getCached.coordinates();

        if (!data || data.latitude !== latitude || data.longitude !== longitude) {
          const name = await mapProvider.getLocationNameByCoordinates({ latitude, longitude });
          cache.coordinates({ latitude, longitude, name });
          setLocation({ latitude, longitude, name });
          return () => {};
        }

        setLocation(prev => ({ latitude, longitude, name: prev.name || data.name || 'google' }));
      });
    } catch {}
  }, []);

  return location;
};

import { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import supabase from "@/components/map/supabasedb";

const containerStyle = { width: '600px', height: '450px' };
const defaultCenter = { lat: 37.3229978, lng: -122.0321823 };

type Location = {
  user_id: string;
  lat: number;
  lng: number;
};

export default function MyMap({ user_id }: { user_id: string }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [locations, setLocations] = useState<Location[]>([]);
  const [myPosition, setMyPosition] = useState(defaultCenter);


  useEffect(() => {
    let watchId: number;
    const upsertLocation = async (lat: number, lng: number) => {
        await supabase.from('locations').upsert([
          { user_id, lat, lng, updated_at: new Date().toISOString() }
        ]);
    
    };

    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setMyPosition({ lat: latitude, lng: longitude });
          upsertLocation(latitude, longitude); // upsert immediately on change
        },
        (err) => {
          console.error("Geolocation error:", err);
        }
      );
    }

    // Also upsert every 2 minutes in case of missed updates
    const interval = setInterval(() => {
      upsertLocation(myPosition.lat, myPosition.lng);
    }, 1 * 60 * 1000);

    return () => {
      clearInterval(interval);
      if (navigator.geolocation && watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
    // Only depend on user_id (not myPosition) to avoid interval recreation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id]);

  // 2. Fetch all users' locations every 2 minutes
  useEffect(() => {
    let isMounted = true;
    const fetchLocations = async () => {
      try {
        const { data } = await supabase.from('locations').select('user_id, lat, lng');
        if (data && isMounted) setLocations(data);
      } catch (err) {
        console.error("Failed to fetch locations:", err);
      }
    };
    fetchLocations();
    const interval = setInterval(fetchLocations, 2 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  // 3. Render all markers, center on your position
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={myPosition} zoom={15}>
      {locations.map(loc => (
        <Marker
          key={loc.user_id}
          position={{ lat: loc.lat, lng: loc.lng }}
          label={loc.user_id[0]}
        />
      ))}
        {/* <Marker
          key="me"
          position={myPosition}
          label="Me"
        /> */}
    </GoogleMap>
  );
}
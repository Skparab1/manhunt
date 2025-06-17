import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import supabase from "../../app/utils/supabase";

const defaultCenter: [number, number] = [37.3129978, -122.0121823];
const defaultZoom = 13;

type SeekerLocation = {
  id: number;
  runner: string;
  lat: number;
  long: number;
  updated_at: string;
};

export default function LeafletMap() {
  const [seekerLocations, setSeekerLocations] = useState<SeekerLocation[]>([]);
  const [runners, setRunners] = useState<string[]>([]);
  const [runnerEmail, setRunnerEmail] = useState<string>("");

  // 1. Get latest hunt's runners on mount
  useEffect(() => {
    async function fetchRunners() {
      const { data: hunts } = await supabase
        .from("hunts")
        .select("runners")
        .order("created_at", { ascending: false })
        .limit(1);

      setRunners(hunts?.[0]?.runners || []);
    }
    fetchRunners();
  }, []);

  // 2. Prompt for runner email if not set
  useEffect(() => {
    if (!runnerEmail && runners.length) {
      const email = window.prompt(
        `Enter your runner email (choose from: ${runners.join(", ")})`
      );
      if (email && runners.includes(email)) {
        setRunnerEmail(email);
      }
    }
  }, [runners, runnerEmail]);

  // 3. Update this runner's location in Supabase every 10 seconds
  useEffect(() => {
    if (!runnerEmail) return;

    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        await supabase.from("userLocations").upsert({
          runner: runnerEmail,
          lat: latitude,
          long: longitude,
          updated_at: new Date().toISOString(),
        });
      });
    };

    updateLocation();
    const interval = setInterval(updateLocation, 10000);
    return () => clearInterval(interval);
  }, [runnerEmail]);

  // 4. Fetch all runners' locations every 10 seconds
  useEffect(() => {
    if (!runners.length) return;

    async function fetchLocations() {
      const { data: locations } = await supabase
        .from("userLocations")
        .select("id, runner, lat, long, updated_at")
        .in("runner", runners);

      setSeekerLocations(locations || []);
    }

    fetchLocations();
    const interval = setInterval(fetchLocations, 10000);
    return () => clearInterval(interval);
  }, [runners]);

  const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: "450px", width: "600px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {seekerLocations.map((loc) => (
        <Marker key={loc.runner} position={[loc.lat, loc.long]} icon={markerIcon}>
          <Popup>
            Runner: {loc.runner}
            <br />
            Updated: {new Date(loc.updated_at).toLocaleTimeString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
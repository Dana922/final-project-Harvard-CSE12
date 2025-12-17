// public/scripts/map.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("map_container");
  if (!container) {
    console.error('Map container with id "map_container" not found.');
    return;
  }

  if (typeof L === "undefined") {
    console.error(
      "Leaflet (L) is not defined. Make sure the Leaflet JS <script> is included before this file."
    );
    return;
  }

  const nycLatLng = [40.7128, -74.006];
  const zoomLevel = 11;

  const map = L.map("map_container").setView(nycLatLng, zoomLevel);

  const attributionHtml =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: attributionHtml,
  }).addTo(map);

  fetch("/data/nyc_libraries.json")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load JSON: " + res.statusText);
      return res.json();
    })
    .then((libraries) => {
      const latLngs = [];

      libraries.forEach((lib) => {
        if (!lib?.the_geom?.coordinates) return;

        const [lon, lat] = lib.the_geom.coordinates;
        const latLng = [lat, lon];
        latLngs.push(latLng);

        const popupHtml = `
          <strong>${lib.name ?? "Unnamed library"}</strong><br>
          ${
            (lib.housenum ? lib.housenum + " " : "") + (lib.streetname || "")
          }<br>
          ${lib.city || ""} ${lib.zip || ""}<br>
          ${
            lib.url
              ? `<a href="${lib.url}" target="_blank" rel="noopener noreferrer">
                   Library website
                 </a>`
              : ""
          }
        `;

        L.marker(latLng).bindPopup(popupHtml).addTo(map);
      });

      if (latLngs.length > 0) {
        const bounds = L.latLngBounds(latLngs);
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    })
    .catch((err) => {
      console.error("Error loading library data:", err);
    });
});

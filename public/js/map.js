
    const map = new maplibregl.Map({
      container: 'map', // container ID
      style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=poCMu6IXSaQNJ9d5Zl2F', // MapTiler style
      center: coordinates, // Longitude, Latitude (example: New Delhi)
      zoom: 10
    });

    // Optional: add navigation controls
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
 
   const marker=new maplibregl.Marker()
   .setLngLat(coordinates)
   .addTo(map);
  
    
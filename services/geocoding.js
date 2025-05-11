// services/geocoding.js
const axios = require('axios');
const MAPTILER_API_KEY = process.env.MAP_TOKEN;

module.exports.geocodeLocation = async (location) => {
  const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(location)}.json?key=${MAPTILER_API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data && response.data.features && response.data.features.length > 0) {
      const coords = response.data.features[0].geometry.coordinates; // [lng, lat]
      return {
        type: 'Point',
        coordinates: coords
      };
    } else {
      throw new Error('No geocoding result found.');
    }
  } catch (err) {
    console.error('Geocoding failed:', err.message);
    return null;
  }
};

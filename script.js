// Initialize map centered on Pakistan
const map = L.map('map').setView([30.1575, 70.4893], 5);

// Basemap layers
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
});

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri',
    maxZoom: 19
});

osmLayer.addTo(map);

// Cities data (15+ major cities)
const cities = [
    { name: 'Karachi', lat: 24.8607, lng: 67.0011, province: 'Sindh', type: 'Metropolitan', temp: 28, rainfall: 120 },
    { name: 'Lahore', lat: 31.5497, lng: 74.3436, province: 'Punjab', type: 'Metropolitan', temp: 26, rainfall: 180 },
    { name: 'Islamabad', lat: 33.6844, lng: 73.0479, province: 'Islamabad', type: 'Capital', temp: 24, rainfall: 150 },
    { name: 'Rawalpindi', lat: 33.5731, lng: 73.1785, province: 'Punjab', type: 'City', temp: 23, rainfall: 160 },
    { name: 'Multan', lat: 30.1575, lng: 71.4433, province: 'Punjab', type: 'City', temp: 32, rainfall: 90 },
    { name: 'Faisalabad', lat: 31.4181, lng: 72.9749, province: 'Punjab', type: 'City', temp: 28, rainfall: 110 },
    { name: 'Peshawar', lat: 34.0151, lng: 71.5788, province: 'KPK', type: 'City', temp: 25, rainfall: 140 },
    { name: 'Quetta', lat: 30.1798, lng: 66.9750, province: 'Balochistan', type: 'City', temp: 22, rainfall: 80 },
    { name: 'Hyderabad', lat: 25.2768, lng: 68.3394, province: 'Sindh', type: 'City', temp: 30, rainfall: 140 },
    { name: 'Sialkot', lat: 32.4897, lng: 74.5318, province: 'Punjab', type: 'City', temp: 26, rainfall: 170 },
    { name: 'Gujranwala', lat: 32.1757, lng: 74.1934, province: 'Punjab', type: 'City', temp: 27, rainfall: 165 },
    { name: 'Bahawalpur', lat: 29.1957, lng: 71.6702, province: 'Punjab', type: 'City', temp: 33, rainfall: 85 },
    { name: 'Sukkur', lat: 27.7067, lng: 68.8405, province: 'Sindh', type: 'City', temp: 34, rainfall: 110 },
    { name: 'Sargodha', lat: 32.0829, lng: 72.6417, province: 'Punjab', type: 'City', temp: 29, rainfall: 120 },
    { name: 'Mardan', lat: 34.2076, lng: 72.0365, province: 'KPK', type: 'City', temp: 24, rainfall: 135 },
    { name: 'Gilgit', lat: 35.9197, lng: 74.3148, province: 'Gilgit-Baltistan', type: 'City', temp: 18, rainfall: 200 }
];



// Weather stations data (15+)
const weatherStations = [
    { name: 'Karachi Weather Station', lat: 24.9056, lng: 67.1595, station: 'Karachi', temp: 28.5, rainfall: 125, humidity: 72, aqi: 85, category: 'Moderate' },
    { name: 'Lahore Weather Station', lat: 31.5865, lng: 74.2131, station: 'Lahore', temp: 26.2, rainfall: 185, humidity: 68, aqi: 72, category: 'Moderate' },
    { name: 'Islamabad Weather Station', lat: 33.7306, lng: 73.2093, station: 'Islamabad', temp: 24.1, rainfall: 155, humidity: 62, aqi: 78, category: 'Moderate' },
    { name: 'Rawalpindi AWS', lat: 33.6000, lng: 73.2000, station: 'Rawalpindi', temp: 23.5, rainfall: 162, humidity: 65, aqi: 75, category: 'Moderate' },
    { name: 'Peshawar AWS', lat: 34.0228, lng: 71.5722, station: 'Peshawar', temp: 25.3, rainfall: 142, humidity: 60, aqi: 82, category: 'Moderate' },
    { name: 'Quetta AWS', lat: 30.1890, lng: 66.9680, station: 'Quetta', temp: 22.4, rainfall: 82, humidity: 45, aqi: 60, category: 'Good' },
    { name: 'Multan AWS', lat: 30.2000, lng: 71.4500, station: 'Multan', temp: 32.1, rainfall: 92, humidity: 58, aqi: 95, category: 'Moderate' },
    { name: 'Faisalabad AWS', lat: 31.4300, lng: 72.9600, station: 'Faisalabad', temp: 28.3, rainfall: 112, humidity: 66, aqi: 88, category: 'Moderate' },
    { name: 'Sukkur AWS', lat: 27.7200, lng: 68.8600, station: 'Sukkur', temp: 34.2, rainfall: 115, humidity: 55, aqi: 105, category: 'Unhealthy' },
    { name: 'Hyderabad AWS', lat: 25.2900, lng: 68.3600, station: 'Hyderabad', temp: 30.4, rainfall: 142, humidity: 70, aqi: 92, category: 'Moderate' },
    { name: 'Bahawalpur AWS', lat: 29.2000, lng: 71.6800, station: 'Bahawalpur', temp: 33.2, rainfall: 87, humidity: 52, aqi: 100, category: 'Moderate' },
    { name: 'Sialkot AWS', lat: 32.5000, lng: 74.5400, station: 'Sialkot', temp: 26.1, rainfall: 172, humidity: 69, aqi: 76, category: 'Moderate' },
    { name: 'Gujranwala AWS', lat: 32.1800, lng: 74.2000, station: 'Gujranwala', temp: 27.2, rainfall: 167, humidity: 67, aqi: 80, category: 'Moderate' },
    { name: 'Sargodha AWS', lat: 32.0900, lng: 72.6500, station: 'Sargodha', temp: 29.1, rainfall: 122, humidity: 64, aqi: 84, category: 'Moderate' },
    { name: 'Mardan AWS', lat: 34.2150, lng: 72.0400, station: 'Mardan', temp: 24.2, rainfall: 137, humidity: 61, aqi: 77, category: 'Moderate' },
    { name: 'Gilgit AWS', lat: 35.9300, lng: 74.3300, station: 'Gilgit', temp: 18.5, rainfall: 202, humidity: 50, aqi: 45, category: 'Good' }
];

// Create markers
const cityMarkers = L.layerGroup();
const weatherMarkers = L.layerGroup();

// Add city markers
cities.forEach(city => {
    const marker = L.circleMarker([city.lat, city.lng], {
        radius: 8,
        fillColor: '#dc2626',
        color: '#991b1b',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.7
    });

    const popupContent = `
        <div class="popup-title">${city.name}</div>
        <div class="popup-info">
            <span class="popup-label">Province:</span>
            <span>${city.province}</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">Type:</span>
            <span>${city.type}</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">Temperature:</span>
            <span>${city.temp}°C</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">Rainfall:</span>
            <span>${city.rainfall}mm</span>
        </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 250 });
    marker.addTo(cityMarkers);
});

// Add weather station markers
weatherStations.forEach(station => {
    const marker = L.circleMarker([station.lat, station.lng], {
        radius: 6,
        fillColor: '#2563eb',
        color: '#1e40af',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.7
    });

    const popupContent = `
        <div class="popup-title">Environmental Monitoring Station</div>
        <div class="popup-info">
            <span class="popup-label">Station:</span>
            <span>${station.station}</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">Temperature:</span>
            <span>${station.temp} °C</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">Rainfall:</span>
            <span>${station.rainfall} mm</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">Humidity:</span>
            <span>${station.humidity} %</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">AQI:</span>
            <span>${station.aqi}</span>
        </div>
        <div class="popup-info">
            <span class="popup-label">Category:</span>
            <span>${station.category}</span>
        </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 250 });
    marker.addTo(weatherMarkers);
});

// Add layers to map
cityMarkers.addTo(map);
weatherMarkers.addTo(map);

// Layer toggle functionality
document.getElementById('cities-toggle').addEventListener('change', (e) => {
    if (e.target.checked) {
        map.addLayer(cityMarkers);
    } else {
        map.removeLayer(cityMarkers);
    }
});

document.getElementById('weather-toggle').addEventListener('change', (e) => {
    if (e.target.checked) {
        map.addLayer(weatherMarkers);
    } else {
        map.removeLayer(weatherMarkers);
    }
});

// Basemap switching
document.getElementById('basemap-select').addEventListener('change', (e) => {
    map.removeLayer(osmLayer);
    map.removeLayer(satelliteLayer);

    if (e.target.value === 'osm') {
        osmLayer.addTo(map);
    } else {
        satelliteLayer.addTo(map);
    }
});

// Province filter functionality
document.getElementById('province-filter').addEventListener('change', (e) => {
    const selectedProvince = e.target.value;

    cityMarkers.eachLayer(layer => {
        const cityName = Object.values(cities).find(c => c.name === layer.getPopup().getContent().split('<')[1]);
        
        if (!selectedProvince) {
            layer.setStyle({ opacity: 0.8, fillOpacity: 0.7 });
        } else {
            const city = cities.find(c => c.lat === layer.getLatLng().lat);
            if (city && city.province === selectedProvince) {
                layer.setStyle({ opacity: 0.8, fillOpacity: 0.7 });
            } else {
                layer.setStyle({ opacity: 0.3, fillOpacity: 0.2 });
            }
        }
    });
});

// Map controls
L.control.zoom({ position: 'topright' }).addTo(map);

// Add scale control
L.control.scale({ position: 'bottomright' }).addTo(map);

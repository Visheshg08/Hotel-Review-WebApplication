mapboxgl.accessToken = 'pk.eyJ1IjoidmlzaGVzaDA4IiwiYSI6ImNrbWhpMmU0czA3bHozMXFrcHNkemp5cWcifQ.mXB248adtJ2VWggJU8yBUA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13
});

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
    );
    map.addControl(new mapboxgl.NavigationControl());
    
    
    new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
            )
            .addTo(map)
            
            
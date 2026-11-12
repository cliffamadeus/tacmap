document.addEventListener("deviceready", function () {

    const initialLocation = [
        8.360137990765425,
        124.86835731166991
    ];

    const map = L.map("map").setView(
        initialLocation,
        15
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    L.marker(initialLocation)
        .addTo(map)
        .bindPopup("TacMap Initial Location")
        .openPopup();

}, false);
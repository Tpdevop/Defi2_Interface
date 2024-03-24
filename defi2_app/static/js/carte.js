
let map; // Declare map variable outside functions for global access

async function initMap() {
    const capitalsData = await fetchCapitalsData(); // Fetch data from the simulated data source
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 18.0784, lng: -15.8852 }, // Centered around Nouakchott
        disableDefaultUI: true,
    });

    displayRoute(capitalsData);
    displayMarkers(capitalsData);
}

async function fetchCapitalsData() {
    return [
        { Ville: "Aïoun", Latitude: 16.8366893287323, Longitude: -9.27583480330441 },
        { Ville: "Akjoujt", Latitude: 19.9420143167071, Longitude: -14.6440193516613 },
        { Ville: "Aleg", Latitude: 17.1728009990846, Longitude: -13.9023810848904 },
        { Ville: "Atar", Latitude: 20.6190971368345, Longitude: -13.4188043441809 },
        { Ville: "Kaédi", Latitude: 16.0455219912174, Longitude: -13.1873050779235 },
        { Ville: "Kiffa", Latitude: 16.678771880566, Longitude: -11.4111923888962 },
        { Ville: "Néma", Latitude: 16.3926143684381, Longitude: -7.34328812930029 },
        { Ville: "Nouadhibou", Latitude: 21.0200766331283, Longitude: -15.9151199295992 },
        { Ville: "Nouakchott", Latitude: 18.0783994226296, Longitude: -15.885155269477 },
        { Ville: "Rosso", Latitude: 16.6264755333439, Longitude: -15.6941505288147 },
        { Ville: "Sélibaby", Latitude: 15.4729996284158, Longitude: -12.1965786387684 },
        { Ville: "Tidjikja", Latitude: 18.6315729894793, Longitude: -11.5524434053275 },
        { Ville: "Zoueratt", Latitude: 23.4958870003132, Longitude: -10.1376367144798 }
    ];
}

async function displayRoute(capitalsData) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#0000FF", strokeOpacity: 0.8, strokeWeight: 3 }
    });

    const waypoints = capitalsData.map(capital => ({
        location: { lat: capital.Latitude, lng: capital.Longitude },
        stopover: true
    }));

    const request = {
        origin: waypoints[0].location,
        destination: waypoints[0].location,
        waypoints: waypoints.slice(1),
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (result, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(result);
        } else {
            window.alert("Directions request failed due to " + status);
        }
    });
}

async function displayMarkers(capitalsData) {
    const infowindow = new google.maps.InfoWindow();

    capitalsData.forEach(capital => {
        const marker = new google.maps.Marker({
            position: { lat: capital.Latitude, lng: capital.Longitude },
            map: map,
            title: capital.Ville
        });

        marker.addListener("click", () => {
            infowindow.setContent(`<h3>${capital.Ville}</h3>`);
            infow
            infowindow.open(map, marker);
        });
    });
}

// Function to display the itinerary
document.getElementById("show-itinerary-button").addEventListener("click", () => {
    // Specify departure and arrival coordinates or addresses here
    const depart = { lat: 18.0784, lng: -15.8852 }; // Example: Nouakchott
    const arrivee = { lat: 16.8366893287323, lng: -9.27583480330441 }; // Example: Aïoun
    afficherItineraire(depart, arrivee);
});

// Function to display the route between two points
async function afficherItineraire(depart, arrivee) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
        polylineOptions: { strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 3 }
    });

    const request = {
        origin: depart,
        destination: arrivee,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (result, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(result);
        } else {
            window.alert("Directions request failed due to " + status);
        }
    });
}


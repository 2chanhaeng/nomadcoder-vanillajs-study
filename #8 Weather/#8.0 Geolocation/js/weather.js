function onGeoOk(position) {
    const lat = position.coords.longitude;
    const lng = position.coords.latitude;
    console.log(`You live in ${lat}, ${lng}`);
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
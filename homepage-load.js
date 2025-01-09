let devices = {};

function fetchDevices() {
    fetch('./device-list.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        devices = data;
        console.log("devices fetched")
        loadTiles();
    })
    .catch(error => {
        console.error('device fetching error:', error);
    });
}

function loadTiles() {
    let tileTemplate = document.getElementById("tile-template");
    let tileList = document.getElementById("device-list");

    for(let i = 0; i < devices.length; i++) {
        let tile = tileTemplate.cloneNode(true);
        tile.id = "";
        tile.querySelector('[data-field="device-image"]').src = devices[i].img;
        tile.querySelector('[data-field="device-name"]').innerText = devices[i].name;
        tile.href = "./apparaat.html?" + devices[i].name;
        tileList.append(tile);
    }
    tileTemplate.remove();
}

fetchDevices();
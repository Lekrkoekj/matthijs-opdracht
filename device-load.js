let deviceName = decodeURIComponent(window.location.href.split("?")[1]);
let device;

function fetchDevices() {
    fetch('./device-list.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        device = data.filter((device) => device.name == deviceName)[0];


        console.log("devices fetched")
        loadDevicePage();
    })
    .catch(error => {
        console.error('device fetching error:', error);
    });
}

fetchDevices();

function loadDevicePage() {
    document.getElementById("device-page-title").innerText = "Informatie over " + deviceName;
    document.title = deviceName + " verhuurinformatie";
    document.querySelector('[data-field="device-img"]').src = device.img;
    document.querySelector('[data-field="device-name"]').innerText = deviceName;
    document.querySelector('[data-field="device-purpose"]').innerText = device.purpose;
    document.querySelector('[data-field="device-accessories"]').innerText = device.accessories;
    document.querySelector('[data-field="device-extra-costs"]').innerText = device.extraCosts;
}

// Return to main tab
function goBackToOriginalTab() {
    if (window.opener) {
        window.opener.focus();
        window.close();
    } else {
        window.location = "./index.html";
    }
}
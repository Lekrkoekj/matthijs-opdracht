let searchBar = document.getElementById("search-bar");

let tiles = document.getElementsByClassName("device-tile");

function Search() {
    let resultsAmount = 0;
    for(let i = 0; i < tiles.length; i++) {
        if(tiles[i].querySelector('[data-field="device-name"]').innerText.toLowerCase().includes(searchBar.value.toLowerCase())) {
            tiles[i].parentElement.style.display = "block";
            resultsAmount++;
        }
        else {
            tiles[i].parentElement.style.display = "none";
        }
    }
    console.log(resultsAmount);
    if(resultsAmount == 0) {
        document.getElementById("no-results-text").style.display = "block";
    }
    else {
        document.getElementById("no-results-text").style.display = "none";
    }
}
const express = require("express");
const request = require("request");

const app = express();
const port = 8082; // default port to listen


// Home page statistics:
let etherscanAion = 'https://api.cryptonator.com/api/ticker/aion-usd';
let supply = 'https://api.alternative.me/v2/ticker/Aion/';
let blockTime = '';
let networkHash = '';

let aionPrice;
let aionChange;
let aionSupply;
let aionBlockTime;
let aioNetworkHash;

function getPrice() {
    request.get(etherscanAion, (error, response, body) => {
        if (error) {
            return console.log('There has been an error! Please contact support.');
        }
        aionPrice = JSON.parse(body)['ticker']['price'];
        aionChange = JSON.parse(body)['ticker']['change'];
    });
}

function getSupply() {
    request.get(supply, (error, response, body) => {
        if (error) {
            return console.log('There has been an error! Please contact support.');
        }
        aionSupply = JSON.parse(body)['data']['2062']['total_supply'];
    });
}

/*
function BlockTime() {

}

function aionNetworkHash() {

}
*/
getPrice();
getSupply();


setInterval(function () {
    getPrice();
    getSupply();
}, 30000)

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.json({
        aion_price: aionPrice,
        aion_change: aionChange,
        aion_supply: aionSupply,
    });
});

// define a route handler for the existing subscriptions
app.get('/', (req, res) => {
    res.json({
        
    });
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
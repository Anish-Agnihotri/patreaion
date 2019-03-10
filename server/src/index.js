const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();
const port = 8082; // default port to listen


// Home page statistics:
let etherscanAion = 'https://api.cryptonator.com/api/ticker/aion-usd';
let aionPrice;
function getPrice() {
    request.get(etherscanAion, (error, response, body) => {
        if (error) {
            return console.log('There has been an error! Please contact support.');
        }
        aionPrice = JSON.parse(body)['ticker']['price'];
    });
}

getPrice();

setInterval(function(){
    getPrice();
  }, 30000);
/*

let supply = 'https://api.alternative.me/v2/ticker/Aion/';
let blockTime = '';
let networkHash = '';


let aionChange;
let aionSupply;
let aionBlockTime;
let aioNetworkHash;



function getSupply() {
    request.get(supply, (error, response, body) => {
        if (error) {
            return console.log('There has been an error! Please contact support.');
        }
        aionSupply = JSON.parse(body)['data']['2062']['total_supply'];
    });
}
*/

// define a route handler for the default home page
app.get("/", cors(), (req, res) => {
    res.json({
        aion_price: aionPrice,
    });
});

// define a route handler for the existing subscriptions
app.get('/subscriptions', cors(), (req, res) => {
    res.json({
        0: {
            id: '0',
            sub_name: 'Uniswap',
            sub_description: 'Designed with simplicity in mind the Uniswap protocol provides an interface for seamless exchange of ERC20 tokens on Ethereum.',
            sub_owner: 'Anish',
            sub_percentage: '70%',
            sub_image: 'https://c.gitcoin.co/grants/f44f463328fbb8ebae169c2b2c0b42f7/hero.png'
        },
        1: {
            id: '1',
            sub_name: 'MyCrypto',
            sub_description: 'MyCrypto is an open-source, client-side tool for interacting with the blockchain.',
            sub_owner: 'Anish',
            sub_percentage: '20%',
            sub_image: 'https://journalducoin.com/wp-content/uploads/2018/03/MyCrypto-Comment-creer-un-portefeuille-securise-pour-stocker-vos-ethereums-et-tokens-ERC-20.png'
        },
        2: {
            id: '2',
            sub_name: 'Ryans sub',
            sub_description: 'Second sub description',
            sub_owner: 'Second sub owner',
            sub_percentage: '50%',
            sub_image: 'https://i.imgur.com/bg0MZPZ.jpg'
        }
    });
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
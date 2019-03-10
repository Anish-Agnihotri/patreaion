const express = require("express");
const request = require("request");
const cors = require("cors");
var bodyParser = require('body-parser');
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
        aion_price: '0.138'
    });
});

let jsonSubscriptions =  [
     {
        id: '0',
        sub_name: 'The Open Blockchain',
        sub_description: 'Support Andreas M. Antonopoulos\' open blockchain seminars by contiuning to keep them sponsor-free.',
        sub_owner: 'Anish',
        sub_percentage: '90%',
        sub_image: 'https://bitcoinist.com/wp-content/uploads/2016/12/antonop.jpg'
    },
    {
        id: '1',
        sub_name: 'MKBHD Tech Reviews',
        sub_description: ' Support Marques Brownlee to fund and support future meetups, conferences, and tech reviews.',
        sub_owner: 'Anish',
        sub_percentage: '20%',
        sub_image: 'https://ioneblackamericaweb.files.wordpress.com/2016/09/marquesbrownleess.png?w=560&h=320&crop=1'
    },
    {
        id: '2',
        sub_name: 'SETI@Home',
        sub_description: 'Donate and voice your support for SETI, and support their work in understanding the nature of life.',
        sub_owner: 'Second sub owner',
        sub_percentage: '50%',
        sub_image: 'https://cdn.cnn.com/cnnnext/dam/assets/150103074330-hubble-space-background-2-full-169.jpg'
    }
]

// define a route handler for the existing subscriptions
app.get('/subscriptions', cors(), (req, res) => {
    res.json({
        jsonSubscriptions
    });
});

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post('/new', (req, res) => {
  res.json(jsonSubscriptions.push(req.body));
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
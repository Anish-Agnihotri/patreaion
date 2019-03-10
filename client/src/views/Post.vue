<template>
  <div class="post">
    <div class="pageHeader">
      <h1>Post a subscription</h1>
    </div>
    <div class="formSection">
      <form-wizard @on-complete="onComplete" title="" subtitle="" shape="square" back-button-text="Go back!"
        next-button-text="Go next!" finish-button-text="Publish Subscription" color="#40409a">
        <tab-content title="Setup Subscription" icon="ti-user">
          <div class="firstSub">
            <h1>Configure your subscription</h1>
            <p>Let's begin by setting up your subscription. Tell us some basic information about what you're looking to
              post to the platform for your subscribers, and we'll get you setup in a few quick and easy steps!</p>
            <h5>What's this for?</h5>
            <input type="text" name="name" placeholder='This will be your subscription title.' class='titleSend'/>
            <h5>Tell us more:</h5>
            <textarea class='descriptionSend' placeholder="What is your subscription offering? Why should people choose to spend their AION towards your subscription?">

            </textarea>
            <div class='margin'>
              <div class='monthly'>
                <h5>What is your monthly donation target? (in Aion)</h5>
                <p class='text'></p>
                <input type="number" name="amount" min="0" class='desiredNumber amountSend' @change="onNumChanged"/>
                <p style="font-size: 12px;">Estimated USD: ${{ price }}</p>
              </div>
              <div>
                <h5>Do you have an image for your subscription offering?</h5>
                <div>
                  <div class="file-upload-form">
                      Upload an image file:
                      <input type="file" @change="previewImage" accept="image/*">
                  </div>
                  <div class="image-preview" v-if="imageData.length > 0">
                      <img class="preview" :src="imageData">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tab-content>
        <tab-content title="Deploy Contract" icon="ti-settings" :before-change="beforeTabSwitch">
          <h1>Aiwa authentication</h1>
          <p>Now, we are going to deploy your contract.</p>
          <p>Upon accepting the prompt, your subscriptions contract will be generated, and ready to go! Then you can easily see your subscription in the Active subscriptions on the home page.</p>
        </tab-content>
        <tab-content title="Confirm Subscription" icon="fa-settings">
          <h1>You're good to go!</h1>
          <p>Yup, that's it. Getting a subscription setup with Patreaion is as easy that. You can check out the home page now to see if your subscription has been added!</p>
          <h5>Transaction information: {{ image }}</h5>
          <div style='padding-bottom: 25px;'>
            <img style='width: 200px;':src="imageData" />
            </br>
            <span style="font-size: 12px; padding-bottom: 30px;"><strong>Transaction hash</strong>: {{ replaceTX }}</span>
            </br>
            <span style="font-size: 12px; padding-bottom: 30px;"><strong>Subscription title</strong>: {{ title }}</span>
            </br>
            <span style="font-size: 12px; padding-bottom: 30px;"><strong>Subscription description</strong>: {{ description }}</span>
            </br>
            <span style="font-size: 12px; padding-bottom: 30px;"><strong>Subscription amount</strong>: {{ amount }} AION</span>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    components: {
      axios
    },
    data() {
      return {
        selectedFile: null,
        price: null,
        replaceTX: null,
        title: null,
        description: null,
        amount: null,
        image: null,
        imageData: "",
        percentage: "0%"
      }
    },
    methods: {
      onNumChanged(event) {
        let desired = document.getElementsByClassName('desiredNumber')[0].value;
        this.$http.get('http://localhost:8082/').then(function(data){
          let currentPrice = data.body['aion_price'];
          let converted = (desired*currentPrice).toFixed(2);
          this.price = converted;
        })
      },
      previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        },
      onComplete: function () {
        let randomInt = Math.round(Math.random()*10, 2) + 3;
        var jSONObject = {
          id: randomInt,
          sub_name: this.title,
          sub_description: this.description,
          amount: this.amount,
          txhash: this.replaceTX,
          sub_image: this.imageData,
          sub_percentage: this.percentage
        }
        this.$http.post('http://localhost:8082/new', jSONObject, {
          emulateJSON: true
        })
      },
      beforeTabSwitch: async function(){
        let simpleContract = aionweb3.eth.contract(
[
  {
      "outputs": [],
      "constant": false,
      "payable": true,
      "inputs": [],
      "name": "pay",
      "type": "function"
  },
  {
      "outputs": [],
      "constant": false,
      "payable": false,
      "inputs": [],
      "name": "incrementCounter",
      "type": "function"
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "int128"
          }
      ],
      "constant": true,
      "payable": false,
      "inputs": [],
      "name": "getCount",
      "type": "function"
  },
  {
      "outputs": [],
      "constant": false,
      "payable": false,
      "inputs": [],
      "name": "decrementCounter",
      "type": "function"
  },
  {
      "outputs": [],
      "payable": false,
      "inputs": [
          {
              "name": "_initCount",
              "type": "int128"
          }
      ],
      "name": "",
      "type": "constructor"
  },
  {
      "outputs": [],
      "inputs": [
          {
              "indexed": false,
              "name": "counter",
              "type": "bool"
          }
      ],
      "name": "CounterIncreased",
      "anonymous": false,
      "type": "event"
  },
  {
      "outputs": [],
      "inputs": [
          {
              "indexed": false,
              "name": "counter",
              "type": "bool"
          }
      ],
      "name": "CounterDecreased",
      "anonymous": false,
      "type": "event"
  }
]
)
          this.title = document.getElementsByClassName("titleSend")[0].value;
          this.description = document.getElementsByClassName("descriptionSend")[0].value;
          this.amount = document.getElementsByClassName('amountSend')[0].value;
          let simple = simpleContract.at("0xa0c2e4ea426762de0676686ca7265ddc29c406dcd50125eeff2f71d5d7089325"); //sets contract instance
          try {
            const txHash = await simple.pay({ value: (1 * 10 ** 16) }); //instance, function name then params (value)
            this.replaceTX = txHash;
          } catch(err) {
            console.log(err);
          }
          return true;
        }
      },
    }
</script>

<style lang="scss">
  .pageHeader {
    width: 100vw;
    height: 65px;
    padding-top: 15px;
    background-color: #40409a;
    text-align: center;
    color: #fff;

    h1 {
      margin: 0;
    }
  }

  .formSection {
    width: 50vw;
    margin-left: 25vw;
  }

.margin {
  div {
    width: 50%;
    display: inline-block;
    vertical-align: top;
  }
}

h5 {
  color: #40409a;
}
img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #DDD;
  padding: 5px;
}

textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}
input[type="text"] {
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 5px;
}

input[type="number"] {
  width: 100px;
  height: 35px;
  padding-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
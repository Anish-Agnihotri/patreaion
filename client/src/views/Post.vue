<template>
  <div class="post">
    <div class="pageHeader">
      <h1>Post a subscription</h1>
    </div>
    <div class="formSection">
      <form-wizard @on-complete="onComplete" title="" subtitle="" shape="square" back-button-text="Go back!"
        next-button-text="Go next!" finish-button-text="We're there" color="#40409a">
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
                <p style="font-size: 12px;">Estimated USD: $<span class='outputNumber'></span></p>
              </div>
              <div>
                <h5>Do you have an image for your subscription offering?</h5>
                <div>
                  <input type="file" @change="onFileChanged">
                  <button @click="onUpload">Upload!</button>
                </div>
              </div>
            </div>
          </div>
        </tab-content>
        <tab-content title="Deply Contract" icon="ti-settings" :before-change="beforeTabSwitch">
          <h1>Aiwa authentication</h1>
          <p>Now, we are going to deploy your contract.</p>
          <p>Upon accepting the prompt, your subscriptions contract will be generated, and ready to go! Then you can easily see your subscription in the Active subscriptions on the home page.</p>
        </tab-content>
        <tab-content title="Share Subscription" icon="fa-settings">Yuhuuu! This seems pretty damn simple</tab-content>
      </form-wizard>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedFile: null
      }
    },
    methods: {
      onFileChanged(event) {
        this.selectedFile = event.target.files[0]
      },
      onNumChanged(event) {
        let desired = document.getElementsByClassName('desiredNumber')[0].value;
        this.$http.get('http://localhost:8082/').then(function(data){
          let currentPrice = data.body['aion_price'];
          let converted = (desired*currentPrice).toFixed(2);
        })
      },
      onUpload() {
        console.log(this.selectedFile);
      },
      onComplete: function () {
        alert('Yay. Done!');
      },
      beforeTabSwitch: function(){
          let title = document.getElementsByClassName("titleSend")[0].value;
          let description = document.getElementsByClassName("descriptionSend")[0].value;
          let amount = document.getElementsByClassName('amountSend')[0].value;
          console.log(title + description + amount); // insert the metamask bullshit here.
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
<template>
  <div class="post">
    <div class="pageHeader">
      <h1>Post a subscription</h1>
    </div>
    <div class="formSection">
      <form-wizard @on-complete="onComplete"
        title=""
        subtitle=""
        shape="square"
        back-button-text="Go back!"
        next-button-text="Go next!"
        finish-button-text="We're there"
        color="#40409a">
        <tab-content title="Setup Subscription" icon="ti-user">
          <div class="firstSub">
            <h1>Configure your subscription</h1>
            <p>Let's begin by setting up your subscription. Tell us some basic information about what you're looking to post to the platform for your subscribers, and we'll get you setup in a few quick and easy steps!</p>
          </div>
        </tab-content>
        <tab-content title="Deply Contract" icon="ti-settings">My second tab content</tab-content>
        <tab-content title="Share Subscription" icon="fa-settings">Yuhuuu! This seems pretty damn simple</tab-content>
      </form-wizard>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onComplete: function(){
        alert('Yay. Done!');
      }
    }
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
</style>



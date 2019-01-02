<template>
  <div id="app" class="container-fluid">
    <h5>5 травм {{searchParams.user}}</h5>
    <b-form-input v-model="searchParams.user" type="text" placeholder="Enter your name"></b-form-input>
    <CardDeck :cards="deck" :store="store"/>
    <CardPool :cards="pool"/>
  </div>
</template>

<script>
import Store from "./Store.js";
import CardPool from "./components/CardPool.vue";
import CardDeck from "./components/CardDeck.vue";
import vueUrlParameters from "vue-url-parameters"; //updateUrlHash

const store = new Store();

export default {
  mixins: [vueUrlParameters],
  name: "app",
  components: {
    CardPool,
    CardDeck
  },

  computed: {
    pool: function() {
      const result = this.cardSet.filter(item => !item.onDesk)
      store.updateBase64Url()
      //   hash = encodeCardsToHash(result);
      // // window.location.hash = hash ? hash : "";
      // if (hash) {
      //   this.searchParams.hash = hash ? hash : "";
      //   // this.updateUrlHash(this.searchParams);
      // }
      return result;
    },
    deck: function() {
      return this.cardSet.filter(item => item.onDesk);
    }
  },
  data: function() {

    return {
      cardSet: store.state.cards,
      store,
      searchParams: {
        hash: "",
        user: ""
      }
    };
  },
  watch: {
    name: function(newName, oldName) {
      this.searchParams.user = newName;
      // this.updateUrlHash(this.searchParams);
      return;
    }
  },
  created: function() {
    this.searchParams = this.getFiltersFromUrl(this.searchParams);    
    this.store.updateFromBase64();
    // const decoded = decodeHashToCards(this.searchParams.hash);
    // this.cardSet.forEach(item => {
    //   if (decoded.includes(item.id)) {
    //     item.onDesk = false;
    //   }
    // });
  }
};
function encodeCardsToHash(cards) {
  if (cards && cards.length) {
    return cards.reduce((sum, cur) => sum + "," + cur.id, "");
  } else return undefined;
}
function decodeHashToCards(hash) {
  return hash.split(",");
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

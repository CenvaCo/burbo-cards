<template>
  <div class="card-list">
    <div v-for="(data,index) in dataByType" v-bind:key="index" class="deck">
      <div class="text-center p10 title">{{store.wounds[index-1]}} <br/> {{store.masks[index-1]}}</div>
      <div v-for="item in data" v-bind:key="item.id">
        <div class="stack-item">
          <div class="wrapper">
           
            <CardHandItem v-bind:data="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import CardHandItem from "./CardHandItem.vue";
export default Vue.extend({
  name: "CardDeck",
  props: {
    cards: Array,
    store: Object
  },
  components: {
    CardHandItem
  },

  computed: {
    dataByType: function() {
      const result = { 1: [], 2: [], 3: [], 4: [], 5: [] };
      this.cards.forEach(item => {
        result[item.type] = result[item.type];
        result[item.type].push(item);
      });
      return result;
    }
  },
  created: function() {}
});
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.title {
  border: 1px solid black;
}
.deck {
    min-height: 264px;
    border-radius: 5px;
    border-top: 2px solid black;
    border-right: 2px dotted black;
    border-left: 2px dotted black;
    margin: 0px 5px 228px 0px;
    /* margin-bottom: 228px; */
}
.title {
  display: flex;
  width: 100%;
}
.p10 {
        padding: 0 10px;
}
.card-list {
    flex-flow: wrap;
        flex-wrap: wrap;
  display: flex
}
.card-table-list,
.card-hand-list {
  display: flex;
  justify-content: space-around;
}

.stack-item {
  height: 28px;
}

.wrapper:hover .card-hand-item {
  transform: translate3d(32px, 10px, 0);
  z-index: 10;
}
</style>
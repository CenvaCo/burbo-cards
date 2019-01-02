<template>
  <div class="card-hand-item t1">
    <div class="header text-center">
        <div class="share">share</div>
        <div class="remove" v-on:click="data.onDesk = !data.onDesk">
        <i>Х</i>
      </div>
      <span>{{title}}</span>

   
    </div>
    <div class="desc">{{desc }}</div>
    <div class="ranks"></div>
  </div>
</template>

<script>
export default {
  name: "CardHandItem",
  props: {
    data: Object
  },
  components: {},
  computed: {
    desc: function() {
      const text = this.data.text;
      return Array.isArray(text) ? text[0] : text;
    },
    title: function() {
      const text = this.data.text;
      return Array.isArray(text) ? text[1] : text;
    }
  },
  created: function() {}
};
</script>

<style scoped>
.remove, .share {
  display: none;
  position: absolute;
  height: 26px;
  right: 0;
  top:0;
  bottom: 0;
  font-size: 20px;
  color:black;
  width: 20px;
  justify-content: center;
  align-items: center;
}
.share {
  left:0
}
.remove:hover, .share:hover {
  font-size: 32px;
}
.card-hand-item:hover .remove,
.card-hand-item:hover .share {
  display: block;
}
.card-hand-item {
  z-index: -1;
  width: 160px;
  height: 228px;
  margin: 0 10px;
  position: relative;
  user-select: none;
  cursor: pointer;
  background: #f4e9cb;
  color: #0e0f0f;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 16px #0e0f0f;
}

.card-hand-item .header {
  color: #f4e9cb;
  height: 26px;
  position: relative;
  border-radius: 6px 6px 0 0;
}
.card-hand-item.t1 .header {
  background: #a19aac;
}
.card-hand-item .desc {
  font-size: 13px;
  padding: 10px;
  text-align: center;
}
.header {
  font-size: 8px;
}
</style>

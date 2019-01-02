<template>
  <div>
    <b-form-group label>
      <b-form-checkbox-group v-model="selected" :options="options"></b-form-checkbox-group>
    </b-form-group>
    <b-table striped hover responsive :items="filtered" :fields="fields">
      <template slot="id" slot-scope="row">
        <b-button
          size="sm"
          @click="row.item.onDesk = !row.item.onDesk"
          class="mr-1"
        >{{row.item.id}}</b-button>
      </template>
    </b-table>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "CardPool",
  props: {
    cards: Array
  },
  components: {
  },
  computed: {
    dataByType: function() {
      const result = {};
      this.cards.forEach(item => {
        if (this.selected.includes(item.type)) {
          result[item.type] = result[item.type] || [];
          result[item.type].push(item);
        }
      });
      return result;
    },
    filtered: function() {
      return this.cards.filter(item => {
        return this.selected.includes(item.type);
      });
    }
  },

  data() {
    return {
      selected: [1, 2, 3, 4, 5],
      options: [
        { text: "Беглец - 1-r", value: 1 },
        { text: "Зависимый - 2-a", value: 2 },
        { text: "Мазохист - 3-h", value: 3 },
        { text: "Контролирующий - 4-b", value: 4 },
        { text: "Ригидный - 5-i", value: 5 }
      ],
      fields: [
        {
          key: "id",
          sortable: true,
          label: ""
        },
        {
          key: "text",
          sortable: true,
          label: "Описание"
        },
        {
          key: "type",
          label: "Травма"
        }
      ]
    };
  },
  methods: {
  }
});
</script>

<style scoped>
.filter {
  position: relative;
  height: 128px;
  width: 100%;
  background-color: blanchedalmond;
}
.card-type {
  display: flex;
  flex-wrap: wrap;
}
.card-table-list,
.card-hand-list {
  display: flex;
  margin-bottom: 128px;
}
.card-hand-list {
  flex-direction: column;
}
.stack-item {
  height: 24px;
}
.wrapper {
}
.wrapper :hover {
  transform: translate3d(0, -10px, 0);
}
.remove {
  position: absolute;
  right: -18px;
  top: 0;
  display: flex;
  height: 26px;
  color: #8e8778;
  width: 20px;
  justify-content: center;
  align-items: center;
}
</style>

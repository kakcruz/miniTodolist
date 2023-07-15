<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10 bg-gray-800">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading"></TodoSpinner>

      <div class="" v-else>
        <TodoFormAdd></TodoFormAdd>

        <TodoItens></TodoItens>

        <TodoEmpty></TodoEmpty>
      </div>
    </div>
  </div>
  <!--/ Content -->
</template>

<script>
import TodoSpinner from "./components/TodoSpinner.vue";
import TodoFormAdd from "./components/TodoFormAdd.vue";
import TodoItens from "./components/TodoItens.vue";
import TodoEmpty from "./components/TodoEmpty.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItens,
    TodoEmpty,
  },
  data() {
    return {
      loading: false,
    };
  },

  created() {
    this.loading = true;
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        this.$store.commit("storeTodos", response.data);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
</style>

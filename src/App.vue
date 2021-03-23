<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <MenuItem :item="item" />
  </div>
</template>

<script>
import itemData from './data';  
import MenuItem from './components/MenuItem';

export default {
  name: "App",
  components: {
    MenuItem
  },
  data () {
    return {
      title: 'My First Vue App',
      item: itemData
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  padding: 10px;
  border-bottom: 1px solid lightblue;
}
</style>

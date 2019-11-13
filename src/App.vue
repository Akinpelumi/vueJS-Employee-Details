<template>
  <div id="app">
    <div id="nav">
      <h1>Employee Details</h1>
      <router-link class="form_button" :to="{ name: 'home' }">
        Home
      </router-link> | 
      <router-link class="form_button" :to="{ name: 'new-employee' }">
        Add Employee
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 20px;
  color: #2c3e50;
  background-color: blanchedalmond;
}
.nav {
  padding-bottom: 2rem;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  margin: 0 auto;
}
.form_button {
  color: blue;
  font-size: 18px;
  cursor: pointer;
  margin: 1rem;
  margin-top: 50px;
}
.form_button:focus,
.form_item:focus {
  outline: 0;
  box-shadow: 1px 1px 10px black;
}
</style>

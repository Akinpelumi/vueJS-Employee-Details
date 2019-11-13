<template>
    <div class="form">
    <form @submit.prevent="addEmployee">
      <div class="form__item">
        <label for="id">Employee ID Number</label>
        <input type="text" name="id" v-model="newEmployee.id">
      </div>
      <div class="form__item">
        <label for="name">Employee Name</label>
        <input type="text" name="name" v-model="newEmployee.employee_name">
      </div>
      <div class="form__item">
        <label for="salaray">Employee Salary</label>
        <input type="number" name="salary" v-model="newEmployee.employee_salary">
      </div>
      <div class="form__item">
        <label for="age">Employee Age</label>
        <input type="number" name="age" v-model="newEmployee.employee_age">
      </div>
      <div class="form__item">
        <label for="picture">Employee Picture</label>
        <input type="text" name="picture" v-model="newEmployee.profile_image" disabled>
      </div>
      <button class="form_button" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewEmployee',
  data() {
    return {
      newEmployee: {
        id: '',
        employee_name: '',
        employee_salary: '',
        employee_age: '',
        profile_image: ''
      }
    }
  },
  methods: {
    addEmployee() {
      this.$http.post('http://dummy.restapiexample.com/api/v1/create', this.newEmployee)
        .then(response => {
          this.newEmployee = {
            id: '',
            employee_name: '',
            employee_salary: '',
            employee_age: '',
            profile_image: ''
          }
          alert(`Employee successfully added with id ${response.data.id}`)
        })
        .catch(error => {
          alert(error.response)
        })
    }
  }
}
</script>

<style scoped>
form {
  width: 70%;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid wheat;
  box-shadow: 2px 4px 10px rgba(137, 43, 226, 0.2);
  display: block;
  margin-left: 150px;
  margin-top: 10px;
}
.form__item {
  display: block;
  margin-bottom: 1rem;
  text-align: left;
}
label {
  text-align: center;
  font-size: 18px;
  color: black;
  display: block;
  margin-bottom: 5px;
}
input {
  font-size: 18px;
  border: 1px solid wheat;
  border-radius: 2px;
  width: 90%;
  padding: 1rem;
}
button {
    color: black;
}
</style>

<template>
    <div class="container">
    <div class="content">
      <h3>ID Number: {{newEmployee.id}}</h3>
      <h2>Employee Name: {{newEmployee.employee_name}}</h2>
      <h4>Employee salaray: {{newEmployee.employee_salary}}</h4>
      <h5>Employee Age: {{newEmployee.employee_age}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewEmployee',
  data() {
    return {
      newEmployee: {
        id: '',
        employee_name: '',
        employee_salary: '',
        employee_age: '',
      }
    }
  },
  mounted() {
    this.$http.get(`http://dummy.restapiexample.com/api/v1/employee/${this.$route.params.id}`)
      .then(response => {
        this.newEmployee = response.data
      })
      .catch(error => {
        alert('Error loading employee details')
        console.log(error.response)
      })
  }
}
</script>

<style scoped>
.container {
  display: block;
  text-align: center;
  margin-top: 10px;
}
</style>

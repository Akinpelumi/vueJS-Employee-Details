<template>
  <div class="home">
      <div class="container">
        <EmployeeDetails
        v-for="person in employeeList"
        :key="person.id"
        :employee="person"
        @reload="fetchEmployee"/>
      </div>
  </div>
</template>

<script>
import EmployeeDetails from '@/components/EmployeeDetails.vue'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    EmployeeDetails
  },
  data () {
      return {
      employeeList: []
      }
  },
  mounted() {
      this.fetchEmployee()
  },
  methods: {
      fetchEmployee() {
      this.$http.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
      this.employeeList = response.data
      })
      .catch(error => {
      console.log(error.response)
      })
      }
  }
}
</script>

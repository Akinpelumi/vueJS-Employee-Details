<template>
    <div class="employees">
        <table>
            <thead>
                <tr>
                    <th>ID Number</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>Employee Age</th>
                    <th>Profile Image</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.employee_name }}</td>
                    <td>{{ employee.employee_salary }}</td>
                    <td>{{ employee.employee_age }}</td>
                    <td>{{ employee.profile_image}}</td>
                    <td><button @click="viewEmployee">View</button>
                        <button @click="editEmployee">Edit</button>
                        <button @click="removeEmployee">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'EmployeeDetails',
        props: {
            employee: Object
        },
       methods: {
          removeEmployee() {
            this.$http.delete(`http://dummy.restapiexample.com/api/v1/delete/${this.employee.id}`)
            .then(response => {
            alert('Employee successfully removed')
            console.log(response)
            this.$emit('reload')
            })
            .catch(error => {
            alert('Error Removing Employee')
            console.log(error.response)
            })
          },
          viewEmployee() {
            this.$router.push({name: 'view-employee', params: { id: this.employee.id}})
          },
          editEmployee() {
            this.$router.push({name: 'edit-employee', params: { id: this.employee.id}})
          }
       }
        
}
</script>

<style scoped>
table {
  margin-top: 30px;
  border: 1px solid black;
  width: 100vw;
  border-collapse: collapse;
}
thead {
  border: 1px solid #3333;
  padding: 1rem;
  background: black;
  color: aliceblue;
}
tbody {
  border: 1px solid #3333;
  padding: 1rem;
  background: wheat; 
}
button {
    background: whitesmoke;
    margin: 10px;
    border: 2px solid black;
    border-radius: 5px;
}
</style>


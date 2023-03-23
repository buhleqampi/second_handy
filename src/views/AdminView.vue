<template>

        <div class="container">
            <div>
                <!-- <div v-if="spinner">
                    <SpinnerComponent/>
                </div> -->
                <!-- <div v-else class="container-fluid"> -->
            <div class="col m-4">
                <h1>Students</h1>
            </div>
            <div class="row" >
                <table class="table">
                    <form @submit.prevent="createStudent">
                        <input type="text" v-model="newStudent.firstName" placeholder="First name"/>
                        <button type="submit">Add Student</button>
                        <router-link :to="{ name: 'student', params: {id: studentID.id} }"> Go to Profile </router-link>
                    <thead>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>User Role</th>
                        <th>User profile</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                    <tr v-for="student in students"  :key="student.studentID">
                        <td>{{  student.firstName }}</td>
                        <td>{{ student.lastName }}</td>
                        <td>{{ student.emailAdd }}</td>
                        <td>{{ student.userRole }}</td>
                        <td><img class="img-fluid" :src="student.userProfile" :alt="student.firstName" ></td>
                        <td><button v-on:click="updateStudent(student)">Edit</button></td>
                        <td><button @click="deleteStudent(student)">Delete</button></td>
                    </tr> 
                    </tbody>
                </form>
                    </table>
                    </div>
                
                    <div class="col m-4">
                    <div class="row">
                        <h1>Products</h1>
                    </div>
                </div>
            <div class="row" >
                <table class="table">
                    <form @submit.prevent="addBook">
                    <input type="text" v-model="newBook.bookName" placeholder="Book Name"/>
                    <button type="submit">Add Book</button>
                    <thead>
                        <th>book Name</th>
                        <th>book Description</th>
                        <th>Price</th>
                        <th>book Quantity</th>
                        <th>book image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        <tr v-for="book in books"  :key="book.id">
                    <td>{{  book.bookName }}</td>
                    <td>{{  book.bookDescription }}</td>
                    <td>{{  book.price }}</td>
                    <td>{{  book.bookQuantity }}</td>
                    <td><img :src="book.imgURL" :alt="book.bookName" ></td>
                    <td><button @click="updateBook(book)">Edit</button></td>
                    <td><button @click="deleteBook(book)">Delete</button></td>
                    </tr> 
                    </tbody>
                </form>
                </table>
            </div>
                <!-- </div> -->
        </div>
        </div>
    </template>
    <script>
    // import {computed} from '@vue/runtime-core';
    // import {useStore} from 'vuex';
    // // import SpinnerComponent from '../components/SpinnerComponent.vue';
    // export default {
    //     // components: {
    //     //     SpinnerComponent
    //     // },
    //     setup() {
    //         const store = useStore();
    //         store.dispatch("fetchStudents");
    //         store.dispatch("fetchBooks");
    //         const students =
    //         computed( ()=>store.state.students);
    //         const books =
    //         computed( ()=> store.state.books);
    //         // const spinner = computed (()=> store.state.showSpinner);
    //         return {
    //             students,
    //             books,
    //             // spinner
    //         }
    //     }
    // }
    export default {
        data() {
            
        }
    }
    </script>
    <style scoped>
    .table img{
        height: 130px;
    }
    #bam {
        margin-bottom: 5px;
    }
    .container{
        opacity: 0.8;
    }
    </style>
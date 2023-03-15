<template>

        <div class="container">
            <div class="row">
                <h1>Students</h1>
                <button type="button" class="btn btn-success" id="bam">Add Student</button>
            </div>
            <div class="row" >
                <table class="table">
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
                        <td><button class="btn btn-primary">Edit</button></td>
                        <td><button class="btn btn-primary">Delete</button></td>
                    </tr> 
                    </tbody>
                    </table>
                    </div>
                
                    <div class="container-fluid">
                    <div class="row">
                        <h1>Products</h1>
                    </div>
                </div>
            <div class="row" >
                <button type="button" class="btn btn-success" id="bam">Add Book</button>
                <table class="table">
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
                    <td><button class="btn btn-primary">Edit</button></td>
                    <td><button class="btn btn-primary">Delete</button></td>
                    </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    </template>
    <script>
    import {computed} from '@vue/runtime-core';
    import {useStore} from 'vuex';
    export default {
        setup() {
            const store = useStore();
            store.dispatch("fetchStudents");
            store.dispatch("fetchBooks");
            const students =
            computed( ()=>store.state.students);
            const books =
            computed( ()=> store.state.books);
            return {
                students,
                books
            }
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
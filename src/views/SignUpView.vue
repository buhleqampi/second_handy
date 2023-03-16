<template>
    <div class="card">

        <div class="card-header">
            <div class="text-header">Register</div>
        </div>
        <div class="card-body">
            <form class="form" @submit.prevent="signUp">
                <div class="form-group">
                    <label for="first name">First Name:</label>
                    <input required class="form-control" type="text" v-model="payload.firstName">
                </div>
                <div class="form-group">
                    <label for="last name">Last Name:</label>
                    <input required class="form-control" type="text" v-model="payload.lastName">
                </div>
                <div class="form-group">
                    <label for="institution">Institution Name:</label>
                    <input required class="form-control" type="text" v-model="payload.institutionName">
                </div>
                <div class="form-group">
                    <label for="student">Student Number:</label>
                    <input required class="form-control" type="number" v-model="payload.studentNumber">
                </div>
                <div class="form-group">
                    <label for="gender">gender:</label>
                    <input required class="form-control" type="text" v-model="payload.gender">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input required class="form-control" type="password" v-model="payload.userPass">
                </div>
                <div class="form-group">
                    <label for="user">User Role:</label>
                    <input required class="form-control" type="text" v-model="payload.userRole">
                </div>
                <div class="form-group">
                    <label for="text">User Profile:</label>
                    <input required class="form-control" type="text" v-model="payload.userProfile">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input required class="form-control" type="email" v-model="payload.emailAdd">
                </div>
                <div class="form-group">
                    <label for="number">cellphone Number:</label>
                    <input required class="form-control" type="number" v-model="payload.cellphoneNumber">
                </div>
                <div class="form-group">
                    <label for="date">Registration Date:</label>
                    <input required class="form-control" type="date" v-model="payload.joinDate">
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input required class="form-control" type="password" v-model="payload.userPass">
                </div>
                <div class="form-group">
                    <p class="lead">{{ message }}</p>
                </div>
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </div>
    </div>
</template>
    
<script>
// import { computed } from '@vue/runtime-core';
// import { useStore } from 'vuex';
export default {
    data() {
        return {
            payload: {
                firstName: '',
                lastName: '',
                institutionName: '',
                studentNumber: '',
                gender: '',
                userPass: '',
                userRole: '',
                userProfile: 'https://i.postimg.cc/XvzGSWrG/Siba.jpg',
                emailAdd: '',
                cellphoneNumber: '',
                registrationDate: ''
            }
        }
    },
    computed: {
        message() {
            return this.$store.state.message
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch("signUp", this.payload);
        }
    }
}
</script>
    
<style scoped>
.card {
    width: 350px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 10px;
}

.card-header {
    background-color: #333;
    padding: 16px;
    text-align: center;
}

.card-header .text-header {
    margin: 0;
    font-size: 18px;
    color: rgb(255, 255, 255);
}

.card-body {
    padding: 16px;
}

.form-group {
    margin-bottom: 10px;
}

.form-group label {
    display: block;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-bottom: 1px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    padding: 12px 24px;
    margin-left: 13px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer
}

.btn:hover {
    background-color: #ccc;
    color: #333;
}
</style>
    
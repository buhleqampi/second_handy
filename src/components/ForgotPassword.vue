<template>
    <div>
        <div>
            <button class="btn btn-dark" @click="forgot">ForgotPassword</button>
            </div>  
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data (){
        return {
            errorMessage: "",
        }
    },
    methods: {
        async signIn(){
            try{
                const response = await axios.post('forgot-password', {
                    emailAdd: this.emailAdd
                })
                console.log(response.data)
            } catch(error) {
                console.error(error)
                this.errorMessage = error.response.data.message
            }
        }
    }
}
</script>
<style lang="">
    
</style>
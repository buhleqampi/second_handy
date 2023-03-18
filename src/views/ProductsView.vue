<template>
    <div>
        <!-- <div v-if="spinner">
            <SpinnerComponent/>
        </div>
        <div v-else class="container"> -->
            <div class="row" style="height 50%;">
            <h2>Products</h2>
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3" v-for="book in books" :key="book.id">
                    <img :src="book.imgURL" class="mx-auto d-block" style="width: 15rem; height: 15rem; padding-top: 20px;"/>
                    <div class="card-body text-white" style="width:auto">
                        <h5 class="card-title">{{ book.bookName }}</h5>
                        <h5 class="card-title">{{ book.category }}</h5>
                        <h5 class="card-title">{{ book.price }}</h5>
                        <router-link :to="{ name: 'product', params: {id: book.id} } "> View more </router-link>"
                    </div>
                </div>
            </div>  
            </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex'; 
// import SpinnerComponent from "../components/SpinnerComponent.vue"
    export default {
        // components: {
        //     SpinnerComponent
        // },
        setup(){
        const store= useStore();
        store.dispatch("fetchBooks");
        const books = computed (()=> store.state.books);
        // const spinner = computed (()=> store.state.showSpinner);
    return {
        books
    //     spinner
    // };
    }
}
    }

</script>
<style scoped>
.card{
    background-color: gray;
    background: rgba(82, 78, 78, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    -webkit-backdrop-filter: blur(9.9px);
    border: 1px solid rgba(82, 78, 78, 0.26);
}

</style>
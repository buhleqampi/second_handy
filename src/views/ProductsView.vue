<template>
    <div>
            <div class="row" style="height 50%;">
            <h2>Products</h2>
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3" v-for="(book, index ) in books" :key="index">
                    <img :src="book.imgURL" class="mx-auto d-block" style="width:100vh;"/>
                    <div class="card-body text-white" style="width:auto">
                        <h5 class="card-title">{{ book.bookName }}</h5>
                        <h5 class="card-title">{{ book.category }}</h5>
                        <h5 class="card-title">{{ book.price }}</h5>
                        <p class="card-text">{{ book.bookDescription }}</p>
                        <button class="btn btn-primary">View product</button>
                        <a href="../components/SingleProduct.vue"></a>
                    </div>
                </div>
            </div>  
            </div>
            </div>
    </div>
</template>

<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex'; 
    export default {
        setup(){
        const store= useStore();
        store.dispatch("fetchBooks");
        const books = computed (()=> store.state.books);
        const spinner = computed (()=> store.state.showSpinner);
    return {
        books,
        spinner
    };
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
/*img{
    position: absolute;
    object-fit: cover;
    width: 100%;
    height:100%;
    top: 0;
    left:0 ;
    transition: opacity .2s ease-out;
}
.card-title{
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
}
.card-text, a {
    position:absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
}
.card-text{
    inset: auto auto 80px 30px;
}
a {
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
}
    &:hover card-title {
    inset: auto auto 220px 30px;
    transition: inset .3s ease-out;
}
    &:hover card-text, &:hover a {
    opacity: 1;
    transition: opacity .5s .1s ease-in;
}
    &:hover img {
    transition: opacity .3s ease-in;
    opacity: 1;
    }*/
</style>
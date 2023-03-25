<template>
    <div>
            <!-- <div v-if="spinner">
                <SpinnerComponent/>        
        </div>
    <div v-else class="container px-5"> -->
            <div v-if="books"></div>
            <form action="">
            <div class="mb-3">
                <input type="text" v-model="search" class="form-control" placeholder="Search by name" aria-label="Search" id="exampleFormControlInput1">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </div> 
            </form>
            <div class="buttons">
                <select v-model="screen" class="dropdown">
                <option value="">All Category</option>
                <option v-for="category in categories" :key="category">{{ category }}</option>
                </select>
                <div class="dropdown">
                    <button @click="sorted" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Sort by Price
                    </button>
                </div>
            <select v-model="screenColor" class="dropdown">
                            <option value="">All Color</option>
                            <option v-for="color in colors" :key="color">{{ color }}</option>
                        </select>
                    </div>
                    <div class="container">
                        <div v-for="book in searchFilter" :key="book.id">
                <div class="row" style="height 50%;">
            <h2>Products</h2>
            <button @click="sortByPrice" class="sorting">Sort</button>
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3" v-for="book in books" :key="book.id">
                        <img :src="book.imgURL" class="mx-auto d-block"
                            style="width: 15rem; height: 15rem; padding-top: 20px;" />
                        <div class="card-body text-white" style="width:auto">
                            <h5 class="card-title">{{ book.bookName }}</h5>
                            <h5 class="card-title">{{ book.category }}</h5>
                            <h5 class="card-title">{{ book.price }}</h5>
                            <router-link :to="{ name: 'product', params: { id: book.id } }"> View more </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <!-- </div> -->
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
// import SpinnerComponent from "../components/SpinnerComponent.vue"
export default {
    // components: {
    //     SpinnerComponent
    // },
    methods: {
        sortByPrice: function () {
            this.$store.commit("sortByPrice")
        },
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchBooks");
        const books = computed(() => store.state.books);
        const spinner = computed (()=> store.state.showSpinner);
        return {
            books,
                spinner
            };
        }
    }

</script>
<style scoped>
.card {
    background-color: gray;
    background: rgba(82, 78, 78, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    -webkit-backdrop-filter: blur(9.9px);
    border: 1px solid rgba(82, 78, 78, 0.26);
}
.sorting {
    background-color: green;
    border-radius:10px;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 250px;
    margin-left:20px;
}
h2 {
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-top:10px;
}
</style> 
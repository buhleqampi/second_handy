<template lang="">
    <div>
        <div class="row">
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3" id="cart">
                    <img :src="book?.imgURL" class="mx-auto d-block" style="width: 15rem; height: 15rem; padding-top: 20px;"/>
                    <div class="card-body text-white" style="width:auto">
                        <h5 class="card-title">{{ book?.bookName }}</h5>
                        <h5 class="card-title">{{ book?.category }}</h5>
                        <h5 class="card-title">{{ book?.price }}</h5>
                        <p> {{ book?.bookDescription }}</p>
                        <button type="button" class="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>  
            </div>
            </div>
    </div>
</template>
<script>
export default {
    computed: {
        book() {
            return this.$store.state.book;
        }
    },

    created() {
        this.$store.dispatch("fetchBook", this.$route.params.id)
    }
}
</Script>
<style scoped>
#cart {
    background-color: gray;
    background: rgba(82, 78, 78, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    -webkit-backdrop-filter: blur(9.9px);
    border: 1px solid rgba(82, 78, 78, 0.26);
}
</style>   
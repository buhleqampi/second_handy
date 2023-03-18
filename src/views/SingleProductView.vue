<template lang="">
    <div>
        <div class="row">
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3">
                    <img :src="book?.imgURL" class="mx-auto d-block" style="width: 15rem; height: 15rem; padding-top: 20px;"/>
                    <div class="card-body text-dark" style="width:auto">
                        <h5 class="card-title">{{ book?.bookName }}</h5>
                        <h5 class="card-title">{{ book?.category }}</h5>
                        <h5 class="card-title">{{ book?.price }}</h5>
                        <p> {{ book?.bookDescription }}</p>
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
<style lang="">
    
</style>   
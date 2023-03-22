<template lang="">
    <div>
        <div class="row">
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3">
                    <img :src="cart?.imgURL" class="mx-auto d-block" style="width: 15rem; height: 15rem; padding-top: 20px;"/>
                    <div class="card-body text-dark" style="width:auto">
                        <h5 class="card-title">{{ cart?.cartID }}</h5>
                        <h5 class="card-title">{{ cart?.studentID }}</h5>
                        <h5 class="card-title">{{ cart?.id }}</h5>
                        <h5 class="card-title">{{ cart?.price }}</h5>
                    </div>
                </div>
            </div>  
            </div>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
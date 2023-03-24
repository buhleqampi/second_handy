<template>
    <div>
        <div class="row">
            <h2>Profile</h2>
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3" id="cart">
                    <img :src="student?.userProfile" class="mx-auto d-block" style="width: 15rem; height: 15rem; padding-top: 20px;"/>
                    <div class="card-body text-dark" style="width:auto">
                        <h5 class="card-title">{{ student?.firstName}}</h5>
                        <h5 class="card-title">{{ student?.lastName}}</h5>
                        <h5 class="card-title">{{ student?.institutionName}}</h5>
                        <h5 class="card-title">{{ student?.userRole}}</h5>
                        <h5 class="card-title">{{ student?.emailAdd}}</h5>
                        <button type="button" class="btn btn-primary">Delete Student</button>
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
        student(){
            return this.$store.state.student;
        }
    },
    created(){
        this.$store.dispatch("fetchStudent", this.$route.params.id)
    }
    
}
</script>
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
h2{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-top:10px;
}
</style>
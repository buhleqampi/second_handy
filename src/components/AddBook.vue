<template>
    <div>
            <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form class="form">
            <input type="text" placeholder="bookName" v-model="payload.bookName">
            <input type="text" placeholder="Description" v-model="payload.bookDescription">
            <input type="text" placeholder="price" v-model="payload.price">
            <input type="text" placeholder="category" v-model="payload.category">
            <input type="text" placeholder="imgURL" v-model="payload.imgURL">
                </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click.prevent="addBook(payload)">Save changes</button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
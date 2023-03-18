<template >
    <div>
    <button class="btn btn-dark" @click="logout">Logout</button>
    </div>
</template>
<script>
export default {
    methods: {
    logout() {
      localStorage.removeItem('user'); // remove the 'user' key from local storage
      // any other cleanup or redirect code can go here
    }
}
}
</script>
<style >
    
</style>
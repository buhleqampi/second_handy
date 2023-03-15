<template lang="">
    <div>
            <nav class="navbar navbar-expand-lg bg-light sticky">
                <div class="container-fluid">
                    <!-- <div class="logo">
                        <img src="https://i.postimg.cc/jdHnYYWv/Screenshot-2023-03-10-135359.png"/>
                    </div> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/signIn">Sign In</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/signUp">Sign Up</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart">Your Cart</router-link> 
                    </li>
                    </ul>
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
</template>
<script>
export default {
    name: 'navbar_nav'
}
</script>
<style scoped>
    nav ul li a {
        text-decoration: none;
    }

    nav ul li {
        padding: 3 rem;
        margin: 0.5rem;
    }

</style>
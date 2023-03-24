<template>
    <div class="container">
    <h2>Contact Us</h2>
    <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5">
        <div class="card">
            <span class="title text-black">Leave a Comment</span>
            <form class="form" action="https://formspree.io/f/xyyadbno" method="POST">
            <div class="group">
            <input type="text" required="">
            <label for="name">Name</label>
            </div>
        <div class="group">
            <input type="email" id="email" name="email" required="">
            <label for="email">Email</label>
            </div>
        <div class="group">
            <textarea id="comment" name="comment" rows="5" required=""></textarea>
            <label for="comment">Comment</label>
        </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .card {
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        width: 350px;
        display: flex;
        flex-direction: column;
    }
    
    .title {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }
    
    .form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }
    
    .group {
        position: relative;
    }
    
    .form .group label {
        font-size: 14px;
        color: rgb(99, 102, 102);
        position: absolute;
        top: -10px;
        left: 10px;
        background-color: #fff;
        transition: all .3s ease;
    }
    
    .form .group input,
    .form .group textarea {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
        outline: 0;
        width: 100%;
        background-color: transparent;
    }
    
    .form .group input:placeholder-shown+ label, .form .group textarea:placeholder-shown +label {
        top: 10px;
        background-color: transparent;
    }
    
    .form .group input:focus,
    .form .group textarea:focus {
        border-color: #3366cc;
    }
    
    .form .group input:focus+ label, .form .group textarea:focus +label {
        top: -10px;
        left: 10px;
        background-color: #fff;
        color: #3366cc;
        font-weight: 600;
        font-size: 14px;
    }
    
    .form .group textarea {
        resize: none;
        height: 100px;
    }
    
    .form button {
        background-color: #3366cc;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .form button:hover {
        background-color: #27408b;
    }
    h2 {
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        margin-top:10px;
    }
    
</style>
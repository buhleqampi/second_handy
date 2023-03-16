    <template>
        <div></div>
    </template>

    <script>
    // import {computed} from 'vue@/runtime-core';
    // import {userStore} from 'vuex';
        export default {
        setup() {
        }
        }
    </script>

    <style  scoped>
    .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em; 
    background-color: white;
    border-radius: 20px;
    width:25rem;
    padding-top: 10px;
    margin-top: 40px;
    }
    #heading {
    text-align: center;
    margin: 2em;
    color: white;
    font-size: 1.2em;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 35px;
    }
    .card {
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    
    }
    .place {
    background: none;
    border: none;
    outline: none;
    color:  #003cff;
    } 
    .card .btn {
    display: flex; 
    justify-content: center; 
    flex-direction: row; 
    margin-top: 2.5em; 
    }
    .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
    }
    .button1:hover {
    background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
    color: #003cff;
    }
    .button2 {
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
    }
    .button2:hover {
    background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
    color:  #003cff;
    }
    .button3 {
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
    }
    .button3:hover {
    background-image: linear-gradient(163deg, #a00000fa 0%, #d10050 100%);
    color:  #003cff;
    }
    .form {
    border-radius: 0;
    transition: all .2s;
    }
    .form:hover {
    transform: scale(0.98);
    border-radius: 20px;
    }
    .form:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
    .placeholder {
        background-color: white;
        opacity: 1;
        color: black;
        border-radius: 2rem;
    }
</style>
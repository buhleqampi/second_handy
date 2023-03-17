    <template>
        <div class="container">
            <div class="card">
                <form class="form" @submit.prevent="signIn">
                <a class="signIn">Sign In</a>{{this.loggedUser?.firstName}}
                <div class="input">
                    <input type="email" required v-model="payload.emailAdd">
                    <span class="user">Email Address</span>
                </div>
                <div class="input">
                    <input type="password" required v-model="payload.userPass">
                    <span class="user">Password</span>
                </div>
                <LogoutComp/>
                <button type="submit" class="submit">SUBMIT</button>
            </form>
            </div>
        </div>
    </template>

    <script>
import LogoutComp from '@/components/LogoutComp.vue';

        export default {
    data() {
        return {
            payload: {
                emailAdd: "",
                userPass: "",
            },
        };
    },
    computed: {
        loggedUser() {
            return this.$store.state.loggedUser;
        }
    },
    methods: {
        signIn() {
            this.$store.dispatch("signIn", this.payload);
            localStorage.setItem("user", JSON.stringify(this.$store.state.user));
            //    localStorage.setItem('token', jwToken);
        }
    },
    components: { LogoutComp }
}
    </script>

    <style  scoped>
    .signIn {
        color: black;
        text-transform: uppercase;
        letter-spacing: 3px;
        display: block;
        font-weight: bold;
        font-size: x-large;
    }
        .card{
            display:flex;
            justify-content: center;
            align-items: center;
            min-height: 350px;
            width: 300px;
            flex-direction: column;
            gap: 35px;
            background: #e3e3e3;
            box-shadow: 16px 16px 32px #c8c8c8,
                -16px -16px 32px #fefefe;
            border-radius: 8px;
        }
        
        .input {
            position: relative;
            width: 250px;
        }
        
        .input input {
            width: 100%;
            padding: 10px;
            outline: none;
            border: none;
            color: #000;
            font-size: 1em;
            background: transparent;
            border-left: 2px solid #000;
            border-bottom: 2px solid #000;
            transition: 0.1s;
            border-bottom-left-radius: 8px;
        }
        
        .input span {
            margin-top: 5px;
            position: absolute;
            left: 0;
            transform: translateY(-4px);
            margin-left: 10px;
            padding: 10px;
            pointer-events: none;
            font-size: 12px;
            color: #000;
            text-transform: uppercase;
            transition: 0.5s;
            letter-spacing: 3px;
            border-radius: 8px;
        }
        
        .input input:valid~span,
        .input input:focus~span {
            transform: translateX(113px) translateY(-15px);
            font-size: 0.8em;
            padding: 5px 10px;
            background: #000;
            letter-spacing: 0.2em;
            color: #fff;
            border: 2px;
        }
        
        .input input:valid,
        .input input:focus {
            border: 2px solid #000;
            border-radius: 8px;
        }
        
        .submit {
            height: 45px;
            width: 100px;
            border-radius: 5px;
            border: 2px solid #000;
            cursor: pointer;
            background-color: transparent;
            transition: 0.5s;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 2px;
            margin-bottom: 1em;
        }
        
        .submit:hover {
            background-color: rgb(0, 0, 0);
            color: white;
        }
</style>
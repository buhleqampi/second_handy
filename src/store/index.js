import { createStore } from 'vuex'
import { useCookies } from 'vue3-cookies';
import axios from 'axios';
const secondURL = 'https://second-handy-ecommerce.onrender.com/'
const {cookies} = useCookies();
export default createStore({
  state: {
    students: null,
    student:null,
    books:null,
    book:null,
    message:null,
    showSpinner: true,
    cart: null
      },
  getters: {
    showSpinner(state) {
      return state.showSpinner
    },
    fetchUsers:(state) => state.fetchUsers,
    fetchUser:(state) => state.fetchUser,
    fetchBooks:(state) => state.book,
    fetchBook:(state) => state.book
  },
  mutations: {
    setStudents(state, values){
      state.students = values
    },
    setStudent(state, value){
      state.student = value
  },
  setBooks(state, values){
    state.books = values
  },
  setBook(state, value){
    state.book = value
  },
  setMessage(state, value) {
    state.message = value
  },
  setSpinner(state, value) {
    state.showSpinner - value
  },
  setLoggedUser(state, value) {
    state.loggedUser = value;
},
sortByPrice:(state)=>{
  state.books.sort((a,b) => {
    return a.price - b.price;
  })
  if(!state.asc){
    state.books.reverse()
  }
  state.asc=!state.asc
},
},
  actions: {
    async fetchStudents(context){
      const res = await axios.get(`${secondURL}students`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setStudents', results)
    }else {
      context.commit('setMessage', err)
    }
  },
    async fetchStudent(context){
      const res = await axios.get(`${secondURL}student`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setStudent', results)
    }else {
      context.commit('setMessage', err)
    }
  },
    async fetchBooks(context){
      const res = await axios.get(`${secondURL}books`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setBooks', results)
    }else {
      context.commit('setMessage', err)
    }
  },
    async fetchBook(context, id){
      const res = await axios.get(`${secondURL}book/${id}`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setBook', results[0])
    }else {
      context.commit('setMessage', err)
    }
  },
  async signUp(context, payload){
    console.log("its working?");
    const res = await axios.post(`${secondURL}signUp`, payload);
    console.log("3333");
    const {result, err} = await res.data;
    if (result) {
      console.log(result);
      context.commit('setMessage', result);
    }else {
      context.commit('setMessage', err);
    }
  },
  // async signUp(context, student) {
  //   try {
  //     const res = await axios.post('/students', student)
  //     context.commit('setStudent', res.data)
  //   } catch (error) {
  //     context.commit('setMessage', error.message)
  //   }
  // },
  async signIn(context,payload){ 
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result,jwToken, msg, err} = await res.data;
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
      cookies.set('registeredUser', jwToken)
    }else {
      context.commit('setMessage', err);
    }
  },
  async updateStudent(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async deleteStudent(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async addBook(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async updateBook(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async deleteBook(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async fetchCartBooks(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async fetchCart(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async addToCart(context,payload){
  
    const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async updateCart  (context,payload){
  const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  async deleteCart  (context,payload){
  const res = await axios.post(`${secondURL}signIn`, payload);
    const {result, msg, err} = await res.data;
    // console.log(res.data);
    if(result) {
      context.commit('setStudent', result);
      context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
    }
  },
  

},
  },
  );
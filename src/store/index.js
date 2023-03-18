import { createStore } from 'vuex'
import axios from 'axios';
const secondURL = 'https://second-handy-ecommerce.onrender.com/'
export default createStore({
  state: {
    students: null,
    student:null,
    books:null,
    book:null,
    message:null,
    showSpinner: true,
      },
  getters: {
    showSpinner(state) {
      return state.showSpinner
    }
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
      console.log(id);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setBook', result[0])
    }else {
      context.commit('setMessage', err)
    }
  },
  async signUp(context, payload){
    // console.log("its working?");
    const res = await axios.post(`${secondURL}signUp`, payload);
    const {result, err} = await res.data;
    if (result, err) {
      // console.log(result);
      context.commit('setMessage', result);
    }else {
      context.commit('setMessage', err);
    }
  },
  async signIn(context,payload){
  
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
},
  },
  );
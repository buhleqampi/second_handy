import { createStore } from 'vuex'
import axios from 'axios';
const secondURL = 'https://second-handy.onrender.com/'
export default createStore({
  state: {
    students: null,
    student:null,
    books:null,
    book:null,
    message:null,
    showSpinner: true,
    loggedUser:null,
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
      const res = await axios.get(`${'https://second-handy.onrender.com/'}students`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setStudents', results)
    }else {
      context.commit('setMessage', err)
    }
  },
    async fetchBooks(context){
      const res = await axios.get(`${'https://second-handy.onrender.com/'}books`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setBooks', results)
    }else {
      context.commit('setMessage', err)
    }
  },
  async signUp(context, payload){
    console.log("its working?");
    const res = await axios.post(`${secondURL}signUp`, payload);
    const {result, err} = await res.data;
    if (result, err) {
      console.log(result);
      context.commit('setMessage', result);
    }else {
      context.commit('setMessage', err);
    }
  },
      async signIn(context,payload){
      const result = await axios.post(`${'https://second-handy.onrender.com/'}signIn`, payload);
      const {res, msg, err} = await result.data;
      if(res) {
        context.commit('setLoggedUser', res);
        console.log(res);
        context.commit('setMessage', msg);
    }else {
      context.commit('setMessage', err);
      console.log(err);
    }
  },
},
  },
  );
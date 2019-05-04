import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    chats : null,
    handle : ""
  },
  getters : {
    CHATS : state => state.chats,
    HANDLE : state => state.handle,
    // CHATS : {
    //   return state.chats
    // },
    // HANDLE : state => {
    //   return state.handle
    // }
  },
  mutations : {
    SET_CHAT : (state,payload) => {
      state.chats = payload;
    },
    ADD_CHAT : (state,payload) => {
      state.chats.push(payload);
    },
    // SOCKET_CHAT: (state,payload)=> {
    //   state.chats.push(payload);
    // },
    SET_HANDLE : (state,payload) => {
      state.handle = payload;
    }
  },

  actions : {
    SET_CHAT : async (context,payload) => {
      let {data} = await Axios.get('http://localhost:5000/chat');
      console.log(data);
      context.commit("SET_CHAT",data);
    },
    // ADD_CHAT : (context,payload)=> {
    //   context.commit("ADD_CHAT",payload);
    // },
    socket_chat: (context,payload)=> {
      console.log('SOCKET_CHAT:',payload)
      context.commit("ADD_CHAT",payload);
    },
    SET_HANDLE : (context,payload)=> {
      context.commit("SET_HANDLE",payload);
    }
  },

})

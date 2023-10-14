import { createStore } from 'vuex';
import NewsMod from './News/index.js';
const store = createStore({
    modules:{
        News:NewsMod, 
    }
})


export default store;
import { proxy } from 'valtio';

const store = proxy({
    cartItem: []
 })

 export default store;
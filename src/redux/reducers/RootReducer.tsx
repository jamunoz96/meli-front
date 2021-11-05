import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import ProductReducer from './ProductReducer';

const RootReducer = combineReducers({ 
    search: SearchReducer,
    product: ProductReducer,
})

export default RootReducer;
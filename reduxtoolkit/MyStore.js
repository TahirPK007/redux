import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from '../reduxtoolkit/MyProductSlice';
import MyCartReducer from '../reduxtoolkit/MyCartSlice'
export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart:MyCartReducer,
  },
});

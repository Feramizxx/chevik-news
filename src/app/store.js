import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import storageNews from '../temporary-storage';


const initiaalNewsState={
  storageNews
}
createSlice({
name: 'news',
initialState: initiaalNewsState,
reducers: {

}

})

export const store = configureStore({
 
  reducer: {
   
  },
});

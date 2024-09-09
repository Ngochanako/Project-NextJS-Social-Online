import { Post } from "@/interfaces";
import { addNewPost, getPosts, updatePost } from "@/services/posts.service";
import { createSlice } from "@reduxjs/toolkit";
import { buildCreateApi } from "@reduxjs/toolkit/query";

const initialPosts:Post[]=[];
const postsReducer=createSlice({
    name:'posts',
    initialState:initialPosts,
    reducers:{},
    extraReducers(builder){
        builder 
        .addCase(getPosts.fulfilled,(state,action)=>{
             return action.payload;
        })
        .addCase(addNewPost.fulfilled,(state,action)=>{
             state.push(action.payload);
        })
        .addCase(updatePost.fulfilled,(state,action)=>{
            return state.map(btn=>btn.id==action.payload.id?action.payload:btn);
        })
    }
})
export default postsReducer.reducer;
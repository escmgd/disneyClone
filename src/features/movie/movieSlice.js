import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    movies: []
}

const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    } 
})

export const { setMovies } = moviesSlice.actions; //this we can think as the actions that we used to define in functional component

export const selectMovies = (state) => state.movie.movies;

export default moviesSlice.reducer; //this we need to import to create store
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { FETCH } from '../../redux/actions/types';
import './movies.sass'

function Movies() {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies, [])
    console.log('movie component')
    console.log(movies)

    useEffect(() => {
        const fetchMovies = async () => {
            await axios.get('/api/movies').then(res => {
                console.log("movie useEffect fetching data")
                console.log(res.data)
                
                dispatch({
                    type: FETCH,
                    payload: res.data.movies
                })
            });
        }
        fetchMovies();
    }, [])
    
    return (
        <>
            <div className="movies-content">
                <h1>Movies</h1>
                <div className="movies-list-container">
                    <ul className="movies-list">
                        { movies.map(movie => {
                            return <li key= {movie._id }>{ movie.title }</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
        )
    }
    
    export default Movies
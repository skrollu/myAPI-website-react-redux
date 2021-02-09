import { useSelector, useDispatch } from "react-redux"
import { DECREMENT, INCREMENT } from '../../redux/actions/types'
import Movies from '../movies/Movies'

import './home.sass'

function Home() {
    const count = useSelector(state => state.increment.count)
    const dispatch = useDispatch();
       
    const incrementClick = async(e) => {
        e.preventDefault();
        const data = { count };
        dispatch({
            type: INCREMENT,
            payload: data
        });
    }

    const decrementClick = async(e) => {
        e.preventDefault();
        const data = { count };
        dispatch({
            type: DECREMENT,
            payload: data
        });
    }

    return (
        <>
            <div className="home-content">
                <h1>Home</h1>
                <p>Compteur: { count }</p>
                <div className="increment-btn-container">
                    <button onClick={decrementClick} name="decrement">-1</button>
                    <button onClick={incrementClick} name="increment">+1</button>
                </div>
            </div>

            <Movies />
        </>
    )
}

export default Home;

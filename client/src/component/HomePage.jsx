import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from '../actions';
import Map from './Map/Map';

const HomePage = () => {

    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()



    return  (
        <div className="home-*page">
            Homepage
            <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(login())}>Login</button>
            <h1>{isLogged}</h1>
            </div>

            <div>
                <Map/>
            </div>
        </div>
    )
}

export default HomePage
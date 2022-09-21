import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from '../actions';

const HomePage = () => {

    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()



    return  (
        <div className="home-*page">
            Homepage
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(login())}>Login</button>
            <h1>{isLogged}</h1>
        </div>
    )
}

export default HomePage
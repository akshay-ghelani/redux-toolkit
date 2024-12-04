import Navbar from './component/Navbar';
import Cart from './component/Cart'
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { increment,decrement } from './redux/slice/slices';
function App() {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();
  return (
    <>
      <Navbar />
      <Cart name="pavbhaji" price={120} id={1} />
      <Cart name="pulav" price={60} id={2} />
      <Cart name="magi" price={40} id={3} />

      {/* <h1>count is {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button><br /><br />
      <button onClick={() => dispatch(decrement())}>decrement</button> */}
    </>
  );
}

export default App;

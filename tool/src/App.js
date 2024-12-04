
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { increment } from './redux/slice/slices';
function App() {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button><br /><br />
      {/* <button onClick={() => dispatch(decrement())}>decrement</button> */}
    </>
  );
}

export default App;

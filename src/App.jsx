import { useState } from 'react'

function App() {
  const [count, setCount] = useState(localStorage.getItem("localStorageCount") | 0);

  function decrementCount() {
	const decrementedCount = getLocalStorageCount() - 1;
	setCount(decrementedCount);
	setLocalStorageCount(decrementedCount);
  }

  function incrementCount() {
	const decrementedCount = getLocalStorageCount() + 1;
	setCount(decrementedCount);
	setLocalStorageCount(decrementedCount);
  }

  function resetCount() {
	setCount(0);
	setLocalStorageCount(0);
  }

  function clearCount() {
	localStorage.removeItem("localStorageCount");
  }

  function setLocalStorageCount(newCount) {
	localStorage.setItem("localStorageCount", newCount);
  }

  function getLocalStorageCount() {
	return parseInt(localStorage.getItem("localStorageCount"));
  }

  return (
    <>
	hello world

	<button onClick={decrementCount}>-</button>
	<span>{localStorage.getItem("localStorageCount")}</span>
	<button onClick={incrementCount}>+</button>
	<button onClick={resetCount}>Reset Count to 0</button>
	<button onClick={clearCount}>Clear Local Storage</button>
    </>
  )
}

export default App

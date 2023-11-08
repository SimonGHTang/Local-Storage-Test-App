import { useState } from "react";
import "./App.css";

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
		setCount(null);
		localStorage.removeItem("localStorageCount");
	}

	function setLocalStorageCount(newCount) {
		localStorage.setItem("localStorageCount", newCount);
	}

	function getLocalStorageCount() {
		return parseInt(localStorage.getItem("localStorageCount"));
	}

	return (
		<div className="main-format">
			<div className="counter-format">
				<button onClick={decrementCount}>
					<i className="gg-math-minus" />
				</button>
				<span className="counter">{localStorage.getItem("localStorageCount")}</span>
				<button onClick={incrementCount}>
					<i className="gg-math-plus" />
				</button>
			</div>
				<button onClick={resetCount}>Reset Count to 0</button>
			<div className="clear-local-storage-button">
				<button onClick={clearCount}>Clear Local Storage</button>
			</div>
		</div>
	);
}

export default App;

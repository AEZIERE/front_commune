import React from "react";
import { decrement, increment } from "./counter";
import { useAppDispatch, useAppSelector } from "../../hook";

function App() {
	//const counter = useSelector((state: RootState) => state.value);
	//const dispatch = useDispatch();
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div>
				<button aria-label="Increment value" onClick={() => dispatch(increment())}>
					Increment
				</button>
				<span>{count}</span>
				<button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default App;
import React, { useState } from "react";
import { RootState, AppDispatch } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { add, multiply, mines, reset, divide } from "../store/calculatorSlice";
import styled from "styled-components";
import scss from "./Calculator.module.scss";

const Container = styled.div`
	text-align: center;
`;

const Calculator: React.FC = () => {
	const [input, setInput] = useState("");
	const dispatch: AppDispatch = useDispatch();
	const value = useSelector((state: RootState) => state.calculator.value);
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};
	const handleOperation = (operation: (value: number) => void) => {
		const inputValue = parseFloat(input);
		if (!isNaN(inputValue)) {
			operation(inputValue);
			setInput("");
		}
	};
	return (
		<Container>
			<div className={scss.container}>
				<input
					className={scss.input}
					type="number"
					typeof={input}
					onChange={handleInput}
				/>
				<p className={scss.p}>Result: {value}</p>
				<button
					className={scss.button}
					onClick={() => handleOperation((value) => dispatch(add(value)))}>
					+
				</button>
				<button
					className={scss.button}
					onClick={() => handleOperation((value) => dispatch(mines(value)))}>
					-
				</button>
				<button
					className={scss.button}
					onClick={() => handleOperation((value) => dispatch(multiply(value)))}>
					*
				</button>
				<button
					className={scss.button}
					onClick={() => handleOperation((value) => dispatch(divide(value)))}>
					/
				</button>

				<button
					className={scss.button}
					onClick={() => handleOperation(() => dispatch(reset()))}>
					reset
				</button>
			</div>
		</Container>
	);
};

export default Calculator;

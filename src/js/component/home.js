import React from "react";

//create your first component
export const Counter = properties => {
	//Buscar Split, slice, splices y todo lo demas
	let numbersArray = properties.number.split("");
	//Dejar espacios
	const howManyCeros = 9 - numbersArray.length;

	for (let i = 0; i < howManyCeros.length; i++) {
		numbersArray.splice(0, 0, "0");
	}
	return (
		<h1 className="d-flex justify-content-center bigCounter mt-3">
			<div className="Clock">
				<i className="far fa-clock" />
			</div>

			{numbersArray.map((num, i) => (
				<div key={i}>{num}</div>
			))}
		</h1>
	);
};

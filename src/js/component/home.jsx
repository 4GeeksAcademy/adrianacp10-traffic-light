import React , { useState } from "react";


//create your first component
const Home = () => {
	const [selectedColour, setSelectedColour] = useState ("green");
	return (

		<div className="bigTrafficLight">
			<div onClick={() => setSelectedColour ("red")}
			className={"colour red" + (selectedColour === "red" ? " glow" : "")}></div>

			<div onClick={() => setSelectedColour ("yellow")} 
			className={"colour yellow" + (selectedColour === "yellow" ? " glow" : "")}></div>

			<div onClick={() => setSelectedColour ("green")}
			className={"colour green" + (selectedColour === "green" ? " glow" : "")}></div>
		
		</div>
	
	);
};

export default Home;



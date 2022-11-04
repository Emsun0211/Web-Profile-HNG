import React from "react";
// import { Form } from "./Component/Form/Form";
// import { NewForm } from "./Component/Form/NewForm";
import { Home } from "./Component/Pages/Home";
import Contact from "./Component/Pages/Contact";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Contact' element={<Contact />} />
		</Routes>
	);
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Solutions } from "@/pages/Solutions";
import { Contact } from "@/pages/Contact";
import { Cellama } from "@/pages/solutions/Cellama";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/solutions" element={<Solutions />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/solutions/cellama" element={<Cellama />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

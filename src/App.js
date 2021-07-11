import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "dsasdfasdf",
			text: "fdfsfasdfadf",
		},
		{
			id: 2,
			title: "asdfasdfd",
			text: "asdfasdfasd",
		},
	]);

	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
};

export default App;

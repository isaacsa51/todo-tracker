import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "dsasdfasdf",
			text: "fdfsfasdfadf",
			day: "1/12/2011",
			reminder: true,
		},
		{
			id: 2,
			title: "asdfasdfd",
			text: "asdfasdfasd",
			day: "2/12/2011",
			reminder: false,
		},
	]);

	//TODO: CHANGE EVERY FUNCTION TO A MVP PROJECT
	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header />
			{tasks.lengthj > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				"No tasks to do..."
			)}
		</div>
	);
};

export default App;

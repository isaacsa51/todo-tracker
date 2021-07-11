import { useState } from "react";
import AddTask from "./components/AddTask";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
	const [showForm, setShowForm] = useState(false);
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
		{
			id: 3,
			title: "asdfasdfd",
			text: "asdfasdfasd",
			day: "2/12/2011",
			reminder: false,
		},
	]);

	//TODO: CHANGE EVERY FUNCTION TO A MVP PROJECT
	const toggleForm = () => {};

	//Add task
	const addTask = (task) => {
		//Created a random ID just to know what task is...
		const id = Math.floor(Math.random() * 1000) + 1;
		const newTask = { id, ...task };

		setTasks([...tasks, newTask]);

		console.log(task);
	};

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
			<Header onAdd={() => setShowForm(!showForm)} toggleShow={showForm} />

			{showForm && <AddTask onAdd={addTask} />}

			{tasks.lengthj > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				"No tasks to do..."
			)}
		</div>
	);
};

export default App;

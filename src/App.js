import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
	const [showForm, setShowForm] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};

		getTasks();
	}, []);

	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();

		return data;
	};

	//TODO: CHANGE EVERY FUNCTION TO A MVP PROJECT
	const addTask = async (task) => {
		const res = await fetch(`http://localhost:5000/tasks`, {
			method: "POST",
			headers: {
				"Content-type": "application-json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();
		setTasks([...tasks, data]);
	};

	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "DETELE",
		});

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

			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				"No tasks to do..."
			)}
		</div>
	);
};

export default App;

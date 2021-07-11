import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder ? "reminder" : ""}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			<h3>
				{task.title}{" "}
				<FaTimes
					onClick={() => onDelete(task.id)}
					style={{ color: "red", cursor: "pointer" }}
				/>
			</h3>

			<p>Date: {task.day}</p>
			<p>{task.desc}</p>
		</div>
	);
};

export default Task;

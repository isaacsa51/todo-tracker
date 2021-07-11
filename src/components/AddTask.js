import { useState } from "react";

const AddTask = ({ onAdd }) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!title || !desc) {
			alert("Add a valid task to save!");
			return;
		}

		onAdd({ title, desc, day, reminder });

		//Clear form
		setTitle("");
		setDesc("");
		setDay("");
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>
					<strong>Task title</strong>
				</label>

				<div className="formss">
					<input
						type="text"
						placeholder="Description"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
			</div>

			<div className="form-control">
				<label>
					<strong>Task description</strong>
				</label>

				<div className="formss">
					<input
						type="text"
						placeholder="Description"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>
			</div>

			<div className="form-control">
				<label>
					<strong>Day & Time</strong>
				</label>

				<div className="formss">
					<input
						type="date"
						placeholder="Add date of the task"
						value={day}
						onChange={(e) => setDay(e.target.value)}
					/>
				</div>
			</div>

			<div className="form-control form-control-check">
				<label>
					<strong>Set reminder</strong>
				</label>

				<input
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>

			<input type="submit" value="Save task" className="btn btn-block" />
		</form>
	);
};

export default AddTask;

import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<h3 style={{ textAlign: "center" }}>Version 1.0.0</h3>
			<p>Bare bones serverless To-Do tracker made with pure ReactJS</p>
			<p>
				<strong>Date started with the project:</strong> 10/07/2021
			</p>
			<p>
				<strong>Finished the project:</strong> 11/07/2021
			</p>

			<p>
				Full repo in{" "}
				<a href="https://github.com/isaacsa51/todo-tracker">GitHub</a>
			</p>
			<Link to="/" className="btn btn-block" style={{ textAlign: "center" }}>
				Go back to home
			</Link>
		</div>
	);
};

export default About;

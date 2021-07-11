import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<p>
				Copyright &copy; 2021, made by: <strong>Isaac Serrano</strong>
			</p>
			<Link to="/about">About the project</Link>
		</footer>
	);
};

export default Footer;

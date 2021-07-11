import PropTypes from "prop-types";

const Button = ({ title, onClick }) => {
	return (
		<button onClick={onClick} className="btn">
			{title}
		</button>
	);
};

Button.defaultProps = {
	color: "black",
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Button;

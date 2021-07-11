import PropTypes from "prop-types";

const Button = ({ color, title, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="btn"
			style={{ backgroundColor: color }}
		>
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

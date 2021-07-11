import Button from "./Button";

const Header = ({ onAdd, toggleShow }) => {
	return (
		<header className="header">
			<h1>TODO Tracker</h1>
			<Button
				onClick={onAdd}
				color={toggleShow ? "red" : "green"}
				title={toggleShow ? "Close" : "Add"}
			/>
		</header>
	);
};

export default Header;

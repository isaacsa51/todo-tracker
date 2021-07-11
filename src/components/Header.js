import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAdd, toggleShow }) => {
	const location = useLocation();

	return (
		<header className="header">
			<h1>TODO Tracker</h1>
			{location.pathname === "/" && (
				<Button
					onClick={onAdd}
					color={toggleShow ? "red" : "green"}
					title={toggleShow ? "Close" : "Add"}
				/>
			)}
		</header>
	);
};

export default Header;

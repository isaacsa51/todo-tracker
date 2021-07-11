import Button from "./Button";

const Header = () => {
	const onClick = () => {
		console.log("click");
	};

	return (
		<header className="header">
			<h1>TODO Tracker</h1>
			<Button onClick={onClick} color="green" title="Add" />
		</header>
	);
};

export default Header;

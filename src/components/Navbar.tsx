import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Navbar = () => {
	return (
		<>
			<nav className="flex justify-evenly py-4 px-5 items-center max-w-4xl border-b m-auto">
				<Link to="/" className="font-bold text-2xl">
					Site
				</Link>
				<ul className="flex items-center gap-5">
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

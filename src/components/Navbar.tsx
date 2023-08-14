import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Navbar = () => {
	return (
		<>
			<nav className="navbar text-slate-600">
				<Link to="/" className="font-bold text-2xl name">
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

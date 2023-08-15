import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Navbar = () => {
	const navs = ['About', 'Contacts'];
	const toNavs = ['/about', '/contacts'];
	return (
		<>
			<nav className="navbar text-slate-600">
				<Link to="/" className="font-bold text-2xl name">
					Site
				</Link>
				<ul className="flex items-center gap-5">
					{navs.map((item, index) => (
						<NavLink to={toNavs[index]}>{item}</NavLink>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

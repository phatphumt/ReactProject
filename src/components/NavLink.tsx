import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
	to: string;
	children: ReactNode;
}

const NavLink = ({ to, children }: Props) => {
	const resolvedPath = useResolvedPath(to);
	const disabled = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li
			className={
				disabled
					? 'inline disabled font-medium hover:underline'
					: 'inline font-medium hover:underline'
			}
		>
			<Link to={to}>{children}</Link>
		</li>
	);
};

export default NavLink;

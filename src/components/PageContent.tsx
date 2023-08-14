import About from '../pages/About.tsx';
import Home from '../pages/Home.tsx';
import Contact from '../pages/Contact.tsx';
import { Routes, Route } from 'react-router-dom';

const PageContent = () => {
	return (
		<>
			<div className="pb-8" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contact />} />
			</Routes>
		</>
	);
};

export default PageContent;

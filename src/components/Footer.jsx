import React from 'react';

function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
			Xander
			</a>
			<a
				href="mailto:xanderwolfe@gmail.com"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				xanderwolfe@gmail.com
			</a> 
		</div>
	);
}

export default Footer;

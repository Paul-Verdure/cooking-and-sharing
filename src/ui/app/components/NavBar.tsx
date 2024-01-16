import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
	return (
		<nav className="fixed top-0 h-20 bg-white flex w-full flex-row items-center px-8 py-4 shadow-md">
			<section>
				<img src={logo} alt="logo" className="h-20" />
			</section>
			<ul className="ml-auto flex flex-row items-center gap-4">
				<li className="hover:underline">
					<a href="/">Home</a>
				</li>
				<li className="hover:underline">
					<a href="/recipes">Recipes</a>
				</li>
				<li className="hover:underline">
					<a href="/community">Community</a>
				</li>
				<li className="hover:underline">
					<a href="/about">About</a>
				</li>
				<li>
					<button className="rounded border-2 border-wistful-600 bg-wistful-500 px-4 py-2 font-bold text-white hover:bg-wistful-600 active:bg-wistful-700 shadow-md">
						Login
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

import React from 'react';

function Navbar() {
	return (
		<nav className="flex w-full flex-row items-center p-4">
			<section>
				<h1 className="text-chilean-fire-700">Logo</h1>
			</section>
			<ul className="ml-auto flex flex-row items-center gap-4">
				<li className="text-">
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/recipes">Recipes</a>
				</li>
				<li>
					<a href="/community">Community</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<button className="rounded bg-chilean-fire-500 px-4 py-2 font-bold text-white hover:bg-chilean-fire-600 border-2 border-chilean-fire-600 active:bg-chilean-fire-700">
						Login
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

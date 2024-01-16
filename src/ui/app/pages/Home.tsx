import React from 'react';
import home from '../assets/home.png';
import cooking from '../assets/cooking.png';

function Home() {
	return (
		<>
			<section className="flex mt-20 max-h-[600px] items-center justify-center space-x-8 px-8">
				<div className="flex-column space-y-6">
					<h2 className="text-wistful-700 text-5xl font-bold">
						Cooking & Sharing
					</h2>
					<p className="max-w-prose text-xl">
						Welcome to the Cooking & Sharing app! Your go-to platform for
						sharing and discovering delicious recipes.
					</p>
					<div className="space-x-4">
						<button className="bg-wistful-500 shadow-md hover:bg-wistful-600 border-wistful-600 active:bg-wistful-700 rounded border-2 px-4 py-2 font-bold text-white">
							Login
						</button>
						<button className="text-wistful-600 shadow-md border-wistful-600 active:bg-wistful-200 hover: hover:bg-wistful-100 rounded border-2 px-4 py-2 font-bold">
							Sign Up
						</button>
					</div>
				</div>
				<div>
					<img src={home} alt="home" className="max-h-[600px] max-w-full" />
				</div>
			</section>
			<section className="bg-wistful-200 flex max-h-[600px] items-center space-x-8 px-8">
				<div>
					<img src={cooking} alt="cooking" className="max-h-[600px] max-w-full" />
				</div>
				<div className="flex-column space-y-6">
					<h3 className="text-wistful-700 text-2xl font-bold">
						Easy recipe creation process
					</h3>
					<p className="max-w-prose text-xl">
						Enjoy hassle-free recipe creation that allows you to unlock your
						full creativity and focus on what matters.
					</p>
				</div>
			</section>
		</>
	);
}

export default Home;

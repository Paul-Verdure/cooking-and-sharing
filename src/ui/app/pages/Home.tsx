import React from 'react';
import home from '../assets/home.png';
import cooking from '../assets/cooking.png';
import sharing from '../assets/sharing.png';

function Home() {
	return (
		<>
			<section className="mt-20 flex max-h-[600px] items-center justify-center space-x-8 px-8">
				<div className="flex-column space-y-6">
					<h2 className="text-5xl font-bold text-wistful-700">
						COOKING & SHARING
					</h2>
					<p className="max-w-prose text-xl">
						Welcome to the Cooking & Sharing app! Your go-to platform for
						sharing and discovering delicious recipes.
					</p>
					<div className="space-x-4">
						<button className="rounded border-2 border-wistful-600 bg-wistful-500 px-4 py-2 font-bold text-white shadow-md hover:bg-wistful-600 active:bg-wistful-700">
							Login
						</button>
						<button className="hover: rounded border-2 border-wistful-600 px-4 py-2 font-bold text-wistful-600 shadow-md hover:bg-wistful-100 active:bg-wistful-200">
							Sign Up
						</button>
					</div>
				</div>
				<div>
					<img src={home} alt="home" className="max-h-[600px] max-w-full" />
				</div>
			</section>
			<section className="flex max-h-[600px] items-center justify-center space-x-8 bg-wistful-200 px-8">
				<div>
					<img
						src={cooking}
						alt="cooking"
						className="max-h-[600px] max-w-full"
					/>
				</div>
				<div className="flex-col space-y-6">
					<h3 className="text-2xl font-bold text-wistful-700">
						EASY RECIPE CREATION PROCESS
					</h3>
					<p className="max-w-prose text-xl">
						Enjoy hassle-free recipe creation that allows you to unlock your
						full creativity and focus on what matters.
					</p>
				</div>
			</section>
			<section className="flex max-h-[600px] flex-col items-center justify-center bg-white px-16 py-8">
				<h3 className="text-center text-2xl font-bold text-wistful-700">
					PERSONNALIZE YOUR EXPERIENCE
				</h3>
				<div className="flex items-center justify-evenly space-x-8">
					<p>
						Customize your culinary journey! Log in to personalize your recipe
						feed, receive recommendations, and connect with friends for shared
						cooking experiences.
					</p>
					<p>
						Never lose a recipe again! Create an account to save and organize
						your favorite recipes, making it easy to find them whenever you're
						ready to cook.
					</p>
					<p>
						Join our vibrant cooking community! Sign up to share your recipes,
						connect with fellow food enthusiasts, and discover what's cooking in
						your friends' kitchens.
					</p>
				</div>
			</section>
			<section className="flex max-h-[600px] items-center justify-center space-x-8 bg-wistful-200 px-8">
				<div className="flex-col space-y-6">
					<h3 className="text-2xl font-bold text-wistful-700">
						SHARE YOUR CULINARY CREATIONS WITH THE WORLD!
					</h3>
					<p className="max-w-prose text-xl">
						Log in to post your recipes, photos, and kitchen adventures .on your
						profile and connect with like-minded foodies.
					</p>
				</div>
				<div>
					<img
						src={sharing}
						alt="sharing"
						className="max-h-[600px] max-w-full"
					/>
				</div>
			</section>
		</>
	);
}

export default Home;

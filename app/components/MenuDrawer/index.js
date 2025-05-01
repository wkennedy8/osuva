import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export const MenuDrawer = ({ open, onClose }) => {
	const sideDrawerVariants = {
		hidden: {
			x: '100vw' // Start off-screen to the right
		},
		visible: {
			x: 0, // Move to its default position
			transition: {
				type: 'easeIn',
				duration: 0.3 // Specify duration
			}
		},
		exit: {
			x: '100vw', // Exit off-screen to the right
			transition: {
				type: 'easeOut',
				duration: 0.3,
				delay: 0.3
			}
		}
	};
	const links = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Projects',
			href: '/projects'
		},
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
		// {
		// 	title: 'locations',
		// 	href: '/#'
		// },
		// {
		// 	title: 'account',
		// 	href: '/#'
		// }
	];
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className='fixed inset-0 h-screen bg-[#0048f9] z-60 flex flex-col'
					variants={sideDrawerVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					<div className='p-6 flex justify-between items-center'>
						<button
							onClick={onClose}
							className='flex flex-col items-center z-50'
						>
							<span
								className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
							open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
						}`}
							></span>
							<span
								className={`bg-white  block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`}
							></span>
							<span
								className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
							open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
						}`}
							></span>
						</button>
					</div>
					<div className='mt-12'>
						{links.map((link, i) => {
							return (
								<div key={i} className='px-6 mb-1 '>
									<Link
										className='text-[44px] text-white font-medium tracking-[-0.07em] leading-[1.1em]'
										onClick={onClose}
										href={link.href}
									>
										{link.title}
									</Link>
								</div>
							);
						})}
					</div>
					<div className='absolute bottom-20 w-full px-6 mt-12 flex justify-between'>
						<ul className='flex flex-col gap-2 w-1/2'>
							<li className='text-white text-lg'>Privacy Policy</li>
							<li className='text-white text-lg'>Instagram</li>
							<li className='text-white text-lg'>Github</li>
						</ul>

						<ul className='flex flex-col gap-2 w-1/2'>
							<li className='text-white text-lg'>Terms of Service</li>
							<li className='text-white text-lg'>Twitter</li>
							<li className='text-white text-lg'>Facebook</li>
						</ul>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

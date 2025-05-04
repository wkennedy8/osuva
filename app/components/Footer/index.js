import Link from 'next/link';
import { onest, league_spartan } from '@/app/fonts';

export const Footer = () => {
	return (
		<footer className={`${onest.className} pt-12 bg-black`}>
			<div className='text-center py-12'>
				<h1 className='px-12 text-[44px] lg:text-[60px] text-white font-normal leading-[1em] tracking-[-.07em]'>
					Let's build something great together
				</h1>
				<div className='mt-8 lg:w-1/4 lg:mx-auto lg:text-center'>
					<p className='px-4 text-lg lg:text-2xl font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
						Get in touch to explore how we can help your business reach its full
						potential.
					</p>
				</div>
			</div>
			<div className='flex justify-center mt-12 mb-2'>
				<Link
					href='/contact'
					className='py-4 border border-gray-50 px-12 font-medium bg-white text-black rounded-[12px]'
				>
					Get Started Today
				</Link>
			</div>
			<div className='h-[2px] max-w-[1800px] bg-[#97979733] my-8 ' />
			<div>
				<div className='mt-12'>
					<p className='px-8 text-md text-center font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
						You can also email us at:
					</p>
					<h1 className='text-[32px] text-center text-white font-normal leading-[1em] tracking-[-.07em]'>
						contact@osuva.agency
					</h1>
				</div>
			</div>
			<div className='mt-16 px-4'>
				<h1
					className={`${league_spartan.className} leading-0 text-white text-5xl font-bold tracking-[-0.08em]`}
				>
					osuva
				</h1>
				<div className='mt-12 w-11/12'>
					<p className='text-md font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
						We help businesses succeed in the digital space by creating
						thoughtful solutions that combine smart design, reliable technology,
						and a deep understanding of what your users really need.
					</p>
				</div>
				<div className='mt-12 flex justify-between'>
					<ul className='flex flex-col gap-2 w-1/2'>
						<li className='text-white text-sm'>Home</li>
						<li className='text-white text-sm'>Projects</li>
						<li className='text-white text-sm'>About Us</li>
						<li className='text-white text-sm'>Contact</li>
					</ul>
					<ul className='flex flex-col gap-2 w-1/2'>
						<li className='text-white text-sm'>Instagram</li>
						<li className='text-white text-sm'>Github</li>
					</ul>
				</div>
			</div>
			<div className='mt-12'>
				<p className='text-[#8E8E93] text-xs text-center'>
					@{new Date().getFullYear()} Osuva, All Rights Reserved
				</p>
				<div className='flex justify-between px-4 mt-8 pb-4'>
					<Link className='text-[#8E8E93] text-xs text-center' href='#'>
						Privacy Policy
					</Link>
					<Link className='text-[#8E8E93] text-xs text-center' href='#'>
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
};

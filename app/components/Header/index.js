'use client';
import { useState } from 'react';
import { onest, league_spartan } from '@/app/fonts';
import Link from 'next/link';
import { MenuDrawer } from '../MenuDrawer';

export const Header = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	return (
		<header
			className={`${onest.className} flex justify-between items-center p-4 lg:py-8 lg:px-12`}
		>
			<div className='py-4'>
				<Link href='/'>
					<h1
						className={`${league_spartan.className} leading-0 text-5xl font-bold tracking-[-0.08em]`}
					>
						osuva
					</h1>
				</Link>
			</div>
			<div onClick={() => setMobileNavOpen(!mobileNavOpen)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='size-6'
				>
					<path
						fillRule='evenodd'
						d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
			<MenuDrawer
				open={mobileNavOpen}
				onClose={() => setMobileNavOpen(false)}
			/>
		</header>
	);
};

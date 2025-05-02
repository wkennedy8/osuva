import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export const AboutCTA = () => {
	return (
		<div className='mt-24'>
			<h1 className='text-[55px] font-medium leading-14 tracking-tighter'>
				Help us shape the future of digital
			</h1>
			<div className='mt-12 w-11/12'>
				<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					We're always looking for talented individuals who share our passion
					for digital excellence and client success.
				</p>
			</div>
			<div className='mt-12'>
				<Link
					href='/contact'
					className='text-lg font-medium underline underline-offset-8 flex items-center gap-2'
				>
					Let's talk
					<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
				</Link>
			</div>
		</div>
	);
};

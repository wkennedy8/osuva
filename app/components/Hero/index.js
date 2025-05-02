import { RotateWords } from '@/app/framer';
import { FiArrowUpRight } from 'react-icons/fi';

export const Hero = () => {
	return (
		<div className='mt-24'>
			<h1 className='text-[55px] font-medium leading-14 tracking-tighter'>
				We design solutions that
			</h1>
			<RotateWords
				className='flex text-[55px] font-medium leading-14 tracking-tighter overflow-hidden'
				text='drive   '
				words={['business', 'growth', 'impact']}
			/>
			<div className='mt-12 w-11/12'>
				<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					At Osuva, we help companies build stronger brands, better products,
					and websites that actually perform.
				</p>
			</div>
			<div className='mt-12'>
				<a
					href='#services'
					className='text-lg font-medium underline underline-offset-8 flex items-center gap-2'
				>
					Browse our services
					<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
				</a>
			</div>
		</div>
	);
};

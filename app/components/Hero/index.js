import { RotateWords } from '@/app/framer';
import { FiArrowUpRight } from 'react-icons/fi';

export const Hero = () => {
	return (
		<div className='mt-24 lg:min-h-[40vh]'>
			<div className='flex flex-col lg:flex-row lg:gap-4'>
				<div className='lg:w-3/4'>
					<h1 className='text-[55px] lg:text-[80px] font-medium leading-14 tracking-tighter'>
						We design solutions that
					</h1>
					<RotateWords
						className='flex text-[55px] lg:text-[80px] font-medium leading-14 tracking-tighter overflow-hidden'
						text='drive   '
						words={['business', 'growth', 'impact']}
					/>
				</div>
				<div className='mt-12 lg:mt-0 lg:w-1/4 w-11/12'>
					<p className='text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
						At Osuva, we help companies build stronger brands, better products,
						and websites that actually perform.
					</p>
					<div className='mt-12'>
						<a
							href='#services'
							className='text-lg lg:text-2xl font-medium underline underline-offset-8 flex items-center gap-2'
						>
							Browse our services
							<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

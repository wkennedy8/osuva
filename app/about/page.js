import Image from 'next/image';
import { onest } from '../fonts';
import { GettingStarted } from './components/GettingStarted';
import { OurApproach } from './components/OurApproach';
import { AboutCTA } from './components/AboutCTA';

export const AboutPage = () => {
	return (
		<div className={`${onest.className} pt-24 px-4`}>
			<div>
				<h1 className='text-[56px] font-medium leading-[1em] tracking-[-.07em]'>
					Building digital excellence since 2019
				</h1>
				<p className='mt-8 pr-4 text-lg font-medium text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					At Osuva, we're more than just a digital agency - we're a team of
					creative problem-solvers who believe in the power of thoughtful
					digital solutions to transform businesses.
				</p>
				<div className='mt-12 space-y-3'>
					<Image
						className='object-contain mx-auto w-full rounded-xl'
						src={'/images/hero1.jpg'}
						alt={'hello world'}
						height={200}
						width={200}
					/>
					<Image
						className='object-contain mx-auto w-full rounded-xl'
						src={'/images/hero1.jpg'}
						alt={'hello world'}
						height={300}
						width={300}
					/>
				</div>
				<div className='px-4'>
					<GettingStarted />
					<OurApproach />
					<AboutCTA />
				</div>
				<div className='mt-24 mb-12'>
					<h2 className='text-[44px] text-center font-medium leading-[1em] tracking-[-.07em]'>
						As we grow, our mission stays the same: helping businesses succeed
						through thoughtful digital solutions that create meaningful
						connections with their audiences.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;

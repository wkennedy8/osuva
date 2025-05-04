import Image from 'next/image';
import { Hero } from './components/Hero';
import { onest } from './fonts';
import { OurVision } from './components/OurVision';
import { ClientLogos } from './components/ClientLogos';
import { OurServices } from './components/OurServices';
import { RecentProjects } from './components/RecentProjects';
import { StartNowCTA } from './components/StartNowCTA';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { AnimatedHeroImage } from './components/AnimatedHeroImage';

export default function Home() {
	return (
		<div className={`${onest.className}`}>
			<div className='px-4 lg:px-12'>
				<Hero />
			</div>
			<div className='mt-24 w-full'>
				<AnimatedHeroImage animate />
			</div>
			<div className='px-4 lg:px-12'>
				<OurVision />
			</div>
			<div className='mb-24'>
				<ClientLogos />
			</div>
			<div className='px-4 lg:px-12'>
				<OurServices />
				<RecentProjects />
				<StartNowCTA />
			</div>
			<div className='mt-24'>
				<AnimatedHeroImage animate={false} />
			</div>
			<div className='px-4 lg:px-12 bg-gray-50'>
				<Testimonials />
				<FAQ />
			</div>
		</div>
	);
}

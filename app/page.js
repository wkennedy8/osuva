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

export default function Home() {
	return (
		<div className={`${onest.className}`}>
			<div className='px-4'>
				<Hero />
			</div>
			<div className='mt-24'>
				<Image src='/images/hero1.jpg' height={800} width={800} alt='hero' />
			</div>
			<div className='px-4'>
				<OurVision />
			</div>
			<div className='mb-24'>
				<ClientLogos />
			</div>
			<div className='px-4'>
				<OurServices />
				<RecentProjects />
				<StartNowCTA />
			</div>
			<div className='mt-24'>
				<Image
					className='object-cover'
					src='/images/hero1.jpg'
					height={800}
					width={800}
					alt='hero'
				/>
			</div>
			<div className='px-4 bg-gray-50'>
				<Testimonials />
				<FAQ />
			</div>
		</div>
	);
}

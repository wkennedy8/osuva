import { SiMinutemailer } from 'react-icons/si';
import { FAQ } from '../components/FAQ';
import { onest } from '../fonts';
import { ContactForm } from './ContactForm';
import { WhyUs } from './WhyUs';

const ContactPage = () => {
	return (
		<div className={`${onest.className} pt-24 px-8`}>
			<h1 className='text-[56px] text-center font-medium leading-[1em] tracking-[-.07em]'>
				Get in Touch
			</h1>
			<SiMinutemailer className='text-3xl text-[#0048f9] mx-auto my-8' />
			<div className='my-12 flex flex-col justify-start'>
				<h3 className='text-[32px] text-center font-medium leading-[1em] tracking-[-.07em]'>
					Got a project in mind? We'd love to hear about it. Big or small, we're
					here to help bring your ideas to life.
				</h3>
			</div>
			<div className='mt-24'>
				<ContactForm />
			</div>
			<div className='mb-12 flex flex-col gap-4'>
				<div className=''>
					<p className='font-medium text-sm tracking-[-0.02em] leading-[1.4em]'>
						E-mail
					</p>
					<p className='font-medium text-md text-[#8E8E93] tracking-[-0.02em] leading-[1.4em]'>
						contact@osuva.agency
					</p>
				</div>
				<div>
					<p className='font-medium text-sm tracking-[-0.02em] leading-[1.4em]'>
						Phone
					</p>
					<p className='font-medium text-md text-[#8E8E93] tracking-[-0.02em] leading-[1.4em]'>
						786-219-9250
					</p>
				</div>
			</div>
			<div>
				<WhyUs />
				<FAQ />
			</div>
		</div>
	);
};

export default ContactPage;

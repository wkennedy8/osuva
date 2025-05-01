import { TranslateWrapper } from '@/app/framer';
import {
	SiNike,
	Si3M,
	SiAbstract,
	SiAdobe,
	SiAirtable,
	SiAmazon,
	SiBox,
	SiBytedance,
	SiChase,
	SiCloudbees,
	SiBurton,
	SiBmw,
	SiHeroku,
	SiBuildkite,
	SiCouchbase,
	SiDailymotion,
	SiDeliveroo,
	SiEpicgames,
	SiGenius,
	SiGodaddy
} from 'react-icons/si';

const LogoItem = ({ Icon }) => {
	return (
		<a
			href='/'
			rel='nofollow'
			target='_blank'
			className='w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors'
		>
			<Icon className='text-4xl text-[#8E8E93] md:text-5xl' />
		</a>
	);
};

const LogoItemsTop = () => (
	<>
		<LogoItem Icon={SiNike} />
		<LogoItem Icon={Si3M} />
		<LogoItem Icon={SiAbstract} />
		<LogoItem Icon={SiAdobe} />
		<LogoItem Icon={SiAirtable} />
		<LogoItem Icon={SiAmazon} />
		<LogoItem Icon={SiBox} />
		<LogoItem Icon={SiBytedance} />
		<LogoItem Icon={SiChase} />
		<LogoItem Icon={SiCloudbees} />
	</>
);

export const ClientLogos = () => {
	return (
		<div className='flex  overflow-hidden'>
			<TranslateWrapper>
				<LogoItemsTop />
			</TranslateWrapper>
			<TranslateWrapper>
				<LogoItemsTop />
			</TranslateWrapper>
			<TranslateWrapper>
				<LogoItemsTop />
			</TranslateWrapper>
		</div>
	);
};

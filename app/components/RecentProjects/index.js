'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowUpRight } from 'react-icons/fi';

export const RecentProjects = () => {
	const pathname = usePathname();
	const projects = [
		{
			id: 1,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Branding', 'Web Design', 'Motion Graphics']
		},
		{
			id: 2,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Branding', 'Product Design', 'Motion Graphics']
		},
		{
			id: 3,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Branding', 'Web Design', 'Development']
		},
		{
			id: 4,
			image: '/images/hero1.jpg',
			title: 'Arrows',
			services_provided: ['Product Design']
		}
	];
	return (
		<div className='mt-24 lg:mt-36'>
			<div className='pr-8'>
				<h1 className='text-[44px] lg:text-[60px] font-medium leading-[1.1em] tracking-[-.07em]'>
					Our recent projects
				</h1>
			</div>
			<div className='mt-12 w-11/12'>
				<p className='text-lg lg:text-2xl font-medium lg:w-2/4 text-[#8E8E93] tracking-[-.04em] leading-[1.4em]'>
					Dive into our diverse collection of innovative projects, where
					creativity meets cutting-edge technology to solve real-world
					challenges.
				</p>
			</div>
			{pathname !== '/projects' && (
				<div className='mt-12'>
					<Link
						href='/projects'
						className='text-lg lg:text-2xl font-medium underline underline-offset-8 flex items-center gap-2'
					>
						All projects
						<FiArrowUpRight className='text-[#0048f9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
					</Link>
				</div>
			)}
			<div className='mt-12 flex flex-col px-2 lg:grid lg:grid-cols-6 lg:gap-6 lg:auto-rows-[minmax(100px,_auto)]'>
				{projects.map((project, i) => {
					// Dynamic spans for bento layout
					const colSpan = i % 5 === 0 ? 'lg:col-span-3' : 'lg:col-span-2';
					const rowSpan = i % 3 === 0 ? 'lg:row-span-2' : 'lg:row-span-2';

					return (
						<div key={i} className={`mb-12 ${colSpan} ${rowSpan}`}>
							<div className='relative w-full aspect-[4/3] rounded-xl overflow-hidden'>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className='object-cover'
									priority
								/>
							</div>
							<h1 className='text-[26px] my-4 font-medium leading-[1.1em] tracking-[-.07em]'>
								{project.title}
							</h1>
							<div className='flex flex-wrap gap-2'>
								{project.services_provided.map((service, i) => {
									return (
										<span
											key={i}
											className='text-[#8E8E93] tracking-[-.04em] leading-[1.4em] border py-2 px-4  rounded-2xl'
										>
											{service}
										</span>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

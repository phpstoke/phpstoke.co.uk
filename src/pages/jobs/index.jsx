// pages/jobs/index.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Container} from "@/components/Container";

export async function getServerSideProps(context) {
    return {
        props: {
            fullUrl: process.env.FULL_URL,
        }
    }
}

export default function JobBoard({fullUrl}) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <>
            <Head>
                <title>PHP Stoke Job Board - The Stoke-on-Trent PHP meet-up.</title>
                <meta
                    name="description"
                    content="Find the latest PHP and web development jobs in Stoke-on-Trent and surrounding areas."
                />

                <meta property="og:url" content={fullUrl} key="ogUrl" />
                <meta name="twitter:url" content={fullUrl} key="twitterUrl" />
            </Head>
            <Header />
            <main>
                <div className="relative pt-10 pb-20 sm:py-24">
                    <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
                        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
                    </div>
                    <Container className="relative">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                            <h1 className="font-display text-5xl font-bold tracking-tighter text-indigo-600 sm:text-7xl">
                                Job Board
                            </h1>
                            <div className="mt-6 space-y-3 font-display text-2xl tracking-tight text-indigo-900">
                                <p>
                                    Find the latest <span className="highlight">PHP and web development jobs</span> in Stoke-on-Trent and surrounding
                                    areas.
                                </p>
                                <p className="text-xl">
                                    Posting to our job board helps us to financially support PHP Stoke and keep our meet-ups free.
                                </p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto max-w-2xl bg-white/5 py-6 px-8 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0">
                            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Post a Job</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                                To discuss posting a job on our board, please email your job details to:
                            </p>
                            <a href="mailto:jobs@phpstoke.co.uk" className="text-indigo-600 hover:underline">
                                jobs@phpstoke.co.uk
                            </a>
                        </div>
                        <div
                            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {jobs.map((job) => (
                                <article key={job.id} className="flex items-start space-x-6 p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={job.logoUrl}
                                            alt={`${job.company} logo`}
                                            width={64}
                                            height={64}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold text-gray-900">{job.company}</h3>
                                            <span className="text-sm text-gray-500">{job.location}</span>
                                        </div>
                                        <h4 className="mt-1 text-lg font-medium text-gray-700">{job.title}</h4>
                                        <p className="mt-2 text-md text-green-600 font-medium">{job.salaryRange}</p>
                                        <div className="mt-4">
                                            <Link href={job.link} className="text-indigo-600 hover:text-indigo-800 font-medium">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
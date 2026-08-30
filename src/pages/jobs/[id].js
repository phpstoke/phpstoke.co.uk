// pages/jobs/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function JobDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/jobs`)
                .then(response => response.json())
                .then(data => setJob(data.find(job => job.id === parseInt(id))))
        }
    }, [id]);

    if (!job) return <div className="flex justify-center items-center h-screen">Loading...</div>;

    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <Link href="/jobs" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    &larr; Back to all jobs
                </Link>

                <div className="mt-8 flex items-center space-x-6">
                    <Image
                        src={job.logoUrl}
                        alt={`${job.company} logo`}
                        width={96}
                        height={96}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{job.title}</h1>
                        <p className="mt-2 text-lg text-gray-600">{job.company}</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900">{job.location}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Salary Range</dt>
                            <dd className="mt-1 text-sm text-green-600 font-medium">{job.salaryRange}</dd>
                        </div>
                    </dl>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                    <h2 className="text-xl font-bold text-gray-900">Job Description</h2>
                    <div className="mt-4 prose prose-indigo prose-lg text-gray-500">
                        <p>{job.description}</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                    <a
                        href={job.applyUrl}
                        className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                        Apply for this position
                    </a>
            </div>
        </div>
    </div>
);
}
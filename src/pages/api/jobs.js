import Job from '../../models/Job';

const jobs = [
    // new Job(1, 'PHP Developer', 'TechCo', 'Stoke-on-Trent', 'We are looking for a skilled PHP developer...', 'mailto:apply@techco.com', '£30,000 - £45,000', null, 'https://site.com/job/apply'),
    // new Job(2, 'Frontend Developer', 'WebSolutions', 'Remote', 'Join our team as a frontend developer...', 'mailto:careers@websolutions.com', '£35,000 - £50,000', null, 'https://site.com/job/apply'),
];

export default function handler(req, res) {
    res.status(200).json(jobs);
}
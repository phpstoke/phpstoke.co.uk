export default class Job {
    constructor(id, title, company, location, description, applyUrl, salaryRange, logoUrl, link) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
        this.description = description;
        this.applyUrl = applyUrl;
        this.salaryRange = salaryRange;
        this.logoUrl = logoUrl || `https://ui-avatars.com/api/?name=${company}&size=128&background=fff&color=4f46e5`;
        this.link = link;
    }
}
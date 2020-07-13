'use strict';

// Creating a CV class
// The CV that we will be making uses three classes: Job, Education and CV. The CV class we have made for you (with some missing functionality). The Job and Education classes you need to create.

// Part 1:
// Create the classes Job and Education.

// Job has five properties: id, title, description, startDate and endDate
// (the dates can be strings or actual Date objects).
// Education has six properties: id, title, school, address, startDate and endDate.

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class CV {
  constructor(email) {
    this.email = email;
    this.jobs = [];
    this.educations = [];
  }

  addJob(id, title, description, startDate, endDate) {
    return this.jobs.push(new Job(id, title, description, startDate, endDate));
  }

  removeJob() {}
}

const job1 = new Job(23, 'developer', '2 years experience of javascript and angular');
console.log(job1);
const cv1 = new CV('bk10895@gmail.com');
console.log(cv1.addJob(job1));
console.log(cv1);
// console.log(cv1.addJob(job1));

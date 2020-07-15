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

  // addJob(job) {
  //   return this.jobs.push(job);
  // }

  // removeJob(job) {
  //   for (let i = 0; i < this.jobs.length; i++) {
  //     const j = this.jobs[i];
  //     if (j.id === job.id) {
  //       return this.jobs.splice(i, 1);
  //     }
  //   }
  //   // this.jobs = this.jobs.filter((j) => j.id !== job.id);
  // }

  removeJob(id) {
    for (const job of this.jobs) {
      const j = this.jobs.indexOf(job);
      if (this.jobs[j].id === id) {
        return this.jobs.splice(job, 1);
      }
    }
  }

  addEduction(id, title, school, address, startDate, endDate) {
    return this.educations.push(new Education(id, title, school, address, startDate, endDate));
  }

  removeEducation(id, title, school, address) {
    const matchedIndex = this.educations.findIndex((element) => {
      return element.id === id;
    });

    if (matchedIndex > -1) {
      return this.educations.splice(e, 1);
    } else {
      return this.educations;
    }

    // for (const e of this.educations) {
    //   const j = this.educations.indexOf(e);
    //   // console.log(j);
    //   if (this.educations[j].id === id) {
    //     return this.educations.splice(e, 1);
    //     // } else if (this.educations[j].title === title) {
    //     //   return this.educations.splice(e, 1);
    //     // } else if (this.educations[j].school === school) {
    //     //   return this.educations.splice(e, 1);
    //     // } else if (this.educations[j].address === address) {
    //     //   return this.educations.splice(e, 1);
    // }
    // }
  }

  renderCV() {
    const id = document.querySelector('<id>');
    const element = document.createElement('<element>');
    id.appendChild(element);

    element.innerHTML;
  }
}

const cv1 = new CV('bk10895@gmail.com');
cv1.addJob(23, 'developer', '2 years of experience in javascript and angular', '23-9-2017', '12-3-2019');
cv1.addEduction(17, 'student', 'DTU', 'Delhi', '2018', '2021');
console.log(cv1);

const myCV = new CV('brirdgk@gmail.com');
myCV.addJob(13, 'developer', '2 years of experience in javascript and angular', '04-04-2018', '10-05-2020');

myCV.addEduction(19, 'engineering', 'MNIT', 'Allahabad', '2015', '2019');

console.log(myCV);

// cv1.removeJob(23);
// myCV.removeEducation(19);
// myCV.removeJob(13);
console.log(myCV);

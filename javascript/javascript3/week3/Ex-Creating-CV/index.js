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

  removeJob(id, title) {
    for (let i = 0; i < this.jobs.length; i++) {
      const j = this.jobs[i];
      if (j.id === id) {
        return this.jobs.splice(i, 1);
      } else if (j.title === title) {
        return this.jobs.splice(i, 1);
      }
    }
  }

  addEduction(id, title, school, address, startDate, endDate) {
    return this.educations.push(new Education(id, title, school, address, startDate, endDate));
  }

  removeEducation(id, title, school, address) {
    for (let i = 0; i < this.educations.length; i++) {
      const j = this.educations[i];
      if (j.id === id) {
        return this.educations.splice(i, 1);
        // } else if (j.title === title) {
        //   return this.educations.splice(i, 1);
        // } else if (j.school === school) {
        //   return this.educations.splice(i, 1);
        // } else if (j.address === address) {
        //   return this.educations.splice(i, 1);
      }
    }
  }

  // renderCV() {
  //   const id = document.querySelector('<id>');
  //   const element = document.createElement('<element>');
  //   id.appendChild(element)

  //   element.innerHTML =
  // }
}

// const job1 = new Job(23, 'developer', '2 years experience of javascript and angular', '23-9-2017', '12-3-2019');
// const job2 = new Job(24, 'developer', '2 years experience of javascript and angular', '04-04-2018', '10-05-2020');

// const education1 = new Education(17, 'student', 'DTU', 'Delhi', '2018', '2021');
// const education2 = new Education(19, 'engineer', 'MNIT', 'Allahabad', '2015', '2019');

// const cv1 = new CV('bk10895@gmail.com');
// cv1.addJob(job1);
// cv1.addJob(job2);
// console.log(cv1);
// cv1.removeJob(job1);

const cv1 = new CV('bk10895@gmail.com');
cv1.addJob(23, 'developer', '2 years of experience in javascript and angular', '23-9-2017', '12-3-2019');
cv1.addJob(43, 'dataScientist', 'Two years of experience in using python, pandas and mysql', '2017', '2020');
cv1.addEduction(17, 'student', 'DTU', 'Delhi', '2018', '2021');
console.log(cv1);

const myCV = new CV('brirdgk@gmail.com');
myCV.addJob(13, 'developer', '2 years of experience in javascript and angular', '04-04-2018', '10-05-2020');
myCV.addJob(17, 'developer', '2 years ofexperience in javascript and angular', '12-04-2018', '19-07-2020');

myCV.addEduction(19, 'engineering', 'MNIT', 'Allahabad', '2015', '2019');
myCV.addEduction(29, 'engineering', 'MNIT', 'Allahabad', '2013', '2018');
myCV.addEduction(39, 'engineering', 'DTU', 'Delhi', '2016', '2020');
console.log(myCV);

// cv1.removeJob(23);
myCV.removeEducation(19);
console.log(myCV);

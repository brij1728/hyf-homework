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
    const matchedIndex = this.jobs.findIndex((element) => {
      return element.id === id;
    });

    if (matchedIndex > -1) {
      return this.jobs.splice(matchedIndex, 1);
    } else {
      return this.jobs;
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
      return this.educations.splice(matchedIndex, 1);
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
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.innerHTML = `<h1>${this.email}</h1>`;

    for (const item of this.jobs) {
      console.log(item);
      const itemList = document.createElement('li');
      ul.appendChild(itemList).innerHTML = `<h3>ID: ${item.id}</h3>`;
      // ul.appendChild(itemList).innerHTML = `<h3>Title: ${item.title}</h3>`;
    }
  }
}

const cv1 = new CV('bk10895@gmail.com');
cv1.addJob(23, 'developer', '2 years of experience in javascript and angular', '23-9-2017', '12-3-2019');
cv1.addEduction(17, 'student', 'DTU', 'Delhi', '2014', '2018');
console.log(cv1);

const cv2 = new CV('brirdgk@gmail.com');
cv2.addJob(13, 'developer', '2 years of experience in javascript and angular', '04-04-2018', '10-05-2020');
cv2.addEduction(19, 'engineering', 'MNIT', 'Allahabad', '2013', '2017');
console.log(cv2);

// cv1.removeEducation(17);
// cv2.removeEducation(19);
// cv2.removeJob(13);
console.log(cv1);

const cv = [cv1, cv2];
console.log(cv);
cv1.renderCV();

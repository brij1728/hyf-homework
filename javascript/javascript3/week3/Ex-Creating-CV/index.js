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
  }

  renderCV() {
    const outputDiv = document.querySelector('.output');
    outputDiv.innerHTML = '';
    outputDiv.innerHTML = `<h1>${this.email}</h1>`;
    outputDiv.innerHTML = `<h3>Job Details</h3>`;
    outputDiv.appendChild(this.renderJobs());

    outputDiv.innerHTML = `<h3>Education Details</h3>`;
    outputDiv.appendChild(this.renderEducations());
  }

  renderJobs() {
    const ul = document.createElement('ul');

    // ul.innerHTML = `<h3>Job Details</h3>`;

    this.jobs.forEach((item) => {
      console.log(item);

      // const list = document.createElement('li');
      // ul.appendChild(list).innerHTML = `<h4>ID: ${item.id}<br>
      // Title: ${item.title}<br>
      // Description: ${item.description}<br>
      // Start date: ${item.startDate}<br>
      // End date: ${item.endDate}</h4>`;

      const id = document.createElement('li');
      ul.appendChild(id).innerHTML = `<h4>ID: ${item.id}</h4>`;

      const title = document.createElement('li');
      ul.appendChild(title).innerHTML = `<h4>Title: ${item.title}</h4>`;

      const description = document.createElement('li');
      ul.appendChild(description).innerHTML = `<h4>Description: ${item.description}</h4>`;

      const startDate = document.createElement('li');
      ul.appendChild(startDate).innerHTML = `<h4>Start date: ${item.startDate}</h4>`;

      const endDate = document.createElement('li');
      ul.appendChild(endDate).innerHTML = `<h4>End date: ${item.endDate}</h4>`;
    });

    return ul;
  }

  renderEducations() {
    const ul = document.createElement('ul');

    ul.innerHTML = `<h3>Education Details</h3>`;

    this.educations.forEach((item) => {
      const id = document.createElement('li');
      ul.appendChild(id).innerHTML = `<h4>ID: ${item.id}</h4>`;

      const title = document.createElement('li');
      ul.appendChild(title).innerHTML = `<h4>Title: ${item.title}</h4>`;

      const description = document.createElement('li');
      ul.appendChild(description).innerHTML = `<h4>Description: ${item.description}</h4>`;

      const startDate = document.createElement('li');
      ul.appendChild(startDate).innerHTML = `<h4>Start date: ${item.startDate}</h4>`;

      const endDate = document.createElement('li');
      ul.appendChild(endDate).innerHTML = `<h4>End date: ${item.endDate}</h4>`;
    });
    return ul;
  }
}

const cv1 = new CV('bk10895@gmail.com');
cv1.addJob(28, 'developer', '2 years of experience in javascript and angular', '23-9-2017', '12-3-2019');
cv1.addEduction(17, 'student', 'DTU', 'Delhi', '2014', '2018');
console.log(cv1);

const cv2 = new CV('brirdgk@gmail.com');
cv2.addEduction(19, 'engineering', 'MNIT', 'Allahabad', '2013', '2017');
cv2.addEduction(29, 'engineering', 'MNIT', 'Allahabad', '2013', '2017');
cv2.addEduction(39, 'engineering', 'MNIT', 'Allahabad', '2013', '2017');
cv2.addJob(13, 'developer', '2 years of experience in javascript and angular', '04-04-2018', '10-05-2020');
cv2.addJob(23, 'developer', '2 years of experience in javascript and angular', '04-04-2018', '10-05-2020');
console.log(cv2);

// cv1.removeEducation(17);
// cv2.removeEducation(19);
// cv2.removeJob(13);
console.log(cv1);

const cv = [cv1, cv2];
console.log(cv);
cv2.renderCV();

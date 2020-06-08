const mentors = [
  {
    name: 'Abed Sujan',
    subjects: ['JS', 'HTML', 'CSS', 'NODEJS'],
    yearOfExperience: 4,
  },
  {
    name: 'Ahmed Magdy',
    subjects: ['JS', 'Database', 'CSS'],
    yearOfExperience: 1,
  },
  {
    name: 'Alicia Gonzales',
    subjects: ['DB', 'HTML', 'NODEJS'],
    yearOfExperience: 8,
  },
  {
    name: 'allan Thraen',
    subjects: ['REACT', 'HTML', 'CSS'],
    yearOfExperience: 3,
  },
  {
    name: 'Anders Ravn',
    subjects: ['JS', 'HTML', 'NODEJS'],
    yearOfExperience: 2,
  },
  {
    name: 'Daniel Fernandes',
    subjects: ['Database', 'HTML', 'CSS'],
    yearOfExperience: 9,
  },
  {
    name: 'Marta',
    subjects: ['Database', 'Git'],
    yearOfExperience: 3,
  },
  {
    name: 'Benjamin',
    subjects: ['JavaScript'],
    yearOfExperience: 9,
  },
];

console.log(mentors);

// Daniel Fernandes has 9 years of experience and is expert in 3 topics relevant to HackYourFuture, i.e. Database, HTML and CSS.
function getMentorBio(mentor) {
  return (
    `${mentor.name} has ${mentor.yearOfExperience} ${mentor.yearOfExperience > 1 ? 'years' : 'year'}` +
    ` of experience and is expert in ${mentor.subjects.length} ` +
    `${mentor.subjects.length > 1 ? 'topics' : 'topic'} relevant to HackYourFuture, i.e. ${getSubjectsString(
      mentor.subjects
    )}. `
  );
}

function getSubjectsString(subjects) {
  if (subjects.length >= 2) {
    return `${subjects.slice(0, subjects.length - 1).join(', ')} and ${subjects[subjects.length - 1]}`;
  } else {
    return subjects[0];
  }
}

// write bio for each mentor
mentors.forEach((mentor) => console.log(getMentorBio(mentor)));

// write name for each mentor
console.log(mentors.map((m) => m.name));

// get name and subjects for all mentors
console.log(
  mentors.map((m) => {
    return {
      [m.name]: m.subjects,
    };
  })
);

// write bio for more experienced mentor
const experiencedMentor = mentors.filter((m) => m.yearOfExperience > 2);
console.log(experiencedMentor);
experiencedMentor.forEach((mentor) => console.log(getMentorBio(mentor)));

//  ca/culate sum and average of all mentors
const sumOfExperiences = mentors.reduce((sum, m) => sum + m.yearOfExperience, 0);

console.log(sumOfExperiences);

const averageExperince = sumOfExperiences / mentors.length;
console.log(averageExperince);

const country = {};
country.name = 'India';
country.capital = 'New Delhi';
console.log(country);

const mapped = mentors.map((mentor) => {
  const { yearOfExperience, ...rest } = mentor;

  return {
    ...rest,
    country: 'India',
    hobby: ['music', 'basketball', 'dancing'],
  };
});
const map = mentors.map((mentor) => ({ ...mentor, country: 'India', hobby: ['music', 'basketball', 'dancing'] }));
console.log(mapped);
console.log(map);

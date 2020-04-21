/*
How much time of my life have i been watching series on tv? 
Lets find out! Calculate how much time a tv series have 
taken as a percentage of an average lifespan of 80 years.

Create a function that logs out the following text using 
the seriesDurations array:
*/

const seriesDurations = [
  {
    title: "The Big Bang Theory",
    days: 4,
    hours: 5,
    minutes: 56,
  },
  {
    title: "Grey.s Anatomy",
    days: 10,
    hours: 19,
    minutes: 26,
  },
  {
    title: "Doc Martin",
    days: 2,
    hours: 9,
    minutes: 30,
  },
  {
    title: "Modern Family",
    days: 4,
    hours: 8,
    minutes: 10,
  },
  {
    title: "Orange is the new Black",
    days: 3,
    hours: 19,
    minutes: 0,
  },
  {
    title: "The Good Wife",
    days: 4,
    hours: 15,
    minutes: 48,
  },
  {
    title: "How I met Your Mother",
    days: 3,
    hours: 4,
    minutes: 16,
  },
];

const averageLifeSpam = 80;

function logOutSeriesText(seriesDurations) {
  for (let i = 0; i < seriesDurations.length; i++) {
    const daysInYears = seriesDurations[i].days / 365;
    const hoursInYears = seriesDurations[i].hours / (24 * 365);
    const minutesInYears = seriesDurations[i].minutes / (60 * 24 * 365);

    const totalSeriesDurationInYears =
      daysInYears + hoursInYears + minutesInYears;

    const percentageSeriesInLife = totalSeriesDurationInYears / averageLifeSpam;

    console.log(
      `${seriesDurations[i].title} took ${percentageSeriesInLife.toFixed(
        5
      )} % of my life`
    );
  }
}

logOutSeriesText(seriesDurations);

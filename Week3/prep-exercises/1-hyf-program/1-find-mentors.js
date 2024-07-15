import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
  return mentors
    .filter((mentor) => mentor.skills.includes(moduleName))
    .map((mentor) => mentor.name);
};

console.log(possibleMentorsForModule("using-apis"));

const findMentorForModule = (moduleName) => {
  const possibleMentors = possibleMentorsForModule(moduleName);
  const randomIndex = Math.floor(Math.random() * possibleMentors.length);
  return possibleMentors[randomIndex];
};

console.log(findMentorForModule("javascript"));

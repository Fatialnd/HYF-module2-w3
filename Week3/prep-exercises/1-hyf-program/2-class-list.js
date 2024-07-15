import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  const classDetails = classes.find(
    (classItem) => classItem.name === className
  );

  if (!classDetails) {
    return [];
  }

  const currentModule = classDetails.currentModule;

  const enrolledStudents = students
    .filter((student) => student.className === className)
    .map((student) => ({ name: student.name, role: "student" }));

  const currentMentors = mentors
    .filter((mentor) => mentor.nowTeaching.includes(currentModule))
    .map((mentor) => ({ name: mentor.name, role: "mentor" }));

  return [...enrolledStudents, ...currentMentors];
};

const getActiveClasses = () => {
  const activeClasses = classes.filter((classItem) => classItem.active);

  const activeClassDetails = {};

  activeClasses.forEach((classItem) => {
    activeClassDetails[classItem.name] = getPeopleOfClass(classItem.name);
  });

  return activeClassDetails;
};

console.log(getPeopleOfClass("class34"));
console.log(getActiveClasses());

// for (let grades = 0; grades < 100; grades++) {
//     console.log(grades);
// }

let grades = [
    {name:'Mike', grade:8, sex:'M'},
    {name:'Molly', grade:4, sex:'F'},
    {name:'Jess', grade:12, sex:'F'},
    {name:'Kevin', grade:7, sex:'M'},
    {name:'Ivy', grade:5, sex:'F'},
    {name:'Lee', grade:9, sex:'M'},
    {name:'Julie', grade:15, sex:'F'},
    {name:'Rob', grade:8, sex:'M'},
    {name:'Tom', grade:6, sex:'M'},
    {name:'Carol', grade:10, sex:'F'},   
]

// these next 7 functions each only have one job
let isBoy = student => student.sex ==="M";
let isGirl = student => student.sex ==="F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc+curr.grade),0)/grades.length);
let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

// now we write higher order functions that use the above functions
let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));

let highestGrade = maxGrade(grades);
let lowsetGrade = minGrade(grades);
let highestBoysGrade = maxGrade(getBoys(grades));
let highestGirlsGrade = maxGrade(getGirls(grades));
let lowestBoysGrade = minGrade(getBoys(grades));
let lowestGirlsGrade = minGrade(getGirls(grades));
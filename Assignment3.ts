//Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and marks [75, 80, 82] Add 10 marks to each students using assignment operators and store it into another array, after adding 10 marks identify the average marks of all students
let studentNames:string[] = ["Suresh","Mahesh","Naresh"]
let studentMarks:number[] = [75,80,82]
let averageMarks:number=0;
let updatedMarks:number[]=[studentMarks[0]+10, studentMarks[1]+10,studentMarks[2]+10]
averageMarks = (updatedMarks[0]+updatedMarks[1]+updatedMarks[2])/updatedMarks.length

console.log("Udpated Marks: \n"+studentNames[0]+":"+updatedMarks[0]);
console.log(studentNames[1]+":"+updatedMarks[1])
console.log(studentNames[2]+":"+updatedMarks[2])
console.log("Average Marks:"+ averageMarks)


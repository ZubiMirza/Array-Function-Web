var students = ["zubair" ,"ali" ,"sufyan","hamza"]

function studentName() {
   students[students.length] = document.getElementById("userName").value
   printstudents()
}
function findname() {
    var searchname = document.getElementById("searchInput").value
    var Result = 'Not Found'
for (let index = 0; index < students.length; index++) {
    const student = students[index];
    if (student == searchname) {
        Result = `user found on index ${index}`
    break;
    }
}
 document.getElementById("searchResult").innerHTML = Result

} 

function printstudents() {
    console.log(students);
}
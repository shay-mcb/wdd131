// Javascript object to hold multiple sections of one course
// think of an object const like a tupperware container; you can't change the container but you can change what's inside
const aCourse = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    sections: [ // make an array within the object to make more objects
        {sectionNum: 1,
            roomNum: "STC 231",
            enrolled: 12,
            days: "TTH",
            instructor: "Sister Anderson"},
        {sectionNum: 2,
            roomNum: "STC 234",
            enrolled: 0,
            days: "TTH",
            instructor: "Brother Warner"}
    ],
    enrollStudent: function(sectionNum) {
        // sectionNum represents the section the user wants to add student to
        // find that section in our array, add a student to it
        // 'this' refers to the key within the current object
        this.sections.forEach(function(section){
            if(section.sectionNum == sectionNum) {
                section.enrolled++;
                return;
            }
        })

        // alternative
        this.sections.find(section => section.sectionNum == sectionNum).enrolled++;
        renderSections(this.sections); // allows the numbers to be updated on the page
    }
}


function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});


async function displayData() {
  let response = await fetch("./studentsData.json");
  let studentsData = await response.json();
  console.log(studentsData);

  // ? for loop
  // for (let i = 0; i <= studentsData.length - 1; i++) {
  //     console.log(i);
  //     console.log(studentsData[i]);
  //   }

  //? for in
  //   for (let i in studentsData) {
  //     console.log(i); // indexes
  //     console.log(studentsData[i]);
  //   }

  // ? for of
  //   for (let i of studentsData) {
  //     console.log(i); // values
  //   }

  // ? map method
  let section = document.createElement("section");
  document.body.append(section);

  studentsData.map((student, ind) => {
    // console.log(student);
    console.log(student.sname);

    let article = document.createElement("article");

    article.innerHTML = `
                <center> 
                    <h2> Student ID : 
                            <i>
                                <u>
                                    QSP2024S00${ind + 1}
                                </u>
                             </i> 
                    </h2> 
                </center>
                <h4>Name: <i> ${student.sname}</i> </h4>
                <h4>10th School Name: <i>${student.tenth_school_name}</i> </h4>
                <h4>10th Percentage: <i>${student.tenth_percentage}</i> </h4>
                <h4>10th YOP: <i>${student.tenth_YOP}</i></h4>
                <h4>12th College Name: <i>${
                  student.plus2_college_name
                } </i> </h4>
                <h4>12th Percentage: <i>${student.plus2_percentage}  </i> </h4>
                <h4>12th YOP: <i> ${student.plus2_YOP}</i></h4>
                <h4>Degree College Name: </h4>
                <h4>Degree Percentage: </h4>
                <h4>Degree YOP: </h4>
      `;

    section.append(article);
    console.log(article);
  });
}
displayData();

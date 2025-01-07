async function Youtube() {
  let res = await fetch("./data.json");
  let data = await res.json();
  console.log(data);

  // ? for loop
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(i);
  //     console.log(data[i]);
  //     console.log(data[i].video_url);
  //     console.log(data[i].video_title);
  //     console.log(data[i].video_thumbnail);
  //   }

  // ? for of loop
  //   for (let val of data) {
  //     console.log(val);
  //     console.log(val.video_url);
  //     console.log(val.video_title);
  //     console.log(val.video_thumbnail);
  //   }

  // ? forEach
  //syntax: array.forEach(callback);

  //   data.forEach((val, ind) => {
  //     console.log(val);
  //     console.log(ind);
  //   });

  // ? Map:
  // syntax: array.map(callback);
  data.map((val, ind) => {
    console.log(val);
    console.log(val.video_url);
    console.log(val.video_title);
    console.log(val.video_thumbnail);

    // create main tag
    let main = document.createElement("main");
    main.innerHTML = `
        <img  src="${val.video_thumbnail}">
        <h3>${val.video_title}</h3>
      `;
    console.log(main);

    let playBox = document.getElementById("playBox");
    let playList = document.getElementById("playList");

    //  append main Tag
    playList.append(main);

    // onclick event
    main.addEventListener("click", () => {
      playBox.innerHTML = `
      <video src="${val.video_url}" controls autoplay ></video>
        `;
    });
  });
}
Youtube();

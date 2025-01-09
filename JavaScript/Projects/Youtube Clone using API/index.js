// ! === Normal Code ===
let toggleButton = document.getElementById("toggleButton");
// console.log(toggleButton);

let hide_items = document.getElementsByClassName("hide_items");
// console.log(hide_items); // Array

toggleButton.addEventListener("click", () => {
  console.log("I am toggling");

  for (let element of hide_items) {
    console.log(element);
    // element.classList.add("demo");
    // element.classList.add("demo1");
    // element.classList.add("demo2");
    // element.classList.remove("demo1");
    // element.classList.replace("demo2", "vikas");
    // console.log(element.classList.contains("vikas")); // true
    // console.log(element.classList.contains("megha")); // false
    // console.log(element.classList.contains("vikas Kumar")); // false
    element.classList.toggle("hidden_content");
  }
});

// classList ---> it allows to work with class names in an efficient manner
/*
    add() ---> It will add new class name
    remove() --> It will remove the class name
    replace() --> It will replace the class name with another name.
    contains() --> It will check the class name exists or not and returns a boolean value.
    toggle() --> It will check class nams is present or not.
                 If present  -- it will remove 
                 If not present  -- it will add

*/

// ! === API Integration ===
/*
    ? ==== API KEY ====
    >>> search google cloud
    >>> click on GCP link
    >>> click on console at top-right corner
    >>> permissons
    >>> add new project
    >>> choose the project you created
    >>> click on navigation menu
    >>> hover on api&services
    >>> click on library
    >>> move youtube category
    >>> click on youtube data api v3
    >>> click on enable
    >>> create credentials
    >>> choose the option PUBLIC DATA
    >>> now finally we received API KEY

    ? ==== Offcial Documentation ====
    >>> search for youtube data api
    >>> click on YouTube Data API | Google for Developers
    >>> click on references
    >>> read the documentation
    >>> move to search category

*/

//! ===== NOTES =====
//? SEARCH:
// A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request.
/* Expected output
{
  "kind": "youtube#searchResult",
  "etag": etag,
  "id": {
    "kind": string,
    "videoId": string,
    "channelId": string,
    "playlistId": string
  },
  "snippet": {
    "publishedAt": datetime,
    "channelId": string,
    "title": string,
    "description": string,
    "thumbnails": {
      (key): {
        "url": string,
        "width": unsigned integer,
        "height": unsigned integer
      }
    },
    "channelTitle": string,
    "liveBroadcastContent": string
  }
}
*/

// REFERENCE LINK: https://developers.google.com/youtube/v3/docs/search

const API_KEY = "AIzaSyChL3R4VdC639_f-9RPDCSvSYVVns-PRQA";
const SEARCH_HTTP = "https://www.googleapis.com/youtube/v3/search?"; // remember ? symbol

let CallYoutubeDataAPI = async () => {
  let search_params = new URLSearchParams({
    key: API_KEY, // M
    part: "snippet", // M
    q: "Milliniore", // M
    maxResults: 3,
    type: "video",
    regionCode: "IN",
  });

  let res = await fetch(SEARCH_HTTP + search_params);
  let data = await res.json();
  // console.log(data);

  console.log(data.items);

  console.log(data.items[0]);
  console.log(data.items[0].id);

  console.log(data.items[1]);
  console.log(data.items[2]);
};
CallYoutubeDataAPI();

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

const API_KEY = "PASTE_YOUR_OWN_API_KEY";
const SEARCH_HTTP = "https://www.googleapis.com/youtube/v3/search?"; // remember "?"" symbol
const CHANNEL_HTTP = "https://www.googleapis.com/youtube/v3/channels?";

let CallYoutubeDataAPI = async query => {
  let search_params = new URLSearchParams({
    key: API_KEY, // M
    part: "snippet", // M
    q: query, // M
    maxResults: 50,
    type: "video",
    regionCode: "IN",
  });

  let res = await fetch(SEARCH_HTTP + search_params);
  let data = await res.json();
  // console.log(data);

  console.log(data.items);

  // We want thumbnail url(done) , channelIcon(pending) , title(done) , channelName(done) , video link(done)
  data.items.map((video_data, ind) => {
    // console.log(ind, "video---", video_data);
    // console.log(video_data);
    // console.log(video_data.id.videoId);
    // console.log(`https://www.youtube.com/watch?v=${video_data.id.videoId}`);
    // console.log(video_data.snippet.channelId);
    // console.log(video_data.snippet.title);
    // console.log("channel Titele ---- ", video_data.snippet.channelTitle);
    // console.log(video_data.snippet.thumbnails.high.url);

    // to get channel Icon
    getChannelIcon(video_data);
  });
};

// function to get channel icon
let getChannelIcon = async video_data => {
  let channel_params = new URLSearchParams({
    key: API_KEY, // M
    part: "snippet", // M,
    id: video_data.snippet.channelId,
  });

  let res = await fetch(CHANNEL_HTTP + channel_params);
  let data = await res.json();
  // console.log(data);
  // console.log(data.items);
  // console.log(data.items[0]);
  // console.log(data.items[0].snippet);
  // console.log(data.items[0].snippet.thumbnails);
  // console.log(data.items[0].snippet.thumbnails.high);
  // console.log(data.items[0].snippet.thumbnails.high.url);
  let channelIcon = data.items[0].snippet.thumbnails.high.url;

  // DOM work starts here
  console.log(video_data);
  console.log(channelIcon);

  appendVideosInToContainer(video_data, channelIcon);
};

// to create videos
let appendVideosInToContainer = (video_data, channelIcon) => {
  main_content.innerHTML += `
    <a href="https://www.youtube.com/watch?v=${video_data.id.videoId}">
    
      <main class="video_container">
          <article class="imageBox">
            <img src="${video_data.snippet.thumbnails.high.url}" alt="" />
          </article>
          <article class="infoBox">
            <div>
              <img src="${channelIcon}" alt="" />
            </div>
            <div>
              <p>
                ${video_data.snippet.title}
              </p>
              <p class="channelName">${video_data.snippet.channelTitle}</p>
            </div>
          </article>
        </main>  

    </a>
    `;
};

let main_content = document.getElementById("main_content");
let search_button = document.getElementById("search_button");
// console.log(search_button);

search_button.addEventListener("click", () => {
  console.log("event triggered");

  let user_input = document.getElementById("user_input").value;
  console.log("You made a request  for", user_input, "data");
  main_content.innerHTML = "";

  CallYoutubeDataAPI(user_input);
});

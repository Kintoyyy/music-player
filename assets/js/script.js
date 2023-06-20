'use strict';





/**
 * Keyboard shortcuts
 */
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    // Increase volume
    playerVolumeRange.stepUp();
    changeVolume();
  } else if (event.code === "ArrowDown") {
    // Decrease volume
    playerVolumeRange.stepDown();
    changeVolume();
  }
  else if (event.code === "Space") {
    // Play music
    playMusic()

  }
  else if (event.code === "ArrowRight") {
    // Skip next music
    skipNext();
  }
  else if (event.code === "ArrowLeft") {
    // Skip prev music
    skipPrev();
  }
  else if (event.code === "KeyM") {
    // Mute Music
    muteVolume();
  }
  else if (event.code === "KeyS") {
    // Turn on / off shuffle
    shuffle();
  }
  else if (event.code === "KeyR") {
    // Turn on / off Repeat
    repeat();
  }
  else if (event.code === "Escape") {
    // Close the tab
    window.close();
  }
});



const lastPlayedMusicLocal = localStorage.getItem("lastPlayedMusic");

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const searchInput = document.getElementById('searchInput');
const playlist = document.querySelector("[data-music-list]");
let filteredPlaylist = [];

searchInput.addEventListener('input', function () {
  const searchText = this.value.toLowerCase();
  filteredPlaylist = musicData.filter(function (music) {
    return music.title.toLowerCase().includes(searchText) || music.artist.toLowerCase().includes(searchText);
  });
  renderPlaylist();
});



function renderPlaylist() {
  playlist.innerHTML = ''; // Clear existing playlist
  for (let i = 0; i < filteredPlaylist.length; i++) {
    playlist.innerHTML += `
      <li>
        <button class="music-item ${i === lastPlayedMusicLocal ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
          <img src="${'./assets/images/' + filteredPlaylist[i].title + '.jpg'}" width="800" height="800" alt="${filteredPlaylist[i].title} Album Poster" class="img-cover">
          <div class="item-icon">
            <span class="material-symbols-rounded">equalizer</span>
          </div>
        </button>
      </li>
    `;
  }
}

// Initial rendering of the full playlist
filteredPlaylist = musicData;
renderPlaylist();


/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = lastPlayedMusicLocal || 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

// Function to update the last played music in local storage
const updateLastPlayedMusic = function () {
  localStorage.setItem("lastPlayedMusic", currentMusic);
}

// Function to handle click event on playlist items
const handleClick = function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
};

// Add event listeners to playlist items
playlistItems.forEach(function (item) {
  item.addEventListener("click", handleClick);
});

// Initialize the playlist item
changePlaylistItem();


/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const musicPathName = './assets/music/' + musicData[currentMusic].title + '.mp3'

const audioSource = new Audio(musicPathName);

const changePlayerInfo = function () {
  var songURL = './assets/music/' + musicData[currentMusic].title + '.mp3';

  fetch(songURL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
      var blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
        var arrayBuffer = event.target.result;
        jsmediatags.read(blob, {
          onSuccess: function (tag) {
            console.log(tag);
            // Array buffer to base64
            const data = tag.tags.picture.data;
            const format = tag.tags.picture.format;
            let base64String = "";
            for (let i = 0; i < data.length; i++) {
              base64String += String.fromCharCode(data[i]);
            }
            // Output the metadata
            playerBanner.src = `data:${format};base64,${btoa(base64String)}`;
            document.body.style.backgroundImage = `url('data:${format};base64,${btoa(base64String)}')`;
            playerTitle.textContent = tag.tags.title;
            playerArtist.textContent = tag.tags.artist;
            playerAlbum.textContent = tag.tags.album;
            playerYear.textContent = tag.tags.year;

          },
          onError: function (error) {
            console.log(error);
          }
        });
      };
      fileReader.onerror = function (error) {
        console.log('Error reading file:', error);
      };
      fileReader.readAsArrayBuffer(blob);
    })
    .catch(error => {
      console.log('Error fetching file:', error);
    });


  audioSource.src = songURL;
  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}


// const loadLastPlayed = function () {
//   var songURL = './assets/music/' + musicData[currentMusic].title + '.mp3';

//   fetch(songURL)
//     .then(response => response.arrayBuffer())
//     .then(arrayBuffer => {
//       var blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
//       var fileReader = new FileReader();
//       fileReader.onload = function (event) {
//         var arrayBuffer = event.target.result;
//         jsmediatags.read(blob, {
//           onSuccess: function (tag) {
//             console.log(tag);
//             // Array buffer to base64
//             const data = tag.tags.picture.data;
//             const format = tag.tags.picture.format;
//             let base64String = "";
//             for (let i = 0; i < data.length; i++) {
//               base64String += String.fromCharCode(data[i]);
//             }
//             // Output the metadata
//             playerBanner.src = `data:${format};base64,${btoa(base64String)}`;
//             document.body.style.backgroundImage = `url('data:${format};base64,${btoa(base64String)}')`;
//             playerTitle.textContent = tag.tags.title;
//             playerArtist.textContent = tag.tags.artist;
//             playerAlbum.textContent = tag.tags.album;
//             playerYear.textContent = tag.tags.year;
//           },
//           onError: function (error) {
//             console.log(error);
//           }
//         });
//       };
//       fileReader.onerror = function (error) {
//         console.log('Error reading file:', error);
//       };
//       fileReader.readAsArrayBuffer(blob);
//     })
//     .catch(error => {
//       console.log('Error fetching file:', error);
//     });


//   audioSource.src = songURL;

//   audioSource.addEventListener("loadeddata", updateDuration);
// }

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {

  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }

  updateLastPlayedMusic()
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();

    skipNext()
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    playerRepeatBtn.classList.add("active");
  } else {
    audioSource.loop = false;
    playerRepeatBtn.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }

  // Store the volume value in local storage
  localStorage.setItem("audioVolume", playerVolumeRange.value);
};

// Check if a volume value is stored in local storage
const storedVolume = localStorage.getItem("audioVolume");
if (storedVolume) {
  playerVolumeRange.value = storedVolume;
  audioSource.volume = storedVolume;
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
    localStorage.setItem("muteState", "muted"); // Store the mute state in localStorage
  } else {
    audioSource.muted = false;
    playerVolumeBtn.children[0].textContent = "volume_up";
    localStorage.removeItem("muteState"); // Remove the mute state from localStorage
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);

// Check if mute state is stored in localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
  const muteState = localStorage.getItem("muteState");
  if (muteState === "muted") {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  }
});

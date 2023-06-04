'use strict';



/**
 * all music information
 */




const musicData = [
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "10,000 Hours (with Justin Bieber)",
    "album": "",
    "year": "",
    "artist": "Dan + Shay/Justin Bieber",
    "musicPath": "./assets/music/10,000 Hours (with Justin Bieber).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "8 Letters",
    "album": "",
    "year": "",
    "artist": "Why Don't We",
    "musicPath": "./assets/music/8 Letters.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "All I Ever Need",
    "album": "",
    "year": "",
    "artist": "Austin Mahone",
    "musicPath": "./assets/music/All I Ever Need.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "All I Want - From \"High School Musical: The Musical: The Series\"",
    "album": "",
    "year": "",
    "artist": "Olivia Rodrigo/Disney",
    "musicPath": "./assets/music/All I Want - From _High School Musical_ The Musical_ The Series_.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "BRB",
    "album": "",
    "year": "",
    "artist": "Luh Kel",
    "musicPath": "./assets/music/BRB.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Be Alright",
    "album": "",
    "year": "",
    "artist": "Dean Lewis",
    "musicPath": "./assets/music/Be Alright.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Before You Go",
    "album": "",
    "year": "",
    "artist": "Lewis Capaldi",
    "musicPath": "./assets/music/Before You Go.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Boy's a Liar Pt. 2",
    "album": "",
    "year": "",
    "artist": "PinkPantheress/Ice Spice",
    "musicPath": "./assets/music/Boy's a Liar Pt. 2.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "California King Bed",
    "album": "",
    "year": "",
    "artist": "Rihanna",
    "musicPath": "./assets/music/California King Bed.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Can I Be Him",
    "album": "",
    "year": "",
    "artist": "James Arthur",
    "musicPath": "./assets/music/Can I Be Him.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Count Me In",
    "album": "",
    "year": "",
    "artist": "Cast - Liv and Maddie",
    "musicPath": "./assets/music/Count Me In.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Dancing With Your Ghost",
    "album": "",
    "year": "",
    "artist": "Sasha Alex Sloan",
    "musicPath": "./assets/music/Dancing With Your Ghost.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Dandelions",
    "album": "",
    "year": "",
    "artist": "Ruth B.",
    "musicPath": "./assets/music/Dandelions.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Eastside (with Halsey & Khalid)",
    "album": "",
    "year": "",
    "artist": "benny blanco/Halsey/Khalid",
    "musicPath": "./assets/music/Eastside (with Halsey & Khalid).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Falling",
    "album": "",
    "year": "",
    "artist": "Harry Styles",
    "musicPath": "./assets/music/Falling.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Fly",
    "album": "",
    "year": "",
    "artist": "Nicki Minaj/Rihanna",
    "musicPath": "./assets/music/Fly.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Gold",
    "album": "",
    "year": "",
    "artist": "Kiiara",
    "musicPath": "./assets/music/Gold.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "I Don’t Wanna Live Forever (Fifty Shades Darker)",
    "album": "",
    "year": "",
    "artist": "ZAYN/Taylor Swift",
    "musicPath": "./assets/music/I Don’t Wanna Live Forever (Fifty Shades Darker).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "I Quit Drinking",
    "album": "",
    "year": "",
    "artist": "Kelsea Ballerini/LANY",
    "musicPath": "./assets/music/I Quit Drinking.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "It's You",
    "album": "",
    "year": "",
    "artist": "Ali Gatie",
    "musicPath": "./assets/music/It's You.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Kill Bill",
    "album": "",
    "year": "",
    "artist": "SZA",
    "musicPath": "./assets/music/Kill Bill.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Lose You To Love Me",
    "album": "",
    "year": "",
    "artist": "Selena Gomez",
    "musicPath": "./assets/music/Lose You To Love Me.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Malibu Nights",
    "album": "",
    "year": "",
    "artist": "LANY",
    "musicPath": "./assets/music/Malibu Nights.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "My Only One (No Hay Nadie Más)",
    "album": "",
    "year": "",
    "artist": "Sebastian Yatra/Isabela Merced",
    "musicPath": "./assets/music/My Only One (No Hay Nadie Más).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "No One Compares To You",
    "album": "",
    "year": "",
    "artist": "Jack & Jack",
    "musicPath": "./assets/music/No One Compares To You.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Nobody Compares To You (feat. Katie Pearlman)",
    "album": "",
    "year": "",
    "artist": "Gryffin/Katie Pearlman",
    "musicPath": "./assets/music/Nobody Compares To You (feat. Katie Pearlman).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "On My Way",
    "album": "",
    "year": "",
    "artist": "Illijah",
    "musicPath": "./assets/music/On My Way.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Once in a Lifetime",
    "album": "",
    "year": "",
    "artist": "Freestyle",
    "musicPath": "./assets/music/Once in a Lifetime.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Open Arms (feat. Travis Scott)",
    "album": "",
    "year": "",
    "artist": "SZA/Travis Scott",
    "musicPath": "./assets/music/Open Arms (feat. Travis Scott).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Pull Up",
    "album": "",
    "year": "",
    "artist": "Luh Kel",
    "musicPath": "./assets/music/Pull Up.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Remember - Acoustic",
    "album": "",
    "year": "",
    "artist": "Becky Hill",
    "musicPath": "./assets/music/Remember - Acoustic.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Rewrite The Stars (with James Arthur & Anne-Marie)",
    "album": "",
    "year": "",
    "artist": "James Arthur/Anne-Marie",
    "musicPath": "./assets/music/Rewrite The Stars (with James Arthur & Anne-Marie).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Ring",
    "album": "",
    "year": "",
    "artist": "Selena Gomez",
    "musicPath": "./assets/music/Ring.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Ruin My Life",
    "album": "",
    "year": "",
    "artist": "Zara Larsson",
    "musicPath": "./assets/music/Ruin My Life.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Scars To Your Beautiful",
    "album": "",
    "year": "",
    "artist": "Alessia Cara",
    "musicPath": "./assets/music/Scars To Your Beautiful.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Secret Love Song (feat. Jason Derulo)",
    "album": "",
    "year": "",
    "artist": "Little Mix/Jason Derulo",
    "musicPath": "./assets/music/Secret Love Song (feat. Jason Derulo).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Shower",
    "album": "",
    "year": "",
    "artist": "Becky G",
    "musicPath": "./assets/music/Shower.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Something New",
    "album": "",
    "year": "",
    "artist": "Zendaya/Chris Brown",
    "musicPath": "./assets/music/Something New.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Strawberries & Cigarettes",
    "album": "",
    "year": "",
    "artist": "Troye Sivan",
    "musicPath": "./assets/music/Strawberries & Cigarettes.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Stuck with U (with Justin Bieber)",
    "album": "",
    "year": "",
    "artist": "Ariana Grande/Justin Bieber",
    "musicPath": "./assets/music/Stuck with U (with Justin Bieber).mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Superficial Love",
    "album": "",
    "year": "",
    "artist": "Ruth B.",
    "musicPath": "./assets/music/Superficial Love.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Take A Bow",
    "album": "",
    "year": "",
    "artist": "Rihanna",
    "musicPath": "./assets/music/Take A Bow.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Teenage Mona Lisa",
    "album": "",
    "year": "",
    "artist": "Alfie Castley",
    "musicPath": "./assets/music/Teenage Mona Lisa.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "That Should Be Me",
    "album": "",
    "year": "",
    "artist": "Justin Bieber",
    "musicPath": "./assets/music/That Should Be Me.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "The Only Exception",
    "album": "",
    "year": "",
    "artist": "Paramore",
    "musicPath": "./assets/music/The Only Exception.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "They Just Exist",
    "album": "",
    "year": "",
    "artist": "Gatton/Kennedy Brown",
    "musicPath": "./assets/music/They Just Exist.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "This City",
    "album": "",
    "year": "",
    "artist": "Sam Fischer",
    "musicPath": "./assets/music/This City.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Too Good At Goodbyes",
    "album": "",
    "year": "",
    "artist": "Sam Smith",
    "musicPath": "./assets/music/Too Good At Goodbyes.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Under The Influence",
    "album": "",
    "year": "",
    "artist": "Chris Brown",
    "musicPath": "./assets/music/Under The Influence.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "When Scars Become Art",
    "album": "",
    "year": "",
    "artist": "Gatton/Brooke Young",
    "musicPath": "./assets/music/When Scars Become Art.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Without Me",
    "album": "",
    "year": "",
    "artist": "Halsey",
    "musicPath": "./assets/music/Without Me.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Y.O.U.",
    "album": "",
    "year": "",
    "artist": "Luh Kel",
    "musicPath": "./assets/music/Y.O.U..mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "YOUTH",
    "album": "",
    "year": "",
    "artist": "Troye Sivan",
    "musicPath": "./assets/music/YOUTH.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "You and I Collide",
    "album": "",
    "year": "",
    "artist": "The Time Keepers",
    "musicPath": "./assets/music/You and I Collide.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "deja vu",
    "album": "",
    "year": "",
    "artist": "Olivia Rodrigo",
    "musicPath": "./assets/music/deja vu.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "drivers license",
    "album": "",
    "year": "",
    "artist": "Olivia Rodrigo",
    "musicPath": "./assets/music/drivers license.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "hate u love u",
    "album": "",
    "year": "",
    "artist": "Olivia O'Brien",
    "musicPath": "./assets/music/hate u love u.mp3"
  },
  {
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "traitor",
    "album": "",
    "year": "",
    "artist": "Olivia Rodrigo",
    "musicPath": "./assets/music/traitor.mp3"
  }
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



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

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



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

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

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
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
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
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
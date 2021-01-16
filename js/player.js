const thumbnail = document.querySelector('#thumbnail'); // album cover 
const song = document.querySelector('#song'); // audio object

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['./assets/music/Evanescence.mp3', './assets/music/Falling.mp3' ,'./assets/music/iris.mp3','./assets/music/Internet Money .mp3','./assets/music/Maverick Sabre.mp3','./assets/music/Nickelback.mp3','./assets/music/Paradise.mp3','./assets/music/Scorpions.mp3','./assets/music/U2 .mp3','./assets/music/X-TENSE .mp3' ]; // object storing paths for audio objects
thumbnails = ['./assets/images/Evanescence.png', './assets/images/Falling.png', './assets/images/iris.png', './assets/images/lemonade.png' , './assets/images/slowdown.png' , './assets/images/Nickelback.png','./assets/images/coldplay.png', './assets/images/Scorpions.png', './assets/images/U2.png', './assets/images/xtense.png' ] ; // object storing paths for album covers and backgrounds
songArtists = ['Evanescence', 'Falling in Reverse','Iris','Internet Money','Maverick Sabre', 'Nickelback', 'Coldplay','Scorpions' , 'U2','X-TENSE']; // object storing track artists
songTitles = ["Lithium", "The Drug in me is Reimagined","Vão dar banho ao cão","Lemonade","Slow down", "Hero", "Paradise", "You and I","All that you can´t leave behind","P de Pablito"]; // object storing track titles

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {


    if (playing) {
        const song = document.querySelector('#song'),
        thumbnail = document.querySelector('#thumbnail');

        pPause.src = "./assets/icons/pause.png"
       // thumbnail.style.transform = "scale(1.15)";
        
        song.play();
        playing = false;
    } else {
        pPause.src = "./assets/icons/play.png"
       // thumbnail.style.transform = "scale(1)"
        
        song.pause();
        playing = true;
    }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex++;
   
    if (songIndex > 9) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
   // thumbnail.src = thumbnails[songIndex];
    

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = 9;
    };
    song.src = songs[songIndex];
    //thumbnail.src = thumbnails[songIndex];


    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};
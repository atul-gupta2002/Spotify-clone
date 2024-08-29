// console.log("Welcome to Spotify");

// let singIndex = 0;
// let audioElement = new Audio('songs/bye.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = document.getElementsByClassName('songItem');

// let songs  = [
   
//     {songname: "Bye bye bye", filePath: "songs/bye.mp3", coverPath: "covers/1.jpg"},
//     {songname: "Chaap Tilak", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
//     {songname: "Big Dawgs", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
//     {songname: "Haan he haan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
//     {songname: "Dil Tu Jaan Tu", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
//     {songname: "Patakha Guddi", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
//     {songname: "Mitwa", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
//     {songname: "StarBoy", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
//     {songname: "Lover", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
// ]

// songItems.forEach((element,i)=>{
//     console.log(element,i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// })

// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;

//     }
// })


// audioElement.addEventListener('timeupdate', ()=>{

//     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// console.log("Welcome to Spotify");

// let songIndex = 0;
// let audioElement = new Audio('songs/bye.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = document.getElementsByClassName('songItem');

// let songs = [
//     { songname: "Bye bye bye", filePath: "songs/bye.mp3", coverPath: "covers/1.jpg" },
//     { songname: "Chaap Tilak", filePath: "songs/", coverPath: "covers/2.jpg" },
//     { songname: "Big Dawgs", filePath: "songs/Big_Dawgs.mp3", coverPath: "covers/3.jpg" },
//     { songname: "Haan he haan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
//     { songname: "Dil Tu Jaan Tu", filePath: "songs/DilTuJaanTu.mp3", coverPath: "covers/5.jpg" },
//     { songname: "Patakha Guddi", filePath: "songs/PatakhaGuddi.mp3", coverPath: "covers/6.jpg" },
//     { songname: "Mitwa", filePath: "songs/Mitwa.mp3", coverPath: "covers/7.jpg" },
//     { songname: "StarBoy", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
//     { songname: "Lover", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
// ];

// Array.from(songItems).forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
// });

// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// });

// audioElement.addEventListener('timeupdate', () => {
//     // Update progress bar
//     let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//     myProgressBar.value = progress;
// });

// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// });

// const makeAllPlays = ()=> {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         // element.target.classList.remove('fa-circle-pause');
//         // element.target.classList.add('fa-circle-play');
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');

//     })

// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })



// document.addEventListener('DOMContentLoaded', function() {
//     let masterPlay = document.getElementById('masterPlay');
//     let masterSongName = document.getElementById('masterSongName');
    
//     if (masterPlay) {
//         masterPlay.addEventListener('click', () => {
//             // Your event handler code
//         });
//     } else {
//         console.error("Element with id 'masterPlay' not found");
//     }
    
//     if (masterSongName) {
//         masterSongName.innerText = songs[songIndex].songname;
//     } else {
//         console.error("Element with id 'masterSongName' not found");
//     }
// });

console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/bye.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = document.getElementsByClassName('songItem');

let songs = [
    { songname: "Bye bye bye", filePath: "songs/bye.mp3", coverPath: "covers/1.jpg" },
    { songname: "Tuta Pull Wahan", filePath: "songs/TutaPull.mp3", coverPath: "covers/2.jpg" },
    { songname: "Big Dawgs", filePath: "songs/Big_Dawgs.mp3", coverPath: "covers/3.jpg" },
    { songname: "Kashmir Tu mai Kanyakumari", filePath: "songs/Kashmir.mp3", coverPath: "covers/4.jpg" },
    { songname: "Dil Tu Jaan Tu", filePath: "songs/DilTuJaanTu.mp3", coverPath: "covers/5.jpg" },
    { songname: "Patakha Guddi", filePath: "songs/PatakhaGuddi.mp3", coverPath: "covers/6.jpg" },
    { songname: "Mitwa", filePath: "songs/Mitwa.mp3", coverPath: "covers/7.jpg" },
    { songname: "Mera Yaar", filePath: "songs/MeraYaar.mp3", coverPath: "covers/8.jpg" },
    { songname: "Dildaara", filePath: "songs/Dildaara.mp3", coverPath: "covers/9.jpg" },
];

Array.from(songItems).forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    // Update progress bar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = i; // Use the index of the songItemPlay element
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // Use modulus to loop back to the start
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Use modulus to loop back to the end
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});


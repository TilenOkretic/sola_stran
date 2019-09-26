let song;
let lastInd = 0;
let button;
let s;

function addSong(name) {
  song = createElement('audio').attribute('controls', '').attribute('src', 'audio/' + name + '.mp3').attribute('alt', 'audio/mpeg').parent('wrapper');
}
let info_txt;

function done() {
  song.volume(10);
  song.play();
}

songs = ['New Times, Old Soul', 'Ghost', 'Juno'];

function preload() {
  createDiv('').id("WRAPPER");
  info_txt = loadStrings("info.txt");
  createElement('h1', "Info").parent("wrapper");
  createP(info_txt).parent("wrapper");
  createImg("ntos.jpg").style('text-align', 'left').style('left', '0%').style('width', '250px').style('height', '250px').parent('wrapper');

  addSong("Juno");
}

let c = 0;

function mouseClicked() {
  song.remove();
  if (c == 2) {
    c = 0
  }
  addSong(songs[c++]);
}

function setup() {
  createCanvas(width, height);
}

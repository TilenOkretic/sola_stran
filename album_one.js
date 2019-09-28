let songs = [];
let songz = [];
let lastInd = 0;

function loadSong(name) {
  songz[songz.length] = name;
}

function addSong(name) {
  songs.push(createElement('audio').attribute('controls', '').attribute('src', 'audio/' + name + '.mp3').attribute('alt', 'audio/mpeg').parent('wrapper').hide());
}
let info_txt;

function preload() {
  info_txt = loadStrings("info.txt");
}

function setup() {
  createCanvas(width, height);
  createDiv('').id("WRAPPER");
  createElement('h1', "Info").parent("wrapper");
  createP(info_txt).parent("wrapper");
  createImg("ntos.jpg").style('text-align', 'left').style('left', '0%').style('width', '250px').style('height', '250px').parent('wrapper');


  loadSong("New Times, Old Soul");
  loadSong("Save Me");
  loadSong("Patient Zero");
  loadSong("Fall With Me");
  loadSong("Ghost");
  loadSong("In The Time Of Need");
  loadSong("Juno");
  loadSong("Relinquished");
  loadSong("Perfect Day Under The Bridge");
  loadSong("Dejected Disposition");
  createSongList();


  addSong("New Times, Old Soul");
  addSong("Save Me");
  addSong("Patient Zero");
  addSong("Fall With Me");
  addSong("Ghost");
  addSong("In The Time Of Need");
  addSong("Juno");
  addSong("Relinquished");
  addSong("Perfect Day Under The Bridge");
  addSong("Dejected Disposition");

  songs[0].show();
  selectAll('p')[1].style('color','rgb(205,205,205)');
  selectAll('p')[1].style('background-color','rgb(51,51,51,0.6)');
}

function createSongList() {
  createElement('h1', 'Songs:').parent("wrapper");
  for (var i = 0; i < songz.length; i++) {
    let str =(i + 1) + ". " + songz[i];
    createP(str).id(i).mouseClicked(playSong).style('max-width',str.length + "ch").style('cursor', 'pointer').parent("wrapper");
  }
}

function playSong(arg) {
  songs[lastInd].elt.currentTime = 0;
  songs[lastInd].elt.pause();
  selectAll('p')[int(lastInd) + 1].style('color','black');
  selectAll('p')[int(lastInd) + 1].style('background-color','rgb(0,0,0,0)');
  songs[lastInd].hide();
  songs[arg.srcElement.id].show();
  songs[arg.srcElement.id].elt.play();
  selectAll('p')[int(arg.srcElement.id) + 1].style('color','rgb(205,205,205)');
  selectAll('p')[int(arg.srcElement.id) + 1].style('background-color','rgb(51,51,51,0.6)');
  lastInd = arg.srcElement.id;
}

function Jukebox(){
	var self = this;
	this.playlist = [];
	this.audio = document.getElementById('player');
	this.newSongsInput = document.getElementById('newSongs');
	this.addSong = function(songs){
		this.playlist.push(songs);
	}
	this.getListSongs = function(){
		let song_names = [];
		for (var i = 0; i < this.playlist.length; i++) {
			song_names.push(this.playlist[i].path);
		}
		return song_names;
	}
	this.updateSource = function(source){
		this.audio.src = source;
		this.audio.load();
	};
	this.play = function(){
		this.audio.play();
	};
	this.pause = function(){
		this.audio.pause();
	};
	this.stop = function(){
		this.audio.pause();
		this.audio.currentTime = 0;
	};
}

function Song(path, title){
	this.path = path;
	this.title = title;
};



var jukeboxNew = new Jukebox();
var track = new Song('01-GoingUnder.mp3', 'Going Under');
var track2 = new Song('02-BringMeToLife.mp3', 'Bring me to Life');
var track3 = new Song('03-EverybodysFool.mp3', 'Everybodys Fool');
var track4 = new Song('04-MyLastBreath.mp3', 'My Last Breath');
var track5 = new Song('05-MyImmortal.mp3', 'My Immortal');
jukeboxNew.addSong(track);
jukeboxNew.addSong(track2);
jukeboxNew.addSong(track3);
jukeboxNew.addSong(track4);
jukeboxNew.addSong(track5);


var playbtn = document.getElementById('playBtn');
var pausebtn = document.getElementById('pauseBtn');
var stopbtn = document.getElementById('stopBtn');
playbtn.addEventListener('click', function(play) {
	jukeboxNew.play();
});
pausebtn.addEventListener('click', function(pause) {
	jukeboxNew.pause();
});
stopbtn.addEventListener('click', function(stop) {
	jukeboxNew.stop();
});

var submitbtn = document.getElementById('submit');
var valueElement = document.getElementById('newSongs');
submitbtn.addEventListener('click', function(e){
	e.preventDefault();
	console.log(valueElement.value);
	jukeboxNew.updateSource(valueElement.value);
});


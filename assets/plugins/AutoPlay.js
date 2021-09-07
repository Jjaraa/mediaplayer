function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  player.mute();
  player.play();
};

AutoPlay.alterMute = function (player) {
  player.alterMute();  
}

export default AutoPlay;

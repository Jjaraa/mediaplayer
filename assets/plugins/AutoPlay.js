function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  if(!player.muted) {
    player.muted = true;
  }
  player.play();
};

AutoPlay.alterMute = function (player) {
  player.alterMute();  
}

export default AutoPlay;

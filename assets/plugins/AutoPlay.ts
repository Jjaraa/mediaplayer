import MediaPlayer from '../MediaPlayer.js'

class AutoPlay {
  constructor () { }
  run (player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true
    }
    player.play()
  }

  static alterMute (player) {
    player.alterMute()
  }
}

export default AutoPlay

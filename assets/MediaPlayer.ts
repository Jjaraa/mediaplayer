class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>
  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this.initPlugins()
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this)
    })
  }

  play() {
    this.media.play()
  }

  pause() {
    this.media.pause()
  }

  togglePlay() {
    if (this.media.paused) {
      this.play()
    } else {
      this.pause()
    }

  }
  alterMute() {
    this.media.muted = !this.media.muted
  }
}

export default MediaPlayer

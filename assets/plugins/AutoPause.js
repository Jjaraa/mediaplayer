class AutoPause {
  constructor () {
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run (player) {
    this.player = player

    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold
    })

    observer.observe(this.player.media)

    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  handlerIntersection (entries) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold

    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  handleVisibilityChange () {
    const isVisible = document.visibilityState === 'visible'
    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause

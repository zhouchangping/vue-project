let instance

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.bgmAudio = new Audio()
    this.bgmAudio.loop = true
    this.bgmAudio.src  = require('../audio/bgm.mp3')

    this.shootAudio     = new Audio()
    this.shootAudio.src = require('../audio/bullet.mp3')

    this.boomAudio     = new Audio()
    this.boomAudio.src = require('../audio/boom.mp3')

    this.playBgm()
  }

  playBgm() {
    let playPromise = this.bgmAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // 这个时候可以安全的暂停
        this.bgmAudio.pause();
      })
      .catch(error => {
      });
    }
  }

  playShoot() {
    this.shootAudio.currentTime = 0
    let playPromise = this.shootAudio.play(); // https://www.jackpu.com/jie-jue-xin-ban-ben-chrome-ti-shi-domexception-the-play-request-was-interrupted/
    if (playPromise !== undefined) {
      playPromise.then(_ => { // 因为我们并没有处理 video.play 的 Promise ，然后一个错误的信息会暴露出来。
        // 这个时候可以安全的暂停
        this.shootAudop.pause();
      })
      .catch(error => {
      });
    }
  }

  playExplosion() {
    this.boomAudio.currentTime = 0
    let playPromise = this.boomAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // 这个时候可以安全的暂停
        this.boomAudio.pause();
      })
      .catch(error => {
      });
    }
  }
}

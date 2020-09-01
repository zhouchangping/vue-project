import Player from './player/index' // 
import Enemy from './npc/enemy'
import BackGround from './runtime/background'
import GameInfo from './runtime/gameinfo'
import Music from './runtime/music'
import DataBus from './databus'

// import './libs/weapp-adapter'
import './libs/symbol'
let databus = new DataBus()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0
    this.init();
    this.restart()
  }

  init() {
    this.canvas = document.getElementById('aircraftWar');
    this.ctx = this.canvas.getContext('2d')
  }

  restart() {
    databus.reset() // 清空
    this.canvas.removeEventListener( // 移除事件
      'touchstart',
      this.touchHandler
    )
    this.bg = new BackGround(this.ctx)
    this.player = new Player(this.ctx)
    this.gameinfo = new GameInfo()
    this.music = new Music()

    this.bindLoop = this.loop.bind(this)
    this.hasEventBind = false
    databus.frame = 0

    // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop
    )
  }

  /**
   * 随着帧数变化的敌机生成逻辑
   * 帧数取模定义成生成的频率
   */
  enemyGenerate() {
    if (databus.frame % 30 === 0) {
      let enemy = databus.pool.getItemByClass('enemy', Enemy)
      enemy.init(6)
      databus.enemys.push(enemy)
    }
  }

  // 全局碰撞检测
  collisionDetection() {
    let that = this
    databus.bullets.forEach((bullet) => {
      for (let i = 0, il = databus.enemys.length; i < il; i++) {
        let enemy = databus.enemys[i]
        if (!enemy.isPlaying && enemy.isCollideWith(bullet)) {
          enemy.playAnimation()
          that.music.playExplosion()
          bullet.visible = false
          databus.score += 1
          break
        }
      }
    })

    for (let i = 0, il = databus.enemys.length; i < il; i++) {
      let enemy = databus.enemys[i]

      if (this.player.isCollideWith(enemy)) {
        databus.gameOver = true
        break
      }
    }
  }

  // 游戏结束后的触摸事件处理逻辑
  touchEventHandler(e) {
    e.preventDefault()
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    let area = this.gameinfo.btnArea
    if (x >= area.startX &&
      x <= area.endX &&
      y >= area.startY &&
      y <= area.endY)
      this.restart()
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.bg.render(this.ctx)
    databus.bullets
      .concat(databus.enemys)
      .forEach((item) => {
        item.drawToCanvas(this.ctx)
      })
    this.player.drawToCanvas(this.ctx)
    databus.animations.forEach((ani) => {
      if (ani.isPlaying) {
        ani.aniRender(this.ctx)
      }
    })

    this.gameinfo.renderGameScore(this.ctx, databus.score)

    // 游戏结束停止帧循环
    if (databus.gameOver) {
      this.gameinfo.renderGameOver(this.ctx, databus.score)
      if (!this.hasEventBind) {
        this.hasEventBind = true
        this.touchHandler = this.touchEventHandler.bind(this)
        this.canvas.addEventListener('touchstart', this.touchHandler)
      }
    }
  }

  // 游戏逻辑更新主函数
  update() {
    if (databus.gameOver) {
      return;
    }

    this.bg.update()

    databus.bullets
      .concat(databus.enemys)
      .forEach((item) => {
        item.update()
      })

    this.enemyGenerate()

    this.collisionDetection()

    if (databus.frame % 20 === 0) {
      this.player.shoot()
      this.music.playShoot()
    }
  }

  // 实现游戏帧循环
  loop() {
    databus.frame++

    this.update()
    this.render()

    window.aniId = this.aniId = window.requestAnimationFrame(
      this.bindLoop
    )
  }
}

import string from './css.js'

let id
const demo1 = document.querySelector('#demo1')
const demo2 = document.querySelector('#demo2')

//封装为对象
const player = {
    n: 1,
    time: 50,
    //初始化
    init: () => {
        player.play()
        player.bindEvents()
    },
    bindEvents: () => {
        const hasTable = {
            '#btnPause': player.clear,
            '#btnPlay': player.play,
            '#btnSlow': player.slow,
            '#btnFast': player.fast,
        }
        for (let key in hasTable) {
            document.querySelector(key).onclick = hasTable[key]
        }
        console.log(key);
    },
    run: () => {
        if (player.n > string.length) {
            window.clearInterval(id)
            return
        }
        demo2.innerText = string.substring(0, player.n)
        demo1.innerHTML = string.substring(0, player.n)
        player.n += 1
        //自动控制滚动条
        demo2.scrollTop = demo2.scrollHeight
    },

    play: () => {
        id = setInterval(player.run, player.time)
    },
    clear: () => {
        window.clearInterval(id)
    },
    slow: () => {
        player.clear()
        player.time = 400
        player.play()
    },
    fast: () => {
        player.clear()
        player.time = 0
        player.play()
    }
}

// let run = () => {
//     if (n > string.length) {
//         window.clearInterval(id)
//         return
//     }
//     demo2.innerText = string.substring(0, n)
//     demo1.innerHTML = string.substring(0, n)
//     n += 1
//     //自动控制滚动条
//     demo2.scrollTop = demo2.scrollHeight
// }
// //需要返回计时器的状态
// let play = () => {
//     return setInterval(run, time)
// }
// let clear = () => {
//     window.clearInterval(id)
// }
// //需要函数的返回值(记录状态) 所以加括号
// let id = play()

// // const x =() =>{
// //     run()
// // } x 等价 run 所以setInverval 等价于run

// const slow = () => {
//     clear()
//     time = 400
//     id = play()
// }
// const fast = () => {
//     clear()
//     time = 0
//     id = play()
// }
player.init()

 //run是个函数 不加括号 加了括号就是函数的返回值
// document.querySelector('#btnPlay').onclick = player.play
// document.querySelector('#btnSlow').onclick = player.slow
// document.querySelector('#btnFast').onclick = player.fast
// let n = 1
// demo1.innerHTML = string.substring(0, n)
// demo2.innerText = string.substring(0, n)
// let id = setInterval(() => {
//     n += 1
//     if (n > string.length) {
//         window.clearInterval(id)
//         return
//     }
//     demo1.innerHTML = string.substring(0, n)
//     demo2.innerText = string.substring(0, n)
// }, 0)

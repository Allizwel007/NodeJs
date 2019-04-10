function flashLight(color, time) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('当前时间：' + new Date() + '颜色：' + color)
    }, time)
  })

  return p
}

function test(n) {
  if (n === 0) {
    return
  }
  flashLight('红色', 3000)
    .then(res => {
      console.info(res)
      return flashLight('黄色', 1000)
    })
    .then(res => {
      console.info(res)
      return flashLight('绿色', 1000)
    })
    .then(res => {
      console.info(res)
      return test(n - 1)

    })

}

test(9)
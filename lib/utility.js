

function randArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


module.exports = {
  randArrayItem: randArrayItem
}

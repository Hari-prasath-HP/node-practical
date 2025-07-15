const now = new Date()
let formatted = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`
console.log(now.toLocaleString())
console.log(formatted)      
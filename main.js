let str = `
010-1234-4567
vjrg1647@naver.com
https://www.omdbapi.com/?apikey=4561c87
apple, banana, cream.
car
let me introduce myself.
`

console.log(
  str.match(/.{1,}(?=@)/g)
)

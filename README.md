# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(serch)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-4567
vjrg1647@naver.com
https://www.omdbapi.com/?apikey=4561c87
apple, banana, cream
car
let me introduce myself.
`

//const regexp = new RegExp('com', 'gi')
const regexp = /com/gi
console.log(str.match(regexp))
```

## 메소드

메소드 | 문법 | 설명
-- | -- | --
test | `정규식.test(문자열)` | 일치 여부 (Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
-- | --
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi-line)


## 패턴(표현)

패턴 | 표현
-- | --
^ab | 줄 시작에 있는 ab와 일치
ab$ | 줄 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b 와 일치
ab? |  b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개이라 연속 일치
[abc] | a 또는 b 또는 C
[a-z] | a 부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A 부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0 부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가 부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대,소문자 52개 + 숫자10 개 , _) 에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(boundary)
\d | 숫자에 일치
\s | 공백(space, tab)등 일치
(?=) | 앞쪽 일치(Lookhead)
(?<=) | 뒤쪽 일치(Lookbehind)


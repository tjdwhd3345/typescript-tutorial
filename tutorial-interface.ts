/**
 * typescript의 타입은 내가 원하는모양대로 만들 수 있다.
 * type과 interface 둘다 오브젝트의 모양을 특정하기 위해 사용한다.
 * interface가 type보다 활용할 수 있는게 더 많다.
 * 
 * type을 사용하는 경우 자료형을 만드는 것
 * interface를 사용하는 경우 객체의 명세를 작성한 것으로 보는 것이 바람직해보인다.
 */

// 타입을 concrete가 아닌 특정 값으로 한정지을 때 아래와 같이 사용할 수도 있다.
type Team = 'red' | 'blue' | 'green'
type Player = {
  nickname: string,
  healthBar: number,
}

const mo: Player = {
  nickname: 'mocci',
  healthBar: 100
}

/**
 * interface는 오브젝트의 모양을 타입스크립트에게 설명해주기 위해서만 사용된다.
 * react.js 를 사용할 때 많이 사용함.
 */

interface Player0 {
  nickname: string,
  healthBar: number,
}

const mo1: Player0 = {
  nickname: 'mocci',
  healthBar: 100
}

// =====================================
// interface 와 type 사용 비교
interface User1 {
  name: string
}
interface Player1 extends User1 {

}
const p1: Player1 = {
  name: 'mocci'
}
// 위 아래 두개는 결과가 같다.
type User2 = {
  name: string
}
type Player2 = User2 & {

}
const p2: Player2 = {
  name: 'mocci'
}

/** interface 합치기 (property 쌓기)
 * 아래코드는 타입스크립트가 name, age, height 속성을 갖는 Person 인터페이스 하나로 합쳐서 인식한다
 * */
interface Person {
  name: string
}
interface Person {
  age: number
}
interface Person {
  height: number
}
const mocci: Person = {
  name: 'mocci',
  age: 31,
  height: 170
}
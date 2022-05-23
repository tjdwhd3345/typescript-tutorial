// property의 이름은 모르지만 타입만 정의할 때 쓴다.
type Words = {
  [key: string]: string
}
// let dict: Words = {
//   "potato": "food"
// }

class Dict {
  // 이렇게 선언하면 new 키워드로 인스턴스 생성할 때 words에 대해 따로 지정하지 않아도 된다.
  private words: Words
  constructor() {
    this.words = {}
  }
  // Word class 를 파라미터 타입처럼 사용함
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // term으로 def 받아오기. 반환타입은 타입스크립트가 string으로 알아서 추론함.
  getDef(term: string) {
    if (this.words[term] === undefined) {
      this.notExist(term);
      return;
    }
    return this.words[term];
  }
  // 업데이트
  update(term: string, def: string) {
    if (this.words[term] === undefined) {
      this.notExist(term);
      return;
    }
    this.words[term] = def;
  }
  // 삭제
  delete(term: string) {
    if (this.words[term] === undefined) {
      this.notExist(term);
      return;
    }
    delete this.words[term];
  }
  // 해당 단어 없음을 콘솔로 출력
  notExist(term: string) {
    console.log(`[ ${term} ] 라는 음식은 없음`);
  }
}

class Word {
  constructor( 
    // Word 로 생성한 객체의 변수들을 수정할 수 없게 하려면 readonly를 붙이면 된다.
    public readonly term: string,
    public readonly def: string
  ) {}
}

const kimchi = new Word('kimchi', '한국의 반찬');
const pork = new Word('pork', '삼겹살');
const pizza = new Word('pizza', '아이들이 좋아하는 피자');

const dict = new Dict();
dict.add(kimchi);
dict.add(pork);
dict.add(pizza);
console.log(dict.getDef('kimchi'));
console.log(dict.getDef('pork'));
console.log(dict.getDef('pizza'));
dict.update('pork', '내 소울푸드')
console.log(dict.getDef('pork'));
dict.delete('pizza');
console.log(dict.getDef('pizza'));
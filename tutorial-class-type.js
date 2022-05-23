// let dict: Words = {
//   "potato": "food"
// }
var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    // Word class 를 파라미터 타입처럼 사용함
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    // term으로 def 받아오기. 반환타입은 타입스크립트가 string으로 알아서 추론함.
    Dict.prototype.getDef = function (term) {
        if (this.words[term] === undefined) {
            this.notExist(term);
            return;
        }
        return this.words[term];
    };
    // 업데이트
    Dict.prototype.update = function (term, def) {
        if (this.words[term] === undefined) {
            this.notExist(term);
            return;
        }
        this.words[term] = def;
    };
    // 삭제
    Dict.prototype["delete"] = function (term) {
        if (this.words[term] === undefined) {
            this.notExist(term);
            return;
        }
        delete this.words[term];
    };
    // 해당 단어 없음을 콘솔로 출력
    Dict.prototype.notExist = function (term) {
        console.log("[ ".concat(term, " ] \uB77C\uB294 \uC74C\uC2DD\uC740 \uC5C6\uC74C"));
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(
    // Word 로 생성한 객체의 변수들을 수정할 수 없게 하려면 readonly를 붙이면 된다.
    term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var kimchi = new Word('kimchi', '한국의 반찬');
var pork = new Word('pork', '삼겹살');
var pizza = new Word('pizza', '아이들이 좋아하는 피자');
var dict = new Dict();
dict.add(kimchi);
dict.add(pork);
dict.add(pizza);
console.log(dict.getDef('kimchi'));
console.log(dict.getDef('pork'));
console.log(dict.getDef('pizza'));
dict.update('pork', '내 소울푸드');
console.log(dict.getDef('pork'));
dict["delete"]('pizza');
console.log(dict.getDef('pizza'));

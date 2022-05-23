/**
 * 객체 추상화를 할 때 클래스를 사용할 때와 인터페이스를 사용할 때의 차이점에 대해 알아보자
 */
/**
 * 추상 클래스(abstract class).
 * 
 * 이 클래스를 상속받는 클래스가 가질 `property`와 메소드를 정의해준다.  
 * js는 `abstract`가 없기 때문에 컴파일 시 추상 클래스는 일반 클래스로 변경된다.  
 * 이때, 추상클래스 대신 ***인터페이스***를 사용하면 컴파일 후 코드에 인터페이스는 존재하지 않아 가벼워지고 추가 클래스가 포함되지않는다.
 */
// User 추상클래스를 상속받는 클래스는 추상메소드인 sayHi, fullName 을 구현해야 한다.
abstract class User {
  // protected를 사용해야 상속받은 클래스에서 변수에 접근할 수 있음
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) { }
  abstract sayHi(name: string): string
  abstract fullName(): string
}
// 추상 클래스는 new User 불가
// new User(); // 안됨
class Player extends User {
  sayHi(name: string): string {
    return `Hi!, ${name}. My name is ${this.fullName()}`
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

// =============================
/** 추상 클래스 대신 인터페이스를 사용해보자 */
interface User2 {
  firstName: string,
  lastName: string,
  sayHi(name: string): string,
  fullName(): string
}
interface Human {
  health: number
}
/**
 * - implements을 사용하여 클래스가 특정 인터페이스를 충족하는지 확인할 수 있다  
 * - 클래스를 올바르게 구현하지 못하면 오류가 발생한다  
 * - implements는 해당 클래스가 인터페이스 유형으로 처리될 수 있는지 확인하는 것이다. 클래스의 유형이나 메서드는 전혀 변경하지 않는다
 */
// 인터페이스는 두개 이상 상속받을 수 있음
class Player2 implements User2, Human {
  // interface를 상속하는 경우 변수는 public으로 선언되어야 함
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number,
  ) { }
  sayHi(name: string): string {
    return `Hi!, ${name}. My name is ${this.fullName()}`
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
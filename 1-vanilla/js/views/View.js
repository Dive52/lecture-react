import { emit, on } from "../helpers.js";

const tag = "[View]";

export default class View { // 부모 클래스 View
  constructor(element) {  // View는 DOM API를 직접적으로 사용하기 때문에 이 View가 관리할 엘리멘트를 인자로 받음
    if (!element) throw "no element";   // 없는 경우

    this.element = element;   // 있으면 내부 변수로 관리
    this.originalDisplay = this.element.style.dispaly || "";  // style의 display값으로 제어

    return this;
  }

  hide() {  // 숨기기
    this.element.style.display = "none";
    return this;
  }

  show() {  // 보이기
    this.element.style.display = this.originalDisplay;
    return this;
  }

  // 사용자와 인터렉션
  on(eventName, handler) {    // 이벤트 구독 (이벤트 네임, 이벤트가 발생되었을 때 그 발행될 핸들러) 
    on(this.element, eventName, handler); // on은 this.element에 eventName이 발생하면 handler를 실행해라 라는 함수
    return this;
  }

  emit(eventName, data) {     // 이벤트 발생
    emit(this.element, eventName, data);  // this.element에 eventName라는 이름의 data 이러한 데이터를 갖는 이벤트를 발행해라
    return this;
  }
}

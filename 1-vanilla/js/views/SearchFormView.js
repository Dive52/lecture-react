import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);  // 1. 텍스트 입력창 찾기
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvent(); // 2. 이벤트 바인드 함수 호출
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  // 이벤트 바인드 함수 선언
  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyup());  // inputElement에 키가 눌렸다가 다시 떼지는 이벤트가 발생하면,
  }

  handleKeyup() {
    console.log(tag, 'handle keyup', this.inputElement.value);  // 입력한 값도 콘솔에 출력
    const {value} = this.inputElement;
    this.showResetButton(value.length > 0);
  }
}

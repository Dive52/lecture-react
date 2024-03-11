import { qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view")) // 검색창 객체 가져와서 부모의 생성자 사용하기

    this.resetElement = qs("[type=reset]", this.element);
    this.showResetButton(false);  // 처음에 버튼 숨기기
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
}

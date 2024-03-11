import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvents();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvents() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    this.on("submit", (event) => this.handleSubmit(event));
    // X 버튼에 발생하는 클릭이벤트
    on(this.resetElement, "click", () => this.handleReset());
  }

  handleKeyup(event) {
    const { value } = this.inputElement;
    const keywordLength = value.length;
    this.showResetButton(keywordLength > 0);
  
    if(keywordLength <= 0) {
      this.handleReset();
    }else {
      this.showResetButton(true);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const { value } = this.inputElement;
    this.emit("@submit", { value });
  }

  handleReset() {
    console.log(tag, "handleReset");
    this.emit("@reset");
  }
}

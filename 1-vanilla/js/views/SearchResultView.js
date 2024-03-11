import { qs } from "../helpers.js";
import View from "./View";

export default class SearchResultView extends View {
  constructor() {
    super(qs('#search-result-view')); // 이 element를 내부 요소로 갖음

    this.template = new Template(); // 
  }
  show(data = []) { // 검색된 상품 데이터가 보여짐
    this.element.innerHTML =  // 동적으로 들어갈 html
      data.length > 0 
        ? this.template.getList(data) // 상품 있으면 getList 호출
        : this.template.getEmptyMessage();  // 없으면 검색결과 없음 호출
    super.show(); // 부모의 show() 호출해서 display 값 변경
  }
}

class Template {
  getEmptyMessage() {
    return `
      <div class="empty-box">검색 결과가 없습니다.</div>
    `
  }
  getList(data = []) {
    return `
      <ul class="result">
        ${data.map(this._getItem).join("")}
      </ul>
    `
  }
  _getItem({imageUrl, name}) {
    return `
      <li>
        <img src="${imageUrl}" alt="${name}" />
        <p>${name}</p>
      </li>
    `
  }
}
// 어플리케이션 진입점

import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";

const tag = '[main]'
document.addEventListener("DOMContentLoaded", main);


// MVC 각 객체 초기화
function main() {
  console.log(tag);
  const store = new Store(storage); // Storage 객체 사용하여 Store 생성. 모델 생성.

  const views = { // View를 만듦
    searchFormView: new SearchFormView()
  };

  new Controller(store, views); // 컨트롤러 객체 생성
}

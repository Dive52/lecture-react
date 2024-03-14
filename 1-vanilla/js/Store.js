import { TabType } from "./views/TabView.js";

const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.KEYWORD;
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }

  // 추천 검색어 목록을 스토리지에서 찾아서 반환해주는 메소드
  getKeywordList() {
    return this.storage.keywordData;
  }
}

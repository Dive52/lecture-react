const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchKeyword = ""; // 검색어 저장 초기화
    this.searchResult = [];// 검색 결과 저장 초기화
  }
  
  // 검색어를 DB에서 검색
  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) => 
      product.name.includes(keyword)
    );
  }
}

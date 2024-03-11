const tag = "[store]";

export default class Store {
  constructor(storage) {  // storage.js 가 생성자로 들어옴 -> Model 역할
    console.log(tag);
    if (!storage) throw "no storage"; // 없는 경우

    this.storage = storage; // 있으면 내부 변수로 저장
  }
}

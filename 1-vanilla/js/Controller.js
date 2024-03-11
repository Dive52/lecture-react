// 컨트롤러

const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;
  }
}

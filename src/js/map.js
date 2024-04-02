export default class ErrorRepository {
  constructor() {
    this.errorsStorage = new Map();
  }

  add(code, message) {
    this.errorsStorage.set(code, message);
  }

  translate(code) {
    if (!this.errorsStorage.has(code)) {
      throw new Error('Unknown error.');
    } else {
      return this.errorsStorage.get(code);
    }
  }
}

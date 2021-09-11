import Configstore from "configstore";
import pkg from "../../package.json";

class KeyManager {
  private conf;
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key: string) {
    this.conf.set("apiKey", key);
    return key;
  }
  getKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No API Key found - Get a key at https://nomics.com");
    }
    return key;
  }
  deleteKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No API Key found - Get a key at https://nomics.com");
    }
    this.conf.delete("apiKey");
    return;
  }
}

export default KeyManager;

import Configstore from "configstore";
class KeyManager {
    conf;
    constructor() {
        this.conf = new Configstore("cryptodex");
    }
    setKey(key) {
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

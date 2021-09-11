"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configstore_1 = __importDefault(require("configstore"));
class KeyManager {
    constructor() {
        this.conf = new configstore_1.default("cryptodex");
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
exports.default = KeyManager;

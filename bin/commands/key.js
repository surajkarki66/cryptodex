"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const validation_1 = __importDefault(require("../utils/validation"));
const KeyManager_1 = __importDefault(require("../lib/KeyManager"));
// tslint:disable-next-line: no-console
const log = console.log;
const key = {
    set() {
        return __awaiter(this, void 0, void 0, function* () {
            const keyManager = new KeyManager_1.default();
            const input = yield inquirer_1.default.prompt([
                {
                    type: "input",
                    name: "key",
                    message: "Enter API Key https://nomics.com",
                    validate: validation_1.default.isRequired,
                },
            ]);
            // tslint:disable-next-line: no-shadowed-variable
            const key = keyManager.setKey(input.key);
            if (key) {
                log(chalk_1.default.blue("API Key is set"));
            }
        });
    },
    show() {
        try {
            const keyManager = new KeyManager_1.default();
            // tslint:disable-next-line: no-shadowed-variable
            const key = keyManager.getKey();
            log("Current API Key: ", chalk_1.default.green(key));
            return key;
        }
        catch (e) {
            log(chalk_1.default.red(e.message));
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager_1.default();
            keyManager.deleteKey();
            log(chalk_1.default.blue("Key Removed"));
            return;
        }
        catch (e) {
            log(chalk_1.default.red(e.message));
        }
    },
};
exports.default = key;

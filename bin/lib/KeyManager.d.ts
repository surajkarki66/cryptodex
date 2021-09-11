declare class KeyManager {
    private conf;
    constructor();
    setKey(key: string): string;
    getKey(): any;
    deleteKey(): void;
}
export default KeyManager;

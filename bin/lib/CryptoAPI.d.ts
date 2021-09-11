declare class CryptoAPI {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    getPriceData(coinOption: string, curOption: string): Promise<string | undefined>;
}
export default CryptoAPI;

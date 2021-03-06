"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LokaliseApi = void 0;
const api_methods_1 = require("./api_methods");
let LokaliseApi = /** @class */ (() => {
    class LokaliseApi extends api_methods_1.LocaliseApiMethods {
        /**
         * Instantiate LokaliseApi to have access to methods
         * @param params  object, mandaratory
         * @returns       LokaliseApi object to work with.
         */
        constructor(params = {}) {
            super();
            LokaliseApi.apiKey = params["apiKey"];
            if (LokaliseApi.apiKey == null || LokaliseApi.apiKey.length == 0) {
                throw new Error("Error: Instantiation failed: Please pass an API key");
            }
            return this;
        }
    }
    LokaliseApi.apiKey = null;
    return LokaliseApi;
})();
exports.LokaliseApi = LokaliseApi;
//# sourceMappingURL=lokalise.js.map
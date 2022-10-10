"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFilter = exports.Resource = exports.Database = void 0;
const database_1 = __importDefault(require("./src/database"));
exports.Database = database_1.default;
const resource_1 = __importDefault(require("./src/resource"));
exports.Resource = resource_1.default;
const src_1 = require("./src");
Object.defineProperty(exports, "convertFilter", { enumerable: true, get: function () { return src_1.convertFilter; } });
module.exports = { Database: database_1.default, Resource: resource_1.default, convertFilter: src_1.convertFilter };
//# sourceMappingURL=index.js.map
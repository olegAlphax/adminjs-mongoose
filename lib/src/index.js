"use strict";
/**
 * @module @adminjs/mongoose
 * @subcategory Adapters
 * @section modules
 * @load ./index.doc.md
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFilter = exports.Database = exports.Resource = void 0;
var resource_1 = require("./resource");
Object.defineProperty(exports, "Resource", { enumerable: true, get: function () { return __importDefault(resource_1).default; } });
var database_1 = require("./database");
Object.defineProperty(exports, "Database", { enumerable: true, get: function () { return __importDefault(database_1).default; } });
var convert_filter_1 = require("./utils/convert-filter");
Object.defineProperty(exports, "convertFilter", { enumerable: true, get: function () { return convert_filter_1.convertFilter; } });
//# sourceMappingURL=index.js.map
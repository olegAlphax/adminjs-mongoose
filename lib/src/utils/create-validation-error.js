"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidationError = void 0;
const adminjs_1 = require("adminjs");
const createValidationError = (originalError) => {
    const errors = Object.keys(originalError.errors).reduce((memo, key) => {
        const { message, kind, name } = originalError.errors[key];
        return {
            ...memo,
            [key]: {
                message,
                type: kind || name,
            },
        };
    }, {});
    return new adminjs_1.ValidationError(errors);
};
exports.createValidationError = createValidationError;
//# sourceMappingURL=create-validation-error.js.map
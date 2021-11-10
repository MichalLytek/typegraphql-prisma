"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = void 0;
var Prisma;
(function (Prisma) {
    /**
     * Utility Types
     */
    // Decimal.js mock
    class Decimal {
        constructor(...arg) { }
        static isDecimal(object) {
            return true;
        }
    }
    Prisma.Decimal = Decimal;
})(Prisma = exports.Prisma || (exports.Prisma = {}));

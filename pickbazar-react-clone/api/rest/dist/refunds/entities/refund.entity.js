"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = exports.RefundStatus = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
var RefundStatus;
(function (RefundStatus) {
    RefundStatus["APPROVED"] = "Approved";
    RefundStatus["PENDING"] = "Pending";
    RefundStatus["REJECTED"] = "Rejected";
    RefundStatus["PROCESSING"] = "Processing";
})(RefundStatus = exports.RefundStatus || (exports.RefundStatus = {}));
class Refund extends core_entity_1.CoreEntity {
}
exports.Refund = Refund;

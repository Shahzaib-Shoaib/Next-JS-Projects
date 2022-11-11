"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawStatus = exports.Withdraw = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
class Withdraw extends core_entity_1.CoreEntity {
}
exports.Withdraw = Withdraw;
var WithdrawStatus;
(function (WithdrawStatus) {
    WithdrawStatus["APPROVED"] = "Approved";
    WithdrawStatus["PENDING"] = "Pending";
    WithdrawStatus["ON_HOLD"] = "On hold";
    WithdrawStatus["REJECTED"] = "Rejected";
    WithdrawStatus["PROCESSING"] = "Processing";
})(WithdrawStatus = exports.WithdrawStatus || (exports.WithdrawStatus = {}));

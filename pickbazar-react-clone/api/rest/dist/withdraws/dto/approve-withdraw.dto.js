"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveWithdrawDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const withdraw_entity_1 = require("../entities/withdraw.entity");
class ApproveWithdrawDto extends (0, swagger_1.PickType)(withdraw_entity_1.Withdraw, ['id', 'status']) {
}
exports.ApproveWithdrawDto = ApproveWithdrawDto;

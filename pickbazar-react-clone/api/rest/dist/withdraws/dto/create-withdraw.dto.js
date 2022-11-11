"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWithdrawDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const withdraw_entity_1 = require("../entities/withdraw.entity");
class CreateWithdrawDto extends (0, swagger_1.PickType)(withdraw_entity_1.Withdraw, [
    'amount',
    'note',
    'details',
    'payment_method',
    'shop_id',
]) {
}
exports.CreateWithdrawDto = CreateWithdrawDto;

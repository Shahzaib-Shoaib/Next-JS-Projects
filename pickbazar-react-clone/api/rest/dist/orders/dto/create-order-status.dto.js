"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderStatusDto = exports.CreateOrderStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const order_status_entity_1 = require("../entities/order-status.entity");
class CreateOrderStatusDto extends (0, swagger_1.PickType)(order_status_entity_1.OrderStatus, [
    'name',
    'color',
    'serial',
    'language',
]) {
}
exports.CreateOrderStatusDto = CreateOrderStatusDto;
class UpdateOrderStatusDto extends (0, swagger_1.PartialType)(CreateOrderStatusDto) {
}
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;
//# sourceMappingURL=create-order-status.dto.js.map
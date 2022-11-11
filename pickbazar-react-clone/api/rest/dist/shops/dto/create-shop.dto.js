"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveShopDto = exports.CreateShopDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const shop_entity_1 = require("../entities/shop.entity");
class CreateShopDto extends (0, swagger_1.PickType)(shop_entity_1.Shop, [
    'name',
    'address',
    'description',
    'cover_image',
    'logo',
    'settings',
    'balance',
]) {
}
exports.CreateShopDto = CreateShopDto;
class ApproveShopDto {
}
exports.ApproveShopDto = ApproveShopDto;

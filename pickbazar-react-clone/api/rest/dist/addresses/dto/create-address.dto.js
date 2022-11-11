"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const address_entity_1 = require("../entities/address.entity");
class CreateAddressDto extends (0, swagger_1.PickType)(address_entity_1.Address, [
    'title',
    'type',
    'default',
    'address',
]) {
}
exports.CreateAddressDto = CreateAddressDto;

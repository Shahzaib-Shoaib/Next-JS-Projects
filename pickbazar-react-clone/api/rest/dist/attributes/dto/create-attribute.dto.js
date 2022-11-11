"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeValueDto = exports.CreateAttributeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const attribute_entity_1 = require("../entities/attribute.entity");
class CreateAttributeDto extends (0, swagger_1.PickType)(attribute_entity_1.Attribute, [
    'name',
    'shop_id',
    'language',
]) {
}
exports.CreateAttributeDto = CreateAttributeDto;
class AttributeValueDto {
}
exports.AttributeValueDto = AttributeValueDto;
//# sourceMappingURL=create-attribute.dto.js.map
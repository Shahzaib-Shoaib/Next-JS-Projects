"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const product_entity_1 = require("../entities/product.entity");
class CreateProductDto extends (0, swagger_1.OmitType)(product_entity_1.Product, [
    'id',
    'slug',
    'created_at',
    'updated_at',
    'orders',
    'pivot',
    'shop',
    'categories',
    'tags',
    'type',
    'related_products',
    'translated_languages',
]) {
}
exports.CreateProductDto = CreateProductDto;

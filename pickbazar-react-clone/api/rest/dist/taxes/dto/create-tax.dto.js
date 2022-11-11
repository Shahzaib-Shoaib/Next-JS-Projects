"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaxDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const tax_entity_1 = require("../entities/tax.entity");
class CreateTaxDto extends (0, swagger_1.OmitType)(tax_entity_1.Tax, [
    'id',
    'created_at',
    'updated_at',
]) {
}
exports.CreateTaxDto = CreateTaxDto;

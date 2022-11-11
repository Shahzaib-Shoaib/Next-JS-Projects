"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const setting_entity_1 = require("../entities/setting.entity");
class CreateSettingDto extends (0, swagger_1.OmitType)(setting_entity_1.Setting, [
    'created_at',
    'updated_at',
]) {
}
exports.CreateSettingDto = CreateSettingDto;

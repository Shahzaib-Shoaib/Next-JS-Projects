"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
class User extends core_entity_1.CoreEntity {
    constructor() {
        super(...arguments);
        this.is_active = true;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map
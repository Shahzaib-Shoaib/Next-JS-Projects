"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = exports.Address = exports.AddressType = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
var AddressType;
(function (AddressType) {
    AddressType["BILLING"] = "billing";
    AddressType["SHIPPING"] = "shipping";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
class Address extends core_entity_1.CoreEntity {
}
exports.Address = Address;
class UserAddress {
}
exports.UserAddress = UserAddress;
//# sourceMappingURL=address.entity.js.map
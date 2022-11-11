"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingType = exports.Shipping = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
class Shipping extends core_entity_1.CoreEntity {
}
exports.Shipping = Shipping;
var ShippingType;
(function (ShippingType) {
    ShippingType["FIXED"] = "fixed";
    ShippingType["PERCENTAGE"] = "percentage";
    ShippingType["FREE"] = "free";
})(ShippingType = exports.ShippingType || (exports.ShippingType = {}));

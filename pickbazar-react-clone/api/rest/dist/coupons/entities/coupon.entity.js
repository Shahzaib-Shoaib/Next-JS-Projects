"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = exports.CouponType = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
var CouponType;
(function (CouponType) {
    CouponType["FIXED_COUPON"] = "fixed";
    CouponType["PERCENTAGE_COUPON"] = "percentage";
    CouponType["FREE_SHIPPING_COUPON"] = "free_shipping";
    CouponType["DEFAULT_COUPON"] = "fixed";
})(CouponType = exports.CouponType || (exports.CouponType = {}));
class Coupon extends core_entity_1.CoreEntity {
}
exports.Coupon = Coupon;
//# sourceMappingURL=coupon.entity.js.map
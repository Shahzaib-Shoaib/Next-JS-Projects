"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFiles = exports.Order = exports.PaymentGatewayType = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
var PaymentGatewayType;
(function (PaymentGatewayType) {
    PaymentGatewayType["STRIPE"] = "stripe";
    PaymentGatewayType["CASH_ON_DELIVERY"] = "cod";
})(PaymentGatewayType = exports.PaymentGatewayType || (exports.PaymentGatewayType = {}));
class Order extends core_entity_1.CoreEntity {
}
exports.Order = Order;
class OrderFiles extends core_entity_1.CoreEntity {
}
exports.OrderFiles = OrderFiles;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.VariationOption = exports.Variation = exports.OrderProductPivot = exports.Product = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["PUBLISH"] = "publish";
    ProductStatus["DRAFT"] = "draft";
})(ProductStatus || (ProductStatus = {}));
var ProductType;
(function (ProductType) {
    ProductType["SIMPLE"] = "simple";
    ProductType["VARIABLE"] = "variable";
})(ProductType || (ProductType = {}));
class Product extends core_entity_1.CoreEntity {
}
exports.Product = Product;
class OrderProductPivot {
}
exports.OrderProductPivot = OrderProductPivot;
class Variation {
}
exports.Variation = Variation;
class VariationOption {
}
exports.VariationOption = VariationOption;
class File extends core_entity_1.CoreEntity {
}
exports.File = File;
//# sourceMappingURL=product.entity.js.map
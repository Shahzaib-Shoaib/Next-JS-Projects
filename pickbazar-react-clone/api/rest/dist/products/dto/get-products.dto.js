"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductsOrderByColumn = exports.GetProductsDto = exports.ProductPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ProductPaginator extends paginator_dto_1.Paginator {
}
exports.ProductPaginator = ProductPaginator;
class GetProductsDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetProductsDto = GetProductsDto;
var QueryProductsOrderByColumn;
(function (QueryProductsOrderByColumn) {
    QueryProductsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryProductsOrderByColumn["NAME"] = "NAME";
    QueryProductsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryProductsOrderByColumn = exports.QueryProductsOrderByColumn || (exports.QueryProductsOrderByColumn = {}));

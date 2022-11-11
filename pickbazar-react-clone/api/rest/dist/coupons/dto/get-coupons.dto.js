"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCouponsOrderByColumn = exports.GetCouponsDto = exports.CouponPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class CouponPaginator extends paginator_dto_1.Paginator {
}
exports.CouponPaginator = CouponPaginator;
class GetCouponsDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetCouponsDto = GetCouponsDto;
var QueryCouponsOrderByColumn;
(function (QueryCouponsOrderByColumn) {
    QueryCouponsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryCouponsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryCouponsOrderByColumn["CODE"] = "CODE";
    QueryCouponsOrderByColumn["AMOUNT"] = "AMOUNT";
    QueryCouponsOrderByColumn["EXPIRE_AT"] = "EXPIRE_AT";
})(QueryCouponsOrderByColumn = exports.QueryCouponsOrderByColumn || (exports.QueryCouponsOrderByColumn = {}));

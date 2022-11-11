"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOrderStatusesOrderByColumn = exports.GetOrderStatusesDto = exports.OrderStatusPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class OrderStatusPaginator extends paginator_dto_1.Paginator {
}
exports.OrderStatusPaginator = OrderStatusPaginator;
class GetOrderStatusesDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetOrderStatusesDto = GetOrderStatusesDto;
var QueryOrderStatusesOrderByColumn;
(function (QueryOrderStatusesOrderByColumn) {
    QueryOrderStatusesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryOrderStatusesOrderByColumn["NAME"] = "NAME";
    QueryOrderStatusesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryOrderStatusesOrderByColumn["SERIAL"] = "SERIAL";
})(QueryOrderStatusesOrderByColumn = exports.QueryOrderStatusesOrderByColumn || (exports.QueryOrderStatusesOrderByColumn = {}));
//# sourceMappingURL=get-order-statuses.dto.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOrderFilesOrderByColumn = exports.GetOrderFilesDto = exports.OrderFilesPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class OrderFilesPaginator extends paginator_dto_1.Paginator {
}
exports.OrderFilesPaginator = OrderFilesPaginator;
class GetOrderFilesDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetOrderFilesDto = GetOrderFilesDto;
var QueryOrderFilesOrderByColumn;
(function (QueryOrderFilesOrderByColumn) {
    QueryOrderFilesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryOrderFilesOrderByColumn["NAME"] = "NAME";
    QueryOrderFilesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryOrderFilesOrderByColumn = exports.QueryOrderFilesOrderByColumn || (exports.QueryOrderFilesOrderByColumn = {}));
//# sourceMappingURL=get-downloads.dto.js.map
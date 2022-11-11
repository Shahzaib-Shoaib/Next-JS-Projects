"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrdersDto = exports.OrderPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class OrderPaginator extends paginator_dto_1.Paginator {
}
exports.OrderPaginator = OrderPaginator;
class GetOrdersDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetOrdersDto = GetOrdersDto;

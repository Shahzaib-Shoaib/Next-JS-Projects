"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopsDto = exports.ShopPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ShopPaginator extends paginator_dto_1.Paginator {
}
exports.ShopPaginator = ShopPaginator;
class GetShopsDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetShopsDto = GetShopsDto;

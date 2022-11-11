"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWithdrawsDto = exports.WithdrawPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class WithdrawPaginator extends paginator_dto_1.Paginator {
}
exports.WithdrawPaginator = WithdrawPaginator;
class GetWithdrawsDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetWithdrawsDto = GetWithdrawsDto;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUsersOrderByColumn = exports.GetUsersDto = exports.UserPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class UserPaginator extends paginator_dto_1.Paginator {
}
exports.UserPaginator = UserPaginator;
class GetUsersDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetUsersDto = GetUsersDto;
var QueryUsersOrderByColumn;
(function (QueryUsersOrderByColumn) {
    QueryUsersOrderByColumn["NAME"] = "name";
    QueryUsersOrderByColumn["CREATED_AT"] = "created_at";
    QueryUsersOrderByColumn["UPDATED_AT"] = "updated_at";
    QueryUsersOrderByColumn["IS_ACTIVE"] = "IS_ACTIVE";
})(QueryUsersOrderByColumn = exports.QueryUsersOrderByColumn || (exports.QueryUsersOrderByColumn = {}));
//# sourceMappingURL=get-users.dto.js.map
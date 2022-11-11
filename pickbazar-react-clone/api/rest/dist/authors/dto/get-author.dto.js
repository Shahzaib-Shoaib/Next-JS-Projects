"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuthorsOrderByColumn = exports.GetAuthorDto = exports.AuthorPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class AuthorPaginator extends paginator_dto_1.Paginator {
}
exports.AuthorPaginator = AuthorPaginator;
class GetAuthorDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetAuthorDto = GetAuthorDto;
var QueryAuthorsOrderByColumn;
(function (QueryAuthorsOrderByColumn) {
    QueryAuthorsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryAuthorsOrderByColumn["NAME"] = "NAME";
    QueryAuthorsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryAuthorsOrderByColumn = exports.QueryAuthorsOrderByColumn || (exports.QueryAuthorsOrderByColumn = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTagsOrderByColumn = exports.GetTagsDto = exports.TagPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class TagPaginator extends paginator_dto_1.Paginator {
}
exports.TagPaginator = TagPaginator;
class GetTagsDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetTagsDto = GetTagsDto;
var QueryTagsOrderByColumn;
(function (QueryTagsOrderByColumn) {
    QueryTagsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTagsOrderByColumn["NAME"] = "NAME";
    QueryTagsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryTagsOrderByColumn = exports.QueryTagsOrderByColumn || (exports.QueryTagsOrderByColumn = {}));

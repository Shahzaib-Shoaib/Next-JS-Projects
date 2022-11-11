"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCategoriesOrderByColumn = exports.GetCategoriesDto = exports.CategoryPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class CategoryPaginator extends paginator_dto_1.Paginator {
}
exports.CategoryPaginator = CategoryPaginator;
class GetCategoriesDto extends pagination_args_dto_1.PaginationArgs {
    constructor() {
        super(...arguments);
        this.parent = 'null';
    }
}
exports.GetCategoriesDto = GetCategoriesDto;
var QueryCategoriesOrderByColumn;
(function (QueryCategoriesOrderByColumn) {
    QueryCategoriesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryCategoriesOrderByColumn["NAME"] = "NAME";
    QueryCategoriesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryCategoriesOrderByColumn = exports.QueryCategoriesOrderByColumn || (exports.QueryCategoriesOrderByColumn = {}));

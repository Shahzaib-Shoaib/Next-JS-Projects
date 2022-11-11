"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryManufacturersOrderByColumn = exports.GetManufacturersDto = exports.ManufacturerPaginator = void 0;
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ManufacturerPaginator extends paginator_dto_1.Paginator {
}
exports.ManufacturerPaginator = ManufacturerPaginator;
class GetManufacturersDto extends pagination_args_dto_1.PaginationArgs {
}
exports.GetManufacturersDto = GetManufacturersDto;
var QueryManufacturersOrderByColumn;
(function (QueryManufacturersOrderByColumn) {
    QueryManufacturersOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryManufacturersOrderByColumn["NAME"] = "NAME";
    QueryManufacturersOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryManufacturersOrderByColumn = exports.QueryManufacturersOrderByColumn || (exports.QueryManufacturersOrderByColumn = {}));

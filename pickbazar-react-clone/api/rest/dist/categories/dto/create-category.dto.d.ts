import { Category } from '../entities/category.entity';
declare const CreateCategoryDto_base: import("@nestjs/common").Type<Pick<Category, "language" | "name" | "image" | "type" | "details" | "icon" | "parent">>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export {};

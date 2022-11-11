import { Category } from '../entities/category.entity';
declare const CreateCategoryDto_base: import("@nestjs/common").Type<Pick<Category, "name" | "type" | "details" | "parent" | "icon" | "image" | "language">>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export {};

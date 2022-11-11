import { Product } from '../entities/product.entity';
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "id" | "slug" | "created_at" | "updated_at" | "orders" | "pivot" | "shop" | "categories" | "tags" | "type" | "related_products" | "translated_languages">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};

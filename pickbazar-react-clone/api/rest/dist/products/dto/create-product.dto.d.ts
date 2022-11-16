import { Product } from '../entities/product.entity';
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "created_at" | "updated_at" | "tags" | "id" | "slug" | "type" | "translated_languages" | "shop" | "orders" | "pivot" | "categories" | "related_products">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};

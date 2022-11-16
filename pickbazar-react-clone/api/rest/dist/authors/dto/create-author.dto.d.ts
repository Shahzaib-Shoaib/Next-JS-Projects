import { Author } from '../entities/author.entity';
declare const CreateAuthorDto_base: import("@nestjs/common").Type<Omit<Author, "id" | "slug" | "name" | "cover_image" | "image" | "products_count" | "socials" | "translated_languages" | "bio" | "born" | "death" | "languages" | "quote">>;
export declare class CreateAuthorDto extends CreateAuthorDto_base {
    shop_id?: string;
}
export {};

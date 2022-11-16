import { Manufacturer } from '../entities/manufacturer.entity';
declare const CreateManufacturerDto_base: import("@nestjs/common").Type<Omit<Manufacturer, "id" | "slug" | "name" | "cover_image" | "description" | "image" | "products_count" | "socials" | "type" | "type_id" | "website" | "translated_languages">>;
export declare class CreateManufacturerDto extends CreateManufacturerDto_base {
    shop_id?: string;
}
export {};

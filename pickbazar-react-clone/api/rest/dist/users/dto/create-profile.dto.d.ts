import { Profile } from '../entities/profile.entity';
declare const CreateProfileDto_base: import("@nestjs/common").Type<Pick<Profile, "socials" | "bio" | "avatar" | "contact">>;
export declare class CreateProfileDto extends CreateProfileDto_base {
    customer: ConnectBelongsTo;
}
export declare class ConnectBelongsTo {
    connect: number;
}
export {};

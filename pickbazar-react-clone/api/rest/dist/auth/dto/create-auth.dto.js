"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpLoginDto = exports.OtpDto = exports.OtpResponse = exports.VerifyOtpDto = exports.CoreResponse = exports.AuthResponse = exports.ResetPasswordDto = exports.VerifyForgetPasswordDto = exports.ForgetPasswordDto = exports.ChangePasswordDto = exports.SocialLoginDto = exports.LoginDto = exports.RegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const core_mutation_output_dto_1 = require("../../common/dto/core-mutation-output.dto");
const user_entity_1 = require("../../users/entities/user.entity");
var Permission;
(function (Permission) {
    Permission["SUPER_ADMIN"] = "Super admin";
    Permission["STORE_OWNER"] = "Store owner";
    Permission["STAFF"] = "Staff";
    Permission["CUSTOMER"] = "Customer";
})(Permission || (Permission = {}));
class RegisterDto extends (0, swagger_1.PickType)(user_entity_1.User, ['name', 'email', 'password']) {
    constructor() {
        super(...arguments);
        this.permission = Permission.CUSTOMER;
    }
}
exports.RegisterDto = RegisterDto;
class LoginDto extends (0, swagger_1.PartialType)((0, swagger_1.PickType)(user_entity_1.User, ['email', 'password'])) {
}
exports.LoginDto = LoginDto;
class SocialLoginDto {
}
exports.SocialLoginDto = SocialLoginDto;
class ChangePasswordDto {
}
exports.ChangePasswordDto = ChangePasswordDto;
class ForgetPasswordDto {
}
exports.ForgetPasswordDto = ForgetPasswordDto;
class VerifyForgetPasswordDto {
}
exports.VerifyForgetPasswordDto = VerifyForgetPasswordDto;
class ResetPasswordDto {
}
exports.ResetPasswordDto = ResetPasswordDto;
class AuthResponse {
}
exports.AuthResponse = AuthResponse;
class CoreResponse extends core_mutation_output_dto_1.CoreMutationOutput {
}
exports.CoreResponse = CoreResponse;
class VerifyOtpDto {
}
exports.VerifyOtpDto = VerifyOtpDto;
class OtpResponse {
}
exports.OtpResponse = OtpResponse;
class OtpDto {
}
exports.OtpDto = OtpDto;
class OtpLoginDto {
}
exports.OtpLoginDto = OtpLoginDto;

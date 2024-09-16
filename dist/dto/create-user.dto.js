var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, IsEmail, Length, Matches, IsStrongPassword, IsOptional, } from "class-validator";
export class CreateUserDto {
    username;
    email;
    full_name;
    password;
    role;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    Length(1, 20),
    Matches(/^\S*$/, { message: "Username should not contain spaces" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    IsEmail(),
    IsNotEmpty(),
    Length(1, 50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    Length(1, 50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "full_name", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    Length(8, 32),
    IsStrongPassword(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    IsString(),
    Length(1, 20),
    IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);

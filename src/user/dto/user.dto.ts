import { IsEmail, IsNotEmpty, IsString } from "class-validator";

//esta es la interfaz usada para tipar los datos que envia el cliente al servidor

export class UserDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @IsNotEmpty()
    @IsString()
    readonly username: string;
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    readonly password: string;
} 
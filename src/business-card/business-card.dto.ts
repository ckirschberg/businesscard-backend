import { IsEmail, IsNotEmpty } from "class-validator";

export class BusinessCardDto {
  
    @IsNotEmpty()
    name: string;

    title: string;

    // @IsNotEmpty()
    @IsEmail()
    email: string;
  
    about: string;
  
    interests: string
}
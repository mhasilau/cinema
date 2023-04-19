import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail(undefined, { message: 'wrong email' })
  email: string;

  @Length(6, 20, { message: 'password must be from 6 to 20 characters' })
  password?: string;
}

import { CreateUser } from './interface/user.interface';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto implements CreateUser {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly name: string;

  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @Matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,64}$/)
  readonly password: string;

  @IsString()
  readonly refreshToken: string;

  @Matches(/^user$/)
  readonly role: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(6, 30)
  @ApiProperty()
  first_name: string;

  @IsString()
  @Length(6, 30)
  @ApiProperty()
  last_name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @Length(4, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password must have one letter UpperCase, one special Character, one Number 0-9',
  })
  @ApiProperty()
  password: string;

}
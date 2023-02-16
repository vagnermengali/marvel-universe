import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Matches,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Length(6, 30)
  @ApiProperty()
  @IsOptional()
  first_name: string;

  @IsString()
  @Length(6, 30)
  @ApiProperty()
  @IsOptional()
  last_name: string;

  @IsEmail()
  @ApiProperty()
  @IsOptional()
  email: string;

  @IsString()
  @Length(4, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password must have one letter UpperCase, one special Character, one Number 0-9',
  })
  @ApiProperty()
  @IsOptional()
  password: string;

}

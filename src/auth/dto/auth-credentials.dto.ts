import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

// From https://gist.github.com/arielweinberger/18a29bfa17072444d45adaeeb8e92ddc
// - Passwords will contain at least 1 upper case letter
// - Passwords will contain at least 1 lower case letter
// - Passwords will contain at least 1 number or special character
// - There is no length validation (min, max) in this regex!
const passwordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(passwordRegex, { message: 'password too weak' })
  password: string;
}

import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTrademarkDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsOptional()
  readonly word: string;

  @IsString()
  @IsOptional()
  readonly trademarkName: string;

  @IsString()
  @IsOptional()
  readonly logo: string;
}

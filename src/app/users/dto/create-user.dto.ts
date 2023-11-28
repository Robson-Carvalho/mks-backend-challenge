import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegExHelper } from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
  })
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário',
    type: String,
  })
  readonly email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, {
    message:
      'A senha precisa de números, letras maiúsculas, minúscilas e caracteres especiais',
  })
  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
  })
  readonly password: string;
}

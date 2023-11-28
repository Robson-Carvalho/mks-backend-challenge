import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateMovieDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Título do filme',
    type: String,
  })
  readonly title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do filme',
    type: String,
  })
  readonly description?: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Ano do filme',
    type: Number,
  })
  readonly year?: number;
}

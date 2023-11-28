import { IsNotEmpty } from 'class-validator';

export class UpdateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description?: string;

  @IsNotEmpty()
  year?: number;
}

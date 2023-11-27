import { IsNotEmpty } from 'class-validator';

export class ResponseCreateUserDto {
  @IsNotEmpty()
  id: string;

  name?: string;

  email?: string;

  createdAt?: string;

  updatedAt?: string;

  deletedAt?: string;
}

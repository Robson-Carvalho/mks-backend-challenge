import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@UseGuards(AuthGuard)
@Controller('api/v1/movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Post()
  async create(@Body() movie: CreateMovieDto): Promise<Movie> {
    return this.movieService.create(movie);
  }

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() movie: UpdateMovieDto,
  ): Promise<Movie> {
    return this.movieService.update(id, movie);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.movieService.delete(id);
  }
}

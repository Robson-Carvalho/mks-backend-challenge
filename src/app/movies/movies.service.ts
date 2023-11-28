import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './schema/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne({ where: { id } });
  }

  async create(movie: CreateMovieDto): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  async update(id: string, movie: UpdateMovieDto): Promise<Movie> {
    await this.movieRepository.update(id, movie);
    return this.movieRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}

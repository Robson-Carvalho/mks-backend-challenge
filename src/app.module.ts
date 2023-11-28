import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './app/users/users.module';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './app/movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () =>
        ({
          type: 'postgres',
          host: process.env.RAILWAY_PG_HOST,
          port: parseInt(process.env.RAILWAY_PG_PORT, 10),
          username: process.env.RAILWAY_PG_USER,
          password: process.env.RAILWAY_PG_PASSWORD,
          database: process.env.RAILWAY_PG_DB,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        }) as TypeOrmModuleOptions,
    }),
    UsersModule,
    AuthModule,
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

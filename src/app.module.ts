import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './api/user/entities/user.entity';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'cinema',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

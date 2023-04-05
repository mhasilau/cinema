import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { ReviewsModule } from './reviews/reviews.module';
import { SitsModule } from './sits/sits.module';
import { UsersModule } from './users/users.module';
import { PreviewsModule } from './previews/previews.module';

@Module({
  imports: [FilmsModule, ReviewsModule, SitsModule, UsersModule, PreviewsModule],
})
export class ApiModule {}

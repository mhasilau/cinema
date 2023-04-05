import { Module } from '@nestjs/common';
import { PreviewsController } from './previews.controller';

@Module({
  controllers: [PreviewsController]
})
export class PreviewsModule {}

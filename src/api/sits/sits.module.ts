import { Module } from '@nestjs/common';
import { SitsController } from './sits.controller';

@Module({
  controllers: [SitsController]
})
export class SitsModule {}

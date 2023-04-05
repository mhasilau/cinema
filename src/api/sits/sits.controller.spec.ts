import { Test, TestingModule } from '@nestjs/testing';
import { SitsController } from './sits.controller';

describe('SitsController', () => {
  let controller: SitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SitsController],
    }).compile();

    controller = module.get<SitsController>(SitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

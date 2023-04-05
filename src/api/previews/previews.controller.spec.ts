import { Test, TestingModule } from '@nestjs/testing';
import { PreviewsController } from './previews.controller';

describe('PreviewsController', () => {
  let controller: PreviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreviewsController],
    }).compile();

    controller = module.get<PreviewsController>(PreviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

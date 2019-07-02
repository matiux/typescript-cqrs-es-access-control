import { Test, TestingModule } from '@nestjs/testing';
import { BuildingController } from '../../../../../../src/building/infrastructure/delivery/http/controller/building-controller';
import { AppService } from '../../../../../../src/app.service';

describe('BuildingController', () => {
  let buildingController: BuildingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BuildingController],
      providers: [AppService],
    }).compile();

    buildingController = app.get<BuildingController>(BuildingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(buildingController.getHello()).toBe('Hello Mat');
    });
  });
});

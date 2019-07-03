import {Test, TestingModule} from '@nestjs/testing';
import {BuildingController} from '../../../../../../src/building/infrastructure/delivery/http/controller/building-controller';
import {BuildingModule} from '../../../../../../src/building/infrastructure/framework/building.module';

describe('BuildingController', () => {
    let buildingController: BuildingController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [BuildingModule],
        }).compile();

        buildingController = app.get<BuildingController>(BuildingController);
    });

    describe('root', () => {
        it('should return "I\'m a building!"', () => {

            // expect(buildingController.createBuilding()).toBe('I\'m a building!');

            buildingController.createBuilding().then(data => expect(data).toBe('I\'m a building!'));
        });
    });
});

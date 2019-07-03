import {Test, TestingModule} from '@nestjs/testing';
import {BuildingController} from '../../../../../../src/building/infrastructure/delivery/http/controller/building-controller';
import {AppModule} from '../../../../../../src/app.module';

describe('BuildingController', () => {
    let buildingController: BuildingController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        buildingController = app.get<BuildingController>(BuildingController);
    });

    it('/ (POST)', () => {

        /**
         * TODO
         */

        // expect(buildingController.createBuilding()).toBe('I\'m a building!');

        buildingController.createBuilding().then(data => expect(data).toMatchObject({id: ''}));
    });

});

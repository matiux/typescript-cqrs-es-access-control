import { Injectable, Logger } from '@nestjs/common';
import { Building } from '@building/domain/aggregate/Building';
import { CreateBuilding } from '@building/domain/command/CreateBuilding';

@Injectable()
export class CreateBuildingService {

    execute(createBuilding: CreateBuilding): void {

        // let building = Building.create(
        //     createBuilding.getBuildingId(),
        //     createBuilding.getOccurretAt(),
        // );

        // Logger.log('Log: Async CreateBuildingCommandHandler...', 'CreateBuilding command');

    }
}
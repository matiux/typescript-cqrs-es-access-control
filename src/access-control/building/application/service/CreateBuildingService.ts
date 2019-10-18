import {Injectable, Logger} from '@nestjs/common';
import { Building } from '@building/domain/aggregate/Building';

@Injectable()
export class CreateBuildingService {

    execute(): void {

        let building = Building.create();

        Logger.log('Log: Async CreateBuildingCommandHandler...', 'CreateBuilding command');

    }
}
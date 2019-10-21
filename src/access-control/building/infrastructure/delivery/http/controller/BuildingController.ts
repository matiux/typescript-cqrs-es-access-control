import { Controller, Post } from '@nestjs/common';
import * as uuid from 'uuid/v4';
import { CommandBus } from '@nestjs/cqrs';
import { BuildingId } from '@building/domain/aggregate/BuildingId';
import { CreateBuilding } from '@building/domain/command/CreateBuilding';
import { Logger } from '@nestjs/common';

@Controller('building')
export class BuildingController {
    constructor(private readonly commandBus: CommandBus) {
    }

    @Post()
    async createBuilding() {

        Logger.log('BuildingController. Dispatch del comando CreateBuilding');

        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        const buildingId: BuildingId = BuildingId.create(uuid());

        await this.commandBus.execute(
            new CreateBuilding(buildingId, 'Stark tower', new Date()),
        );

        return {
            id: buildingId.toString(),
        };

        // return this.showBuildingService.execute();
        // return this.appService.getBuilding();
    }
}

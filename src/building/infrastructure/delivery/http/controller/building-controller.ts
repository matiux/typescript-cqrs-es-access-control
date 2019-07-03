import {Controller, Post} from '@nestjs/common';
import * as uuid from 'uuid/v4';
import {CommandBus} from '@nestjs/cqrs';
import {BuildingId} from '../../../../domain/aggregate/building-id';
import {CreateBuilding} from '../../../../domain/command/create-building';

@Controller('building')
export class BuildingController {
    constructor(private readonly commandBus: CommandBus) {
    }

    // @Get()
    // async getBuilding(): Promise<string> {
    //   return this.appService.getBuilding();
    // }

    @Post()
    async createBuilding(): Promise<{}> {

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

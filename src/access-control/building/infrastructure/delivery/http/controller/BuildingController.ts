import { Controller, Post, Req, Patch, Param } from '@nestjs/common';
import * as uuid from 'uuid/v4';
import { CommandBus } from '@nestjs/cqrs';
import { BuildingId } from '@building/domain/aggregate/BuildingId';
import { CreateBuilding, EditBuilding } from '@building/domain/command/BuildingCommand';
import { Logger } from '@nestjs/common';
import { Request } from 'express';

@Controller('building')
export class BuildingController {
    constructor(private readonly commandBus: CommandBus) {
    }

    @Post()
    async createBuilding(@Req() request: Request) {

        Logger.log('BuildingController. Dispatch del comando CreateBuilding');

        const buildingId: BuildingId = BuildingId.create(uuid());

        const name = request.body.name;

        await this.commandBus.execute(
            new CreateBuilding(buildingId, name, new Date()),
        );

        return {
            id: buildingId.toString(),
        };
    }

    @Patch(':buildingId')
    async editBuilding(@Req() request: Request, @Param('buildingId') buildingId: string) {

        Logger.log('BuildingController. Dispatch del comando EditBuilding per l\'id ' + buildingId);

        const name = request.body.name;

        await this.commandBus.execute(
            new EditBuilding(BuildingId.create(buildingId), name, new Date()),
        );

        return {
            id: buildingId.toString(),
        };
    }
}
// 84c053e0-14c2-4742-93cc-536546ef6b9d
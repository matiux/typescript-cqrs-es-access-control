import {Controller, Post} from '@nestjs/common';

@Controller('building')
export class BuildingController {
    // constructor(private readonly commandBus: CommandBus) {
    // }

    // @Get()
    // async getBuilding(): Promise<string> {
    //   return this.appService.getBuilding();
    // }

    @Post()
    async createBuilding(): Promise<string> {

        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

        //  await this.commandBus.execute(
        //      new CreateBuilding(BuildingId, killDragonDto.dragonId)
        //  );
        //
        return 'I\'m a building!';

        // return this.showBuildingService.execute();

        // return this.appService.getBuilding();
    }
}

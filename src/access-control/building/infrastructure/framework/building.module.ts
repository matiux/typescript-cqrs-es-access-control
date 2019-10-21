import { Module, OnModuleInit } from '@nestjs/common';
import { BuildingController } from '@building/infrastructure/delivery/http/controller/BuildingController';
import { CreateBuildingService } from '@building/application/service/CreateBuildingService';
import { BuildingCommandHandlers } from '@building/application/handler/CommandHandlers';
import { Buildings } from '@building/domain/aggregate/Buildings';
import { BuildingEventListeners } from '@building/application/event/BuildingEventListeners';

@Module({
    controllers: [
        BuildingController,
    ],
    providers: [
        CreateBuildingService,
        Buildings,
        ...BuildingCommandHandlers,
        ...BuildingEventListeners,
    ],
})
export class BuildingModule {
}

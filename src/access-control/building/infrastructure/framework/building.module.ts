import {Module, OnModuleInit} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {BuildingController} from '@building/infrastructure/delivery/http/controller/BuildingController';
import {CreateBuildingService} from '@building/application/service/CreateBuildingService';
import {BuildingCommandHandlers} from '@building/application/handler/CommandHandlers';

@Module({
    imports: [
        CqrsModule,
    ],
    controllers: [
        BuildingController,
    ],
    providers: [
        CreateBuildingService,
        ...BuildingCommandHandlers,
    ],
})
export class BuildingModule {
}

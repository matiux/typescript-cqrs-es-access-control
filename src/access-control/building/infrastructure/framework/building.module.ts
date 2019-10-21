import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { BuildingController } from '@building/infrastructure/delivery/http/controller/BuildingController';
import { CreateBuildingService } from '@building/application/service/CreateBuildingService';
import { BuildingCommandHandlers } from '@building/application/handler/CommandHandlers';
import { Buildings } from '@building/domain/aggregate/Buildings';

@Module({
    imports: [
        CqrsModule,
    ],
    controllers: [
        BuildingController,
    ],
    providers: [
        CreateBuildingService,
        Buildings,
        ...BuildingCommandHandlers,
    ],
})
export class BuildingModule {
}

import {Module, OnModuleInit} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {BuildingController} from '../delivery/http/controller/building-controller';
import {CreateBuildingService} from '../../application/service/create-building-service';
import {BuildingCommandHandlers} from '../../application/handler/command-handlers';

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

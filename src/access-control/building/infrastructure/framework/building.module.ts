import { Module } from '@nestjs/common';
import { BuildingController } from '@building/infrastructure/delivery/http/controller/BuildingController';
import { BuildingCommandHandlers } from '@building/application/handler/CommandHandlers';
import { Buildings } from '@building/domain/read/Buildings';
import { BuildingEventListeners } from '@building/application/event/BuildingEventListeners';
import {TypegooseModule} from 'nestjs-typegoose';
import {BuildingList} from '@building/domain/read/BuildingList';

@Module({
    imports: [
        TypegooseModule.forFeature([BuildingList]),
    ],
    controllers: [
        BuildingController,
    ],
    providers: [
        // CreateBuildingService,
        Buildings,
        ...BuildingCommandHandlers,
        ...BuildingEventListeners,
    ],
})
export class BuildingModule {
}

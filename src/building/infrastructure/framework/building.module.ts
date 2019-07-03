import {Module, OnModuleInit} from '@nestjs/common';
import {CommandBus, CqrsModule} from '@nestjs/cqrs';
import {BuildingController} from '../delivery/http/controller/building-controller';
import {CreateBuildingService} from '../../application/service/create-building-service';
import {BuildingCommandHandlers} from '../../application/handler/command-handlers';

@Module({
    imports: [
        CqrsModule,
    ],
    controllers: [BuildingController],
    providers: [
        CreateBuildingService,
        ...BuildingCommandHandlers,
    ],
})
export class BuildingModule implements OnModuleInit {

    constructor(
        private readonly command$: CommandBus,
    ) {
    }

    onModuleInit(): any {
        this.command$.register(BuildingCommandHandlers);
    }
}

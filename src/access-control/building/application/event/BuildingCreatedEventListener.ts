import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { BuildingCreated } from '@building/domain/event/BuildingCreated';

@EventsHandler(BuildingCreated)
export class BuildingCreatedEventListener implements IEventHandler<BuildingCreated> {

    async handle(event: BuildingCreated) {

        Logger.log('BuildingCreatedEventHandler. Evento BuildingCreated intercettato');

    }
}
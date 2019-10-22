import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { BuildingEdited } from '@building/domain/event/BuildingEvents';
import {Buildings} from '@building/domain/read/Buildings';
import {BuildingList} from '@building/domain/read/BuildingList';

@EventsHandler(BuildingEdited)
export class BuildingEditedEventListener implements IEventHandler<BuildingEdited> {

    private logger = new Logger('AddEventHandler');

    constructor(private buildings: Buildings) { }

    async handle(event: BuildingEdited) {

        this.logger.verbose(`EVENT TRIGGERED: ${event.constructor.name}}`);

        Logger.log('BuildingEditedEventListener. Evento BuildingEdited intercettato');

        await this.buildings.create(new BuildingList(
            event.name,
        ));

    }
}

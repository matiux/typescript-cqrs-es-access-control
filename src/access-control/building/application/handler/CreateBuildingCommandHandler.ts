import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EventPublisher } from 'nestjs-eventstore';
import { CreateBuilding } from '@building/domain/command/CreateBuilding';
import { Building } from '@building/domain/aggregate/Building';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateBuilding)
export class CreateBuildingCommandHandler implements ICommandHandler<CreateBuilding> {

    constructor(private readonly publisher: EventPublisher) { }

    async execute(createBuilding: CreateBuilding) {

        Logger.log('CreateBuildingCommandHandler. Handling del comando CreateBuilding');

        const building = this.publisher.mergeObjectContext(
            Building.create(
                createBuilding.getBuildingId(),
                createBuilding.getBuildingName(),
                createBuilding.getOccurretAt(),
            ),
        );

        await building.commit();
    }
}

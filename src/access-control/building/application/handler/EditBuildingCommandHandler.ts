import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EventPublisher } from 'nestjs-eventstore';
import { EditBuilding } from '@building/domain/command/EditBuilding';
import { Building } from '@building/domain/aggregate/Building';
import { Logger } from '@nestjs/common';

@CommandHandler(EditBuilding)
export class EditBuildingCommandHandler implements ICommandHandler<EditBuilding> {

    constructor(
        private readonly publisher: EventPublisher,
    ) { }

    async execute(editBuilding: EditBuilding) {

        Logger.log('EditBuildingCommandHandler. Handling del comando EditBuilding');

        const building1 = new Building();
        building1.edit(
            editBuilding.getBuildingId(),
            editBuilding.getBuildingName(),
            editBuilding.getOccurretAt(),
            );

        const building = this.publisher.mergeObjectContext(
            building1,
        );

        await building.commit();
    }
}

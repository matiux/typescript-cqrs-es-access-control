import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateBuilding } from '@building/domain/command/CreateBuilding';
import { Buildings } from '@building/domain/aggregate/Buildings';
import { Building } from '@building/domain/aggregate/Building';
import { Logger } from '@nestjs/common';

// import {CreateBuildingService} from '@building/application/service/CreateBuildingService';

@CommandHandler(CreateBuilding)
export class CreateBuildingCommandHandler implements ICommandHandler<CreateBuilding> {

    constructor(
        private readonly repository: Buildings,
        private readonly publisher: EventPublisher,
    ) { }

    // constructor(private readonly createBuildingService: CreateBuildingService) {
    // }

    async execute(createBuilding: CreateBuilding) {

        Logger.log('CreateBuildingCommandHandler. Handling del comando CreateBuilding');

        let building = new Building();
        building.create(
            createBuilding.getBuildingId(),
            createBuilding.getOccurretAt(),
        );

        building.commit();

        // this.createBuildingService.execute(command);

        // const {buildingId} = command;
        // const {userDto} = command;
        // const user = this.publisher.mergeObjectContext(
        //     await this.repository.createUser(userDto),
        // );
        //
        // user.commit();
        // resolve();

    }
}

import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {CreateBuilding} from '@building/domain/command/CreateBuilding'
import {CreateBuildingService} from '@building/application/service/CreateBuildingService';

@CommandHandler(CreateBuilding)
export class CreateBuildingCommandHandler implements ICommandHandler<CreateBuilding> {

    constructor(private readonly createBuildingService: CreateBuildingService) {
        // private readonly repository: BuildingRepository, private readonly publisher: EventPublisher
    }

    async execute(command: CreateBuilding): Promise<any> {

        this.createBuildingService.execute();

        

        //const {buildingId} = command;
        // const {userDto} = command;
        // const user = this.publisher.mergeObjectContext(
        //     await this.repository.createUser(userDto),
        // );
        //
        // user.commit();
        // resolve();

    }

}

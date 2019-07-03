import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {CreateBuilding} from '../../domain/command/create-building';
import {Logger} from '@nestjs/common';

@CommandHandler(CreateBuilding)
export class CreateBuildingCommandHandler implements ICommandHandler<CreateBuilding> {

    constructor() {
        // private readonly repository: BuildingRepository, private readonly publisher: EventPublisher
    }

    async execute(command: CreateBuilding): Promise<any> {

        Logger.log('Async CreateUserHandler...', 'CreateUserCommand');

        // const {userDto} = command;
        // const user = this.publisher.mergeObjectContext(
        //     await this.repository.createUser(userDto),
        // );
        //
        // user.commit();
        // resolve();

    }

}

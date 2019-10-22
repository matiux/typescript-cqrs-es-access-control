import {Injectable, Logger} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {BuildingList} from '@building/domain/read/BuildingList';
import {ReturnModelType} from '@typegoose/typegoose';

@Injectable()
export class Buildings {

    private logger: Logger;

    constructor(@InjectModel(BuildingList) private readonly buildingList: ReturnModelType<typeof BuildingList>) {
        this.logger = new Logger(`${this.buildingList.modelName}Repository`);
    }

    async create(buildingList: BuildingList): Promise<void> {

        this.logger.verbose('CREATE');

        this.buildingList.apply(buildingList);
        return await this.buildingList.save();
    }
}

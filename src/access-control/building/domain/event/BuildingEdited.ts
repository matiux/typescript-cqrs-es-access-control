import { BuildingId } from '@building/domain/aggregate/BuildingId';
import { Logger } from '@nestjs/common';

export class BuildingEdited {
    constructor(
        private readonly buildingId: BuildingId,
        private readonly _name: string,
        private readonly occurredAt: Date,
    ) { }

    get streamName() {

        Logger.log('here...');

        // this is the stream name to which the event will be pushed.
        return `buildings-${this.buildingId.toString()}`;
    }

    get name(): string {
        return this._name;
    }
}

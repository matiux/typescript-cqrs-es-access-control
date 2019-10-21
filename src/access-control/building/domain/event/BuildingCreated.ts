import { BuildingId } from '@building/domain/aggregate/BuildingId';

export class BuildingCreated {
    constructor(private readonly buildingId: BuildingId, private readonly occurredAt: Date) { }

    get streamName() {
        // this is the stream name to which the event will be pushed.
        return `buildings-${this.buildingId.toString()}`;
    }
}
import {BuildingId} from '@building/domain/aggregate/BuildingId'

export class CreateBuilding {

    constructor(
        private readonly buildingId: BuildingId,
        public readonly buildingName: string,
        private readonly occurredAt: Date,
    ) {
    }

    getBuildingId(): BuildingId {
        return this.buildingId;
    }

    getBuildingName(): string {
        return this.buildingName;
    }

    getOccurretAt(): Date {
        return this.occurredAt;
    }
}
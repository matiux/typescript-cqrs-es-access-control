import { BuildingId } from '@building/domain/aggregate/BuildingId';

export class BuildingCreated {
    constructor(private readonly buildingId: BuildingId, private readonly occurredAt: Date) {}
}
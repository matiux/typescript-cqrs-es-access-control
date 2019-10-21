import { BuildingCreated } from '@building/domain/event/BuildingCreated';
import { BuildingId } from '@building/domain/aggregate/BuildingId';

export const BuildingEventsInstantiators = {
    BuildingCreated: (buildingId: BuildingId, occurredAt: Date) =>
        new BuildingCreated(buildingId, occurredAt),
};
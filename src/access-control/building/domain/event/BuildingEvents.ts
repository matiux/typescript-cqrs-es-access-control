import { BuildingCreated } from '@building/domain/event/BuildingCreated';
import { BuildingEdited } from '@building/domain/event/BuildingEdited';
import { BuildingId } from '@building/domain/aggregate/BuildingId';

export const BuildingEventsInstantiators = {
    BuildingCreated: (buildingId: BuildingId, name: string, occurredAt: Date) =>
        new BuildingCreated(buildingId, name, occurredAt),

    BuildingEdited: (buildingId: BuildingId, name: string, occurredAt: Date) =>
        new BuildingEdited(buildingId, name, occurredAt),
};

export {
    BuildingCreated,
    BuildingEdited,
};

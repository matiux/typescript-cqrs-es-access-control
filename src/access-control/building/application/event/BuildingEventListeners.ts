import { BuildingCreatedEventListener } from '@building/application/event/BuildingCreatedEventListener';
import { BuildingEditedEventListener } from '@building/application/event/BuildingEditedEventListener';

export const BuildingEventListeners = [
    BuildingCreatedEventListener,
    BuildingEditedEventListener,
];

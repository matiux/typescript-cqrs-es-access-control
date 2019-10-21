import { AggregateRoot } from '@nestjs/cqrs';
import { BuildingCreated } from '@building/domain/event/BuildingCreated';
import { BuildingId } from '@building/domain/aggregate/BuildingId';
import { Logger } from '@nestjs/common';

export class Building extends AggregateRoot {

    public static create(buildingId: BuildingId, occurredAt: Date) {

        Logger.log('Building. Creazione Building');

        const building = new Building();

        building.apply(new BuildingCreated(buildingId, occurredAt));

        return building;
    }
}

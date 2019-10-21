import { AggregateRoot } from '@nestjs/cqrs';
import { BuildingCreated } from '@building/domain/event/BuildingCreated';
import { BuildingId } from '@building/domain/aggregate/BuildingId';
import { Logger } from '@nestjs/common';

export class Building extends AggregateRoot {

    public create(buildingId: BuildingId, occurredAt: Date) {

        Logger.log('Building. Creazione Building');

        // const building = new Building();

        this.apply(new BuildingCreated(buildingId, occurredAt));

        // return building;
    }
}

import { AggregateRoot } from '@nestjs/cqrs';
import { BuildingCreated, BuildingEdited } from '@building/domain/event/BuildingEvents';
import { BuildingId } from '@building/domain/aggregate/BuildingId';
import { Logger } from '@nestjs/common';

export class Building extends AggregateRoot {

    // buildingId: BuildingId;
    // name: string;

    public static create(buildingId: BuildingId, name: string, occurredAt: Date) {

        Logger.log('Building. Creazione Building');

        const building = new Building();

        building.apply(new BuildingCreated(buildingId, name, occurredAt));

        return building;
    }

    public edit(buildingId: BuildingId, name: string, occurredAt: Date) {

        Logger.log('Building. Modifica Building');

        this.apply(new BuildingEdited(buildingId, name, occurredAt));
    }
}

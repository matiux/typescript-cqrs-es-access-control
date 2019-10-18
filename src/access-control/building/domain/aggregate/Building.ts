import { AggregateRoot } from '@nestjs/cqrs';
import { BuildingCreated } from '@building/domain/event/BuildingCreated';
import { BuildingId } from '@building/domain/aggregate/BuildingId';

export class Building extends AggregateRoot {

    constructor(){
        super();
    }

    public static create(buildingId: BuildingId, occurredAt: Date): Building {

        let building = new this;

        this.apply(new BuildingCreated(buildingId, occurredAt))        

        return building;
    }
}
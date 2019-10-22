import { prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

export class BuildingList {

    @IsString()
    @prop({ required: true })
    @prop()
    name?: string;

    constructor(name: string) {
        this.name = name;
    }
}

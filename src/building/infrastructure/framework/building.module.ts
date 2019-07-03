import {Module} from '@nestjs/common';
import {BuildingController} from '../delivery/http/controller/building-controller';
import {ShowBuildingService} from '../../application/service/show-building-service';

@Module({
    imports: [],
    controllers: [BuildingController],
    providers: [ShowBuildingService],
})
export class BuildingModule {
}

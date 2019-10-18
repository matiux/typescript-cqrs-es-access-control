import {Module} from '@nestjs/common';
import {CommonController} from '@common/infrastructure/delivery/http/controller/CommonController';

@Module({
    //imports: [BuildingModule],
    controllers: [
        CommonController,
    ],
})
export class CommonModule {
}
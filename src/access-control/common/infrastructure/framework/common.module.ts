import {Module} from '@nestjs/common';
import {CommonController} from '../delivery/http/controller/common-controller';

@Module({
    //imports: [BuildingModule],
    controllers: [
        CommonController,
    ],
})
export class CommonModule {
}

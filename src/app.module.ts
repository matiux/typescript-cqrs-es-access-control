import {Module} from '@nestjs/common';
import {BuildingModule} from './access-control/building/infrastructure/framework/building.module';
import {CommonModule} from './access-control/common/infrastructure/framework/common.module';

@Module({
    imports: [
        BuildingModule,
        CommonModule
    ],
})
export class AppModule {
}

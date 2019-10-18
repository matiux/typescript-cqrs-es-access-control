import {Module} from '@nestjs/common';
import {BuildingModule} from '@building/infrastructure/framework/building.module';
import {CommonModule} from '@common/infrastructure/framework/common.module';

@Module({
    imports: [
        BuildingModule,
        CommonModule
    ],
})
export class AppModule {
}

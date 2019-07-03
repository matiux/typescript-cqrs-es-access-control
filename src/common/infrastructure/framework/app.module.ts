import {Module} from '@nestjs/common';
import {BuildingModule} from '../../../building/infrastructure/framework/building.module';

@Module({
    imports: [BuildingModule],
})
export class AppModule {
}

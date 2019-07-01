import { Module } from '@nestjs/common';
import { BuildingController } from './building/infrastructure/delivery/http/controller/building.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [BuildingController],
  providers: [AppService],
})
export class AppModule {}

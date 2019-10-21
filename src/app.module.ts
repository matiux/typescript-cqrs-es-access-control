import { Module } from '@nestjs/common';
import { BuildingModule } from '@building/infrastructure/framework/building.module';
import { CommonModule } from '@common/infrastructure/framework/common.module';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { EventStoreCqrsModule } from 'nestjs-eventstore';
import { eventStoreBusConfig } from './event-bus.provider';

@Module({
    imports: [
        ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
        EventStoreCqrsModule.forRootAsync(
            {
                useFactory: async (config: ConfigService) => {
                    return {
                        connectionSettings: config.get('eventstore.connectionSettings'),
                        endpoint: config.get('eventstore.tcpEndpoint'),
                    };
                },
                inject: [ConfigService],
            },
            eventStoreBusConfig,
        ),
        BuildingModule,
        CommonModule
    ],
})
export class AppModule {
}
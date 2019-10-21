import { EventStoreBusConfig, EventStoreSubscriptionType } from 'nestjs-eventstore';
import { BuildingEventsInstantiators } from '@building/domain/event/BuildingEvents';

export const eventStoreBusConfig: EventStoreBusConfig = {
  subscriptions: [
    {
      type: EventStoreSubscriptionType.Persistent,
      stream: '$ce-buildings',
      persistentSubscriptionName: 'contacts',
    },
  ],
  eventInstantiators: {
    ...BuildingEventsInstantiators,
  },
};

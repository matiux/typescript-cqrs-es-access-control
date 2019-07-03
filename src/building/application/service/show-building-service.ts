import {Injectable} from '@nestjs/common';

@Injectable()
export class ShowBuildingService {
    execute(): string {
        return 'I\'m a building!';
    }
}

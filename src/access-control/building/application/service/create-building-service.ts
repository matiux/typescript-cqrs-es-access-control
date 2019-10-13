import {Injectable} from '@nestjs/common';

@Injectable()
export class CreateBuildingService {
    execute(): string {
        return 'I\'m a building!';
    }
}

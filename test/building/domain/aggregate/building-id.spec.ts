import {BuildingId} from '../../../../src/building/domain/aggregate/building-id';
import {InvalidIdException} from '../../../../src/common/domain/exception/invalid-id-exception';

describe('BasicEntityId', () => {

    it('Should thrown exception', () => {

        expect(() => new BuildingId('invalid-id')).toThrow(InvalidIdException);
    });
});

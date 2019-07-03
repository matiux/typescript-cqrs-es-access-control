import {BuildingId} from '../../../../src/building/domain/aggregate/building-id';
import {InvalidIdException} from '../../../../src/common/domain/exception/invalid-id-exception';

describe('BasicEntityId', () => {

    it('Should thrown exception', () => {

        expect(() => BuildingId.create('invalid-id')).toThrow(InvalidIdException);
    });

    it('Should create BuildingId', () => {

        const id = BuildingId.create('512dd344-3813-453c-ad52-fb39dae8a050');

        expect(id).toBeInstanceOf(BuildingId);
    });
});

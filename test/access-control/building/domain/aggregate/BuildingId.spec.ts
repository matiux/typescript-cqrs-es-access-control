// import {BuildingId} from '../../../../../src/access-control/building/domain/aggregate/BuildingId';
import {BuildingId} from '@building/domain/aggregate/BuildingId';
import {InvalidIdException} from '../../../../../src/access-control/common/domain/exception/InvalidIdException';

describe('BasicEntityId', () => {

    it('Should thrown exception', () => {

        expect(() => BuildingId.create('invalid-id')).toThrow(InvalidIdException);
    });

    it('Should create BuildingId', () => {

        const id = BuildingId.create('512dd344-3813-453c-ad52-fb39dae8a050');

        expect(id).toBeInstanceOf(BuildingId);
    });

    it('Should be string', () => {

        const uiid: string = '512dd344-3813-453c-ad52-fb39dae8a050';

        const id = BuildingId.create(uiid);

        expect(id.toString()).toEqual(uiid);
    });
});

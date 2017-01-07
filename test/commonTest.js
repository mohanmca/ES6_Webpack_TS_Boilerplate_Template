import { uniqueObjects } from '../src/module/common'
import assert from 'assert'

describe('uniqueObjects', function () {
    describe('UniqueObjects', function () {
        it('should return uniqueObjects', function () {
            let objs = [{ id: 1 }, { id: 2 }, { id: 1 }]
            let result = uniqueObjects('id')(objs)
            assert.equal(JSON.stringify(result, null, 2), JSON.stringify([{ id: 1 }, { id: 2 }], null, 2));
        });
    });
});
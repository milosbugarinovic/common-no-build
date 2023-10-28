// import { CommonSomeService } from './some-service'
import { NodeCommonSomeService } from '@test/node-common/src/service/some-service' // not working

describe('some service', () => {
    it('should return some string', () => {
        expect(new NodeCommonSomeService().someServiceFunction()).toBe('NodeCommonSomeService.someServiceFunction')
    })
})

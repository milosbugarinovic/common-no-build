// import { CommonSomeService } from './some-service'
import { CommonSomeService } from '@test/common/service/some-service' // not working

describe('some service', () => {
    it('should return some string', () => {
        expect(new CommonSomeService().someServiceFunction()).toBe('CommonSomeService.someServiceFunction')
    })
})

import { Common } from '@test/common'
import { CommonSomeService } from '@test/common/service/some-service'
jest.mock('@test/common/service/some-service')
// import { CommonSomeService } from './service/some-service'
// jest.mock('./service/some-service')
// import { CommonSomeService } from './service/some-service'
// jest.mock('./service/some-service')

describe('common test', () => {

    it('should return some string and not all someService', () => {
        // const MockedSoundPlayer = mocked(SoundPlayer, true);

        expect(new Common().someFunction()).toBe('Common.someFunction')
        expect(CommonSomeService).toHaveBeenCalled()
    })
})

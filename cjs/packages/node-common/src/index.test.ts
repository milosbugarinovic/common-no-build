import { NodeCommon } from '@test/node-common/src'
import { NodeCommonSomeService } from '@test/node-common/src/service/some-service'
jest.mock('@test/node-common/src/service/some-service')
// import { CommonSomeService } from './service/some-service'
// jest.mock('./service/some-service')
// import { CommonSomeService } from './service/some-service'
// jest.mock('./service/some-service')

describe('common test', () => {

    it('should return some string and not all someService', () => {
        // const MockedSoundPlayer = mocked(SoundPlayer, true);

        expect(new NodeCommon().someFunction()).toBe('NodeCommon.someFunction')
        expect(NodeCommonSomeService).toHaveBeenCalled()
    })
})

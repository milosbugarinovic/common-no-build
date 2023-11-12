import { NodeCommon } from '#node-common'
import { NodeCommonSomeService } from '#node-common/service/some-service'
jest.mock('#node-common/service/some-service')
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

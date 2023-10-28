import { NodeCore } from '@test/node-core/src'
import { NodeCommon } from '@test/node-common/src'
import { CommonSomeService } from '@test/common/src/service/some-service'
import { NodeCommonSomeService } from '@test/node-common/src/service/some-service'

jest.mock('@test/node-common/src')
jest.mock('@test/common/src/service/some-service')
jest.mock('@test/node-common/src/service/some-service')

describe('common test', () => {

    it('should return some string and not all someService', () => {
        // const MockedSoundPlayer = mocked(SoundPlayer, true);

        expect(new NodeCore().someFunction()).toBe('NodeCore.someFunction')
        expect(new NodeCore().allCommonFunction()).toBe(';;')
        expect(NodeCommonSomeService).toHaveBeenCalled()
        expect(NodeCommonSomeService).toHaveBeenCalledTimes(2)
        expect(NodeCommon).toHaveBeenCalled()
        expect(NodeCommon).toHaveBeenCalledTimes(2)
        expect(CommonSomeService).toHaveBeenCalled()
        expect(CommonSomeService).toHaveBeenCalledTimes(2)
    })
})

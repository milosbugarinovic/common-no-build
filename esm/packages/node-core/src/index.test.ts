import { NodeCore } from '#'
import { NodeCommon } from '#node-common'
import { CommonSomeService } from '#common/service/some-service'
import { NodeCommonSomeService } from '#node-common/service/some-service'

jest.mock('#node-common')
jest.mock('#common/service/some-service')
jest.mock('#node-common/service/some-service')

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

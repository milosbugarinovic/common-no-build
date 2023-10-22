import { CommonSomeService } from '#common/service/some-service.js'
import { NodeCommonSomeService } from '#node-common/service/some-service.js'

export class NodeCommon {
	protected _nodeCommonServiceTest = new NodeCommonSomeService()
	protected _commonServiceTest = new CommonSomeService()

	someFunction(): string {
		return 'someFunction-node-common'
	}

	someServiceFunction(): string {
		return this._commonServiceTest.someServiceFunction() + this._nodeCommonServiceTest.someServiceFunction()
	}
}

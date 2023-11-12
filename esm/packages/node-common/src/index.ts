import { CommonSomeService } from '#common/service/some-service'
import { NodeCommonSomeService } from '#node-common/service/some-service'

export class NodeCommon {
	protected _nodeCommonServiceTest = new NodeCommonSomeService()
	protected _commonServiceTest = new CommonSomeService()

	someFunction(): string {
		return 'NodeCommon.someFunction'
	}

	someServiceFunction(): string {
		return [this.someFunction(),  this._nodeCommonServiceTest.someServiceFunction()].join(';')
	}

	commonServiceFunction(): string {
		return [this.someFunction(),  this._commonServiceTest.someServiceFunction()].join(';')
	}
}

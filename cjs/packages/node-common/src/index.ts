import { CommonSomeService } from '@test/common/src/service/some-service'
import { NodeCommonSomeService } from '@test/node-common/src/service/some-service'

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

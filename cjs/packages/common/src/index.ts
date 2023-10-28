// import { CommonSomeService } from './service/some-service'
import { CommonSomeService } from '@test/common/src/service/some-service'
// import { CommonSomeService } from '@test/common/service/some-service'

export class Common {
	protected _commonServiceTest = new CommonSomeService()

	someFunction(): string {
		return 'Common.someFunction'
	}

	someServiceFunction(): string {
		return [this.someFunction(),  this._commonServiceTest.someServiceFunction()].join(';')
	}
}

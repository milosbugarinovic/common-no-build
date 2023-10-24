import { CommonSomeService } from '#common/service/some-service'
// import { CommonSomeService } from '#common/service/some-service'

export class Common {
	protected _commonServiceTest = new CommonSomeService()

	someFunction(): string {
		return 'someFunction'
	}

	someServiceFunction(): string {
		return this._commonServiceTest.someServiceFunction()
	}
}

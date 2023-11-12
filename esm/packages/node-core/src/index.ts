import { Common } from '#common'
import { CommonSomeService } from '#common/service/some-service'
import { NodeCommon } from '#node-common'
import { NodeCommonSomeService } from '#node-common/service/some-service'


export class NodeCore {
    protected _nodeCommonServiceTest = new NodeCommonSomeService()
    protected _nodeCommon = new NodeCommon()
    protected _commonServiceTest = new CommonSomeService()

    someFunction(): string {
        return 'NodeCore.someFunction'
    }

    allCommonFunction(): string {
        return [this._nodeCommon.someServiceFunction(), this._commonServiceTest.someServiceFunction(), this._nodeCommonServiceTest.someServiceFunction()].join(';')
    }
}

console.log('start app') // eslint-disable-line no-console
console.log('common') // eslint-disable-line no-console
console.log(new Common().someFunction()) // eslint-disable-line no-console
console.log(new Common().someServiceFunction()) // eslint-disable-line no-console
console.log(new CommonSomeService().someServiceFunction()) // eslint-disable-line no-console
console.log('node-common') // eslint-disable-line no-console
console.log(new NodeCommon().someFunction()) // eslint-disable-line no-console
console.log(new NodeCommon().someServiceFunction()) // eslint-disable-line no-console
console.log(new NodeCommonSomeService().someServiceFunction()) // eslint-disable-line no-console

console.log('start end') // eslint-disable-line no-console

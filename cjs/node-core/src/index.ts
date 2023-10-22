import { Common } from '#common'
import { CommonSomeService } from '#common/service/some-service'
import { NodeCommon } from '#node-common'
import { NodeCommonSomeService } from '#node-common/service/some-service'

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

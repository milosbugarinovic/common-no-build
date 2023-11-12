import React from 'react'
import { Common } from '#common'
// import { Common } from '#/service'
// import { CommonSomeService } from '#/service/index-service'

export const App = (): React.ReactElement => {

    const commonTest = new Common()
    // const commonTest1 = new CommonSomeService()

    return (
        <div className="App">
            <h1>Test App</h1>
<p>{commonTest.someFunction()}</p>
{/*<p>{commonTest1.someServiceFunction()}</p>*/}
        </div>
    )
}

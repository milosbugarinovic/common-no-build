import React from 'react'
import { Common } from '#common'
import { ReactService } from '#/service'
// import { CommonSomeService } from '#/service/index-service'

export const App = (): React.ReactElement => {

    const commonTest = new Common()
    const reactServiceTest = new ReactService()
    // const commonTest1 = new CommonSomeService()

    return (
        <div className="App">
            <h1>Test App</h1>
<p>{commonTest.someFunction()}</p>
<p>{reactServiceTest.someFunction()}</p>
{/*<p>{commonTest1.someServiceFunction()}</p>*/}
        </div>
    )
}

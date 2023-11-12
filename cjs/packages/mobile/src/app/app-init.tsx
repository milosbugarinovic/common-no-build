import React from 'react'
import { Text, View } from 'react-native';
import { Common } from '#common'
import { CommonSomeService } from '#common/service/some-service'


export const AppInit = (): React.ReactElement => {
const test= new Common()
const test2= new CommonSomeService()

 return <View>
    <Text>Test the app</Text>
    <Text>Test the app</Text>
    <Text>Test the app</Text>
    <Text>Test the app</Text>
     <Text>{test.someFunction()}</Text>
     <Text>{test2.someServiceFunction()}</Text>
  </View>
}


import React, {Component} from 'react'
import {View} from 'react-native'
import ComB from './ComB'

export default class ComA extends Component {

    // clickB = () => {
    //     this.refB.clickJ()
    // }

    render() {
        return (
            <View style={{width: 300, height: 300, backgroundColor: 'blue', 
            justifyContent: 'center', alignItems: 'center'}}>
                {/* <ComB ref={(target) => this.refB = target}/> */}
                <ComB/>
            </View>
        )
    }
}
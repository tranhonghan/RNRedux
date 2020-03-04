import React, {Component} from 'react'
import {View} from 'react-native'
import ComJ from './ComJ'

export default class ComB extends Component {

    // clickJ = () => {
    //     this.refJ.upNumber()
    // }

    render() {
        return (
            <View style={{width: 200, height: 200, backgroundColor: 'red', 
            justifyContent: 'center', alignItems: 'center'}}>
                {/* <ComJ ref={(target) => this.refJ = target}/> */}
                <ComJ/>
            </View>
        )
    }
}
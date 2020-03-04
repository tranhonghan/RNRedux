import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import ComA from './ComA'

import {upNumber, downNumber, changeBgColor} from '../actions/number'
import {connect} from 'react-redux'

class Home extends Component {

    // clickA = () => {
    //     this.refA.clickB()
    // }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.props.onUpNumber(this.props.number)}>
                    <Text style={{fontSize: 30}}>Click + </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onDownNumber(this.props.number)}>
                    <Text style={{fontSize: 30}}>Click - </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onChangeBgColor(this.props.bgColor)}>
                    <Text style={{fontSize: 30}}>Change Bg Color </Text>
                </TouchableOpacity>
                {/* <ComA ref={(target) => this.refA = target}/> */}
                <ComA/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.numberReducer.number,
        bgColor: state.numberReducer.bgColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpNumber: (number) => dispatch(upNumber(number)),
        onDownNumber: (number) => dispatch(downNumber(number)),
        onChangeBgColor: (bgColor) => dispatch(changeBgColor(bgColor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
import React, {Component} from 'react'
import {View, Text} from 'react-native'

import {upNumber} from '../actions/number'
import {connect} from 'react-redux'

class ComJ extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         number: 0
    //     }
    // }

    // upNumber = () => {
    //     this.setState({number: this.state.number + 1})
    // }

    render() {
        return (
            <View style={{width: 100, height: 100, backgroundColor: this.props.bgColor, 
            justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'red', fontSize: 30}}>{this.props.number}</Text>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onUpNumber: (number) => dispatch(upNumber(number))
//     }
// }

export default connect(mapStateToProps, null)(ComJ)
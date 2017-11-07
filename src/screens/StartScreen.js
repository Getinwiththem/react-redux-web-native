import React from 'react'
import { connect } from 'react-redux'
import SampleAction from '../actions/SampleAction'
import SampleView from '../components/SampleView/SampleView'

class StartScreen extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      text: {
        message: 'Welcome to the app!',
        dispatchMessage: 'Dispatch an action to:',
        label: 'Action:'
      },
      passActionValue: 1,
      failActionValue: 0
    }

    this.passDispatchedAction = this.passDispatchedAction.bind(this)
    this.failDispatchedAction = this.failDispatchedAction.bind(this)
  }

  componentDidMount() {
    setTimeout(this.failDispatchedAction, 1500)
    setTimeout(this.passDispatchedAction, 3000)
  }

  passDispatchedAction() {
    this.props.dispatch(SampleAction(this.state.passActionValue))
  }

  failDispatchedAction() {
    this.props.dispatch(SampleAction(this.state.failActionValue))
  }

  render() {
    return (
      <SampleView {...this.state.text} responseAction={this.props.actions.message} />
    )
  }
}

const mapStateToProps = (state) => ({
    actions: state.SampleReducer
})

export default connect(mapStateToProps)(StartScreen);
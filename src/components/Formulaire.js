import React, { Component } from 'react'

class Formulaire extends Component {
    state = {
        message: ''

    }

    createMessage = () => {
        const {addMessage, pseudo} = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        // ReInit
        this.setState({ message: ''})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        this.setState({ message })
    }
    render() {
        return (
           <form
            className='form'
            onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                    maxLength='250'
                />
                <div className='info'>
                    250
                </div>
                <button type='submit'>
                    Envoi dans le nuage
                </button>
           </form>
        )
    }
}

export default Formulaire

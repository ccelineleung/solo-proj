import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'
import mixin from 'es6-react-mixins'
import connect from 'alt-connect'

import Actions from './actions'
import Store from './store'

class Component extends mixin(connect(Store)) {
    hide() {
        Actions.hide()
    }
    ok() {
        Actions.ok()
    }
    show(message) {
        return Actions.show(message)
    }
    render () {
        return (
            <Modal aria-labelledby='contained-modal-title' bsSize='small' container={this} onHide={this.hide.bind(this)} show={!!this.state.message}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button autoFocus bsStyle='info' onClick={this.ok.bind(this)}>
                        {this.props.ok}
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

Component.propTypes = {
    title: PropTypes.string,
    ok: PropTypes.string
}

export default Component;

import React from "react";
import Modal from "./Modal";


class Component extends React.Component {

    constructor(props) {
        super(props);

        this.state = {modal: false}
    }

    toggle = (e) => {
        e.preventDefault()
        this.setState({modal: !this.state.modal})
    }
    render() {
        return(
            <div>
                <button type="button" class="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                            <div toggle = {this.toggle} className="modal-header">
                                <div className="modal-title">Modal title</div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.toggle}>
                             </button>
                            </div>
                            <div attr  className="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                            <div className="modal-footer">
                                <button type="button" class="modal-close-button btn btn-default"
                                onClick={this.toggle}>Cancel</button>
                            </div>
                </Modal>
            </div>
        )
    }
}

export default Component
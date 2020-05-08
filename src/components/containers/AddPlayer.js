import React from 'react'
import {addPlayer} from "../../actions";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddPlayer = ({dispatch}) => {
    let input;

    return (
        <div>
            <Form className="add-player-form" onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addPlayer(input.value));
                input.value = '';
            }}>
                <Form.Control className="add-player-input" type="input" ref={node => input = node}/>
                <Button className="add-player-btn"  type="submit">
                    Add
                </Button>
            </Form>
        </div>
    )
};

export default connect()(AddPlayer)

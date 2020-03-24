import React from 'react'
import {addPlayer} from "../../actions";
import {connect} from "react-redux";

const AddPlayer = ({dispatch}) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addPlayer(input.value));
                input.value = '';
            }}>
                <input ref={node => input = node}/>
                <button type="submit">
                    Add Player
                </button>
            </form>
        </div>
    )
};

export default connect()(AddPlayer)

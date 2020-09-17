import React from "react";
import axios from 'axios';
function Display(props) {

    if (props.state.data.category === undefined) {

        return (
            <div>
                Loading
            </div>
        );
    }


    return (
        <div>
            <div>
                Qustion : {props.state.data.question} ?
  </div>
            <div>
                Poin value : {props.state.data.value}
            </div>
            <div>
                User Score : {props.state.score}
            </div>
            <div>
                Category : {props.state.data.category.title}
            </div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label> Answer :</label>
                    <input
                        onChange={props.handleChange}
                        type="text"
                        name="answer"
                        value={props.state.formData.answer}
                    />
                </div>

                <button>Submit Form</button> <br />

            </form>
        </div>
    );
}
export default Display;
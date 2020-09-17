import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from "../disply/Display"
class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: {
            answer: "",

            }
        }

    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.data.answer === this.state.formData.answer) {
            this.setState((previousState) => {
                return {
                    score: previousState.score + previousState.data.value
                }


            })


        }

        else {
            // console.log(previousState)
            this.setState((previousState) => {
                return {
                    score: previousState.score - previousState.data.value
                }
            })
        }
        this.getNewQuestion()

    }
    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }
    //display the results on the screen
    render() {
        return(
        <div
            
            className="Jeopardy">

<Display state = {this.state}
handleChange={this.handleChange}
handleSubmit={this.handleSubmit} />
        </div>
        )

    }
}
    export default Jeopardy;
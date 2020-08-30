import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
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
        this.setState({formData});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.data.answer === this.state.formData.answer){
            this.setState( (previousState)=> {
                return {
                    score: previousState.score + previousState.data.value 
                }


            }) 
            

        } 

        else{
            this.setState( (previousState)=> {
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
        if (this.state.data.category === undefined) {

            return (
                <div>
                    Loading
                </div>
            );
        }


        return (
            <div>
                <div>
                    Qustion : {this.state.data.question} ?
      </div>
                <div>
                    Poin value : {this.state.data.value}
                </div>
                <div>
                    User Score : {this.state.score}
                </div>
                <div>
                    Category : {this.state.data.category.title}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> Answer :</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="answer"
                            value={this.state.formData.answer}
                        />
                    </div>

                    <button>Submit Form</button> <br />

                </form>
            </div>
        );
    }
}
export default Jeopardy;
import React from 'react';
import axios from 'axios';


class Form extends React.Component{
    state={
        output:"",
        answer:""
    }

    handleSubmit = e =>{
        e.preventDedault();
        axios.get('https://yesno.wtf/api/')
            .then(res =>{
                console.log(res.data)
                this.setState({
                    output : res.data.image,
                    answer : res.data.answer
                })
            })
    }

    reset = e =>{
        this.setState({
            output:"",
            answer:""
        })
    }
    
    
    render(){
        console.log(this.state.output)
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"></input>
                    <img height="100px" width="100px" src={this.state.output}></img>
                <button type="submit">Get Answer!</button>
                <button onClick={this.reset} type="reset">Reset</button>
            </form>

        )
    }
}

export default Form;
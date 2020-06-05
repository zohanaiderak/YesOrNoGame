import React from 'react';
import axios from 'axios';
import './Page.scss'

class Form extends React.Component{
    state={
        output:"",
        answer:"",
        className: "hidden"
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        axios.get('https://yesno.wtf/api/')
            .then(res =>{
                console.log(res.data)
                this.setState({
                    output : res.data.image,
                    answer : res.data.answer,
                    className: "visible"
                })
            })
            .catch(error=>{
                window.alert(error)
            })
    }

    reset = e =>{
        this.setState({
            output:"",
            answer:""
        })
    }
    
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"></input>
                    <img className={this.state.className} height="100px" width="100px" src={this.state.output}></img>
                <button type="submit">Get Answer!</button>
                <button onClick={this.reset} type="reset">Reset</button>
            </form>

        )
    }
}

export default Form;
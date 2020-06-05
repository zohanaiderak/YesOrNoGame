import React from 'react';
import axios from 'axios';
import './Page.scss'

class Form extends React.Component{
    state={
        output:"",
        answer:"",
        className: "hidden",
        question: "ASK ME"
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        axios.get('https://yesno.wtf/api/')
            .then(res =>{
                console.log(res.data)
                this.setState({
                    output : res.data.image,
                    answer : res.data.answer,
                    className: "main__gif",
                })
            })
            .catch(error=>{
                window.alert(error)
            })
        this.setState({
            question: e.target.question.value
        });
    }

    reset = e =>{
        this.setState({
            output:"",
            answer:"",
            question: 'ASK ME'
        })
    }
    
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="main">
                <div className="main__container">
                    <div className="main__item">
                        <h1 className="main__header">{this.state.question}</h1>
                    </div>
                    <div className="main__item">
                        <img className={this.state.className} src={this.state.output}></img> 
                        <input type="text" name="question" className="main__input" placeholder="ASK A YES OR NO QUESTION"></input>
                    </div>
                    <div className="main__buttons">
                        <button className="main__submit" type="submit">GET ANSWER</button>
                        <button className="main__reset" onClick={this.reset} type="reset">RESET</button>
                    </div>
                </div>
            </form>

        )
    }
}

export default Form;
import React from 'react';
import axios from 'axios';
import './Page.scss';
import Sound from 'react-sound';
import Sound1 from '../assets/audio/kids-cheering-sound-effect.mp3';
import Sound2 from '../assets/audio/nononono-cat-mp3cut.mp3';
import imageCandy from '../assets/images/is-candy-gluten-free.jpg'

class Form extends React.Component{
    state={
        output:"",
        answer:"",
        className: "hidden",
        question: "ASK ME",
        sound: "",
        classCandy: "hidden",
        classJob: "hidden"
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        axios.get('https://yesno.wtf/api/')
            .then(res =>{
                this.setState({
                    output : res.data.image,
                    answer : res.data.answer,
                    className: "main__gif",
                })
                if (res.data.answer=="yes"){
                    this.setState({
                        sound: Sound1,
                        classJob : "visible",
                        classCandy: "hidden"
                    })
                } else if(res.data.answer=="no"){
                    this.setState({
                        sound: Sound2,
                        classCandy: "visible",
                        classJob:"hidden"
                    })
                } else{
                    this.setState({
                        sound: "https://www.youtube.com/watch?v=xUVKrQ75jVY"
                    })
                }
            })
            .catch(error=>{
                window.alert(error)
            })
        this.setState({
            question: e.target.question.value+"?"
        });
    }

    reset = e =>{
        this.setState({
            output:"",
            answer:"",
            question: 'ASK ME',
            className:"hidden",
            sound: ""
        })
    }
    
    
    render(){
        console.log()
        return(
            <form onSubmit={this.handleSubmit} className="main">
                <div className="main__container">
                    <div className="main__item">
                        <h1 className="main__header">{this.state.question}</h1>
                    </div>
                    <div className="main__item">
                        <img className={this.state.className} src={this.state.output}></img> 
                        <input type="text" name="question" className="main__input" placeholder="ASK A YES OR NO QUESTION" required></input>
                    </div>
                    {/* <div className={this.state.classJob}>
                        <h1>Enough Play</h1>
                        <h2>Go Finish your Collab Work</h2>
                    </div> */}
                    {/* <div className={this.state.classCandy}>
                        <h1>Not Your Day?</h1>
                        <h2>Have a Candy!!!</h2>
                        <img src={imageCandy}></img>
                    </div> */}
                    <div className="main__buttons">
                        <Sound url={this.state.sound} playStatus={Sound.status.PLAYING} />
                        <button className="main__submit" type="submit">GET ANSWER</button>
                        <button className="main__reset" onClick={this.reset} type="reset">RESET</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;
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
                    className: "visible"
                })
                if(res.data.answer=="yes"){
                    this.setState({
                        sound : Sound1,
                        classJob : "visible",
                        classCandy: "hidden"
                    })
                }
                else if(res.data.answer=="no"){
                    this.setState({
                        sound : Sound2,
                        classCandy: "visible",
                        classJob:"hidden"
                    })
                }else{
                    this.setState({
                        sound : "https://www.youtube.com/watch?v=xUVKrQ75jVY"
                    })
                }
            })
            .catch(error=>{
                window.alert(error)
            })
    }

    reset = e =>{
        this.setState({
            output:"",
            answer:"",
            className:"hidden"
        })
    }
    
    
    render(){
        console.log()
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"></input>
                    <h1>{this.state.answer}</h1>
                    <img className={this.state.className} height="100px" width="100px" src={this.state.output}></img>
                <button type="submit">Get Answer!</button>
                <Sound url={this.state.sound} playStatus={Sound.status.PLAYING} />
                <div className={this.state.classJob}>
                    <h1>Enough Play</h1>
                    <h2>Go Finish your Collab Work</h2>
                </div>
                <div className={this.state.classCandy}>
                    <h1>Not Your Day?</h1>
                    <h2>Have a Candy!!!</h2>
                    <img src={imageCandy}></img>
                </div>
                <button onClick={this.reset} type="reset">Reset</button>
                
            </form>
        )
    }
}

export default Form;
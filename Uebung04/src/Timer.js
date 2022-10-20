import React, {Component} from 'react';

class Timer extends Component{
    constructor(props) {
        super(props);
        this.countdown = props.countdown

        this.state = {time: this.countdown};

        this.click = this.click.bind(this);
        this.updateTime = this.updateTime.bind(this);

    }

    click() {
        this.setState({time: this.countdown});
        clearInterval(this.interval);
        this.interval = setInterval(this.updateTime, 1000);
    }



    //componentDidMount() {this.interval=setInterval(this.updateTime,500);}

    //componentWillUnmount() {clearInterval(this.interval);}

    updateTime() {
        
        if (this.state.time == 1) {
            this.setState({time: "FERTIG"});
            clearInterval(this.interval);
        }
       
        else {
            this.setState({time: this.state.time - 1});
        };
    }

    
    render() {
        return(<>
            <div>
                <h1>Countdown von {this.countdown}</h1>
            </div>
            <div>
                {this.state.time}
            </div>
            <div>
                <button onClick={this.click}>Start</button>
            </div>
        </>)
    }
}
export default Timer;

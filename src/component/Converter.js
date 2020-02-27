import React, {Component} from "react";

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyA_value: "",
            currencyB_value: 0
        };

        this.converter = this.converter.bind(this);
    }

    converter() {
        let query = `${this.props.currencyA}_${this.props.currencyB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=31273179902d64f02f59`;

        fetch(url).then(res => {
            return res.json();
        }).then(json => {
            let currency = json[query];
            let currencyB_value = (parseFloat(this.state.currencyA_value * currency).toFixed(2));
            this.setState({currencyB_value});
        })
    }

    render() {
        return (
            <div className="converter">
                <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
                <input type="text" onChange={(event => {
                    this.setState({currencyA_value: event.target.value})
                })}/>
                <input type="button" value="Converter" onClick={this.converter}/>
                <h2>Converted value: {this.state.currencyB_value}</h2>
            </div>
        )
    }
}
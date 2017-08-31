import React, { Component } from 'react';
import $ from 'jquery';

export default class Card extends Component {

    
constructor() {
    super();
    this.state = { lista : [] };
  }

    componentDidMount() {
      $.ajax({
          url:"https://raw.githubusercontent.com/gcpereira/selecaoCaixaSeguradora/master/cards.json",
          dataType: 'json',
          success:function(resposta){
          this.setState ({lista:resposta});
          }.bind(this)
        }
      );
  }


    render() {

        var divStyle = {
            width: '20rem'
        };

        return(
          <div>
              {
                this.state.lista.map(function(cardItem){
                    return (
                            <div key={cardItem.title} className="card cardTemplate" style={divStyle}>
                                <div className="card-body">
                                    <h4 className="title">{cardItem.title}</h4>
                                    <h6 className="subtitle mb-2 text-muted">{cardItem.subtitle}</h6>
                                    <p className="text">{cardItem.text}</p>
                                    <a href="#" className="link">{cardItem.link}</a>
                                </div>
                            </div>
                        );
                    })
                }
          </div>
      );
    }
}

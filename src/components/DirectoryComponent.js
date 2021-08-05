import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
    };
  }

  renderSelectedCard(newCard) {
    if (newCard) {
      return (
        <Card>
          <CardImg top src={newCard.image} alt={newCard.name} />
          <p>{newCard.value}</p>
        </Card>
      );
    }
    return <div />;
  }

  onCardSelect(newCard) {
    this.setState({ selectedCard: newCard });
  }

  render() {
    let randomCardNum = Math.floor(Math.random() * 51);
    let card = this.props.cards[randomCardNum];
    let cardSelected = this.renderSelectedCard(this.state.selectedCard);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row ml-2">
            <Card className="col-sm-2">
              <CardImg src="../assets/images/blue_back.jpg" />
            </Card>
            <Card
              key={card.id}
              className="col-sm-2"
              onClick={() => this.onCardSelect(card)}
            >
              <CardImg src={card.image} alt={card.name} />
            </Card>
            <Card className="col-sm-2">{cardSelected}</Card>
          </div>
        </div>
      </React.Fragment>
    );

    // const cardDeck = this.cardDeck();

    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-3">
    //                 {cardDeck}
    //             </div>
    //         </div>
    //         <div className="row">

    //         </div>
    //         <div className="row">
    //             <div className="col-md-3 m-1">
    //                 {this.renderSelectedCard(this.state.selectedCard)}
    //             </div>
    //         </div>
    //     </div>
    // );
    // generateCardDeck() {
    //     const cardImgDeck = this.props.cards.map(card => {
    //         return (
    //             <div key={card.id} className="col-sm-3">
    //                 <Card onClick={() => this.onCardSelect(card)}>
    //                     <CardImg width="100%" src={card.image} alt={card.name} />
    //                     <p>{card.value}</p>
    //                 </Card>
    //             </div>
    //         );
    //     });
    // }
  }
}

export default Directory;

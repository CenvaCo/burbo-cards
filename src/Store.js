import {

  Names,
  CardsText,
  Short,
  Wounds,
  Masks
} from "./static/card-library";
import * as Pako from 'pako';

class Store {
  constructor() {
    let Cards = [],
      key = 0,
      i = 0;
    for (let value of CardsText) {
      i = 0;
      key++;
      for (let card of value) {
        Cards.push({
          type: key,
          id: Short[key - 1] + i++,
          text: card,
          onDesk: false
        });
      }

    }

    // const cardSet = store.cards.map((item, index) => ({
    //   id: item.id,
    //   type: item.type,
    //   onDesk: true,
    //   original: item
    // }));
    // return {
    //   cardSet: cardSet,
    //   store,
    //   searchParams: {
    //     hash: "",
    //     user: ""
    //   }
    // };


    this.wounds = Wounds;
    this.masks = Masks;
    this.cards = Cards;
    this.state = {
      cards: Cards,
    }
  }
  updateFromBase64() {
    const base64 = window.location.hash.slice(1);

    if (!base64) return;
    try {
      const zipped = window.atob(base64);
      const decoded = this.decode(zipped) || '';
      console.log('dec',decoded)
      this.state.cards.forEach(card => {
        card.onDesk = decoded.includes(card.id)
      });
    } catch (err) {
      console.error('hash parse:', err);
    }
  }
  test () {
    const zip = this.encode({a:1});
    console.log('decod', zip, this.decode(zip))
    const base64 = window.btoa(zip);

    if (!base64) return;
    try {
      const zipped = window.atob(base64);
      const decoded = this.decode(zipped) || '';
      console.log('dec',decoded)
    
    } catch (err) {
      console.error('hash parse:', err);
    }
  }
  updateBase64Url() {
    const zip = this.encode(this.state);
    window.location.hash = window.btoa(zip);
    // this.test()

  }
  encode(dataObject) {
    return Pako.deflate(JSON.stringify(dataObject), {
      to: 'string'
    });

  }
  decode(binaryString) {
    
    return JSON.parse(Pako.inflate(binaryString, {
      to: 'string'
    }));
  }


}
export default Store;
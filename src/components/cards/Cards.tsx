import { PureComponent, type ReactNode } from 'react';
import type { Character } from '../../interfaces/apiInterface';

interface Props {
  cards: Character[];
}

class Cards extends PureComponent<Props, object> {
  render(): ReactNode {
    return (
      <ul>
        {this.props.cards.map((card) => (
          <div key={card.id}>
            <li>{card.name}</li>
            <div
              className="w-full h-64 bg-cover bg-center bg-no-repeat"
              style={{ backgroundColor: `url(${card.image})` }}
            ></div>
          </div>
        ))}
      </ul>
    );
  }
}
export default Cards;

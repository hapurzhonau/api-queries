import { PureComponent, type ReactNode } from 'react';
import type { Character } from '../../interfaces/apiInterface';

interface Props {
  cards: Character[];
}

class Cards extends PureComponent<Props, object> {
  render(): ReactNode {
    return (
      <ul className="grid-cols-4 gap-4" style={{ display: 'grid' }}>
        {this.props.cards.map((card) => (
          <li key={card.id} className="bg-gray-700 rounded-sm p-1">
            <div
              className="aspect-square bg-contain bg-center bg-no-repeat rounded-t-sm"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <p>{card.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Cards;

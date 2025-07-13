import { Component, type ReactNode } from 'react';
import Search from '../components/search/Search';
import Cards from '../components/cards/Cards';
import { getAllCharacters } from '../api/Api';
import type { Character } from '../interfaces/apiInterface';
import ButtonError from '../components/buttonError/ButtonError';

interface State {
  cards: Character[];
  isLoading: boolean;
  searchValue: string;
}

class MainPage extends Component {
  state: State = { cards: [], isLoading: false, searchValue: '' };
  handleGetSearchValue = (value: string) => {
    this.setState({ searchValue: value }, () => {
      localStorage.setItem('search', value);
      this.getCharacters();
    });
  };
  componentDidMount(): void {
    this.getCharacters();
  }
  getCharacters = async () => {
    this.setState((prev) => ({ ...prev, isLoading: true }));
    const characters = await getAllCharacters();
    if (!characters) return;
    this.setState((prev) => ({
      ...prev,
      isLoading: false,
      cards: characters.results,
    }));
  };
  render(): ReactNode {
    const { cards, isLoading } = this.state;
    console.log(this.state);
    return (
      <main
        className="gap-8 p-8"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <ButtonError />
        <Search handleGetSearchValue={this.handleGetSearchValue} />
        {isLoading ? <div>Loading...</div> : <Cards cards={cards} />}
      </main>
    );
  }
}
export default MainPage;

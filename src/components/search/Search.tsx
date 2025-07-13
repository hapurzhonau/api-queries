import {
  Component,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react';

interface Props {
  handleGetSearchValue: (value: string) => void;
}

class Search extends Component<Props, { inputText: string }> {
  state = { inputText: '' };
  handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: e.target.value });
    console.log(this.state);
  };
  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget).get('search');
    if (formData) this.props.handleGetSearchValue(formData.toString());
  };
  render(): ReactNode {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          name="search"
          type="text"
          placeholder="..."
          className="border-2 "
          value={this.state.inputText}
          onChange={this.handleOnchange}
        />
        <button className="border-2 cursor-pointer">Search</button>
      </form>
    );
  }
}
export default Search;

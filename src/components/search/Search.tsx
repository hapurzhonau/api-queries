import { useState, type ChangeEvent, type FormEvent } from 'react';

interface Props {
  handleGetSearchValue: (value: string) => void;
}

export const Search = ({ handleGetSearchValue }: Props) => {
  const [inputState, setInputState] = useState(
    localStorage.getItem('search') || ''
  );
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget).get('search');
    if (formData) handleGetSearchValue(formData.toString());
    else handleGetSearchValue('');
  };
  return (
    <form onSubmit={handleFormSubmit} className="gap-3 flex justify-center">
      <input
        name="search"
        type="text"
        placeholder=" Search"
        className="border-2 rounded-sm w-sm px-2 py-1 dark:text-black text-white bg-gray-700 dark:bg-gray-200"
        value={inputState}
        onChange={handleOnchange}
      />
      <button>Search</button>
    </form>
  );
};

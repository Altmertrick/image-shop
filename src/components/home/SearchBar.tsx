import React from 'react';
import { useState } from 'react';

interface SearchBarProps {
  onSearchSubmit: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.onSearchSubmit(term);

    setTerm('');
    console.log(term);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  );
};

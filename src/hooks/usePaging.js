import { useState } from 'react';

export const usePaging = (apiFunction, page) => {

  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOffset(0);
    setPrevButton(true);
    setNextButton(false);
    apiFunction();
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = page : num = -page;

    setOffset(offset + num);
    setPrevButton(false);
    setNextButton(false);

    if(offset + 5 >= count) setNextButton(true);
    if(target.name === 'prev' && offset === 0) setPrevButton(true);
  };


  return { search, offset, count, setCount, nextButton, prevButton, handleSubmit, handleChange, handleClick };
};

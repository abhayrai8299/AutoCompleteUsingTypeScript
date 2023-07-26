import React, { useState, useEffect, ChangeEvent } from 'react';
import './autoComplete.css';

const AutoComplete = () => {
  //Creating a UseState in order to setInputVal and for filtering name
  const [inputVal, setInputVal] = useState<string>('');
  const [filterName, setFilterName] = useState<string[]>([]);

  useEffect(() => {
    const filterData = async (input: string) => {
      // fetching the Api 
      fetch('http://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch the data');
          }
          return response.json();
        })
        // if response is Ok then storing data 
        .then((data) => {
          console.log(data);
          //if user type anything and we are doing filter for filtering Name from Data
          const userName = data.map((item: { name: string }) => item.name);
          return userName.filter((username:any) =>
            username.toLowerCase().includes(input.toLowerCase())
          );
        })
        .then((data) => setFilterName(data))
        .catch((error) => {
          console.error(error.message);
        });
    };
    filterData(inputVal);
  }, [inputVal]);// this will trigger if user enter an character or type anything

  //when user change in input field then handleInpChange function call
  const handleInpChange = (event: ChangeEvent<HTMLInputElement>) => {
      const targetInput = event.target.value;
    // Allow space once the user write any character and no special Character
    if (targetInput === '' ||/^[a-zA-Z]+$/.test(targetInput) || /^[a-zA-Z]+(\s+[a-zA-Z]*)?$/.test(targetInput) ) {
      setInputVal(targetInput);
    }
  };
  return (
    <div className="container">
   <div className="inner_container">
    
   <input type="text"
        value={inputVal}
        placeholder="Search Name"
        onChange={handleInpChange}
      />
         {/*If user type anything then it will inside*/}
      {filterName.length > 0 ? (
      <ul className="filter_name_list">
      {filterName.map((userName) => {
        const firstIndex = userName.toLowerCase().indexOf(inputVal.toLowerCase());
       /**Making char bold if input char matches */
       if (firstIndex !== -1) { 
          const beforeMatchIndex = userName.slice(0, firstIndex);
          const match = userName.slice(firstIndex, firstIndex + inputVal.length);
          const anotherMatchIndex = userName.slice(firstIndex + inputVal.length);
          return (
            <li key={userName}>
              {beforeMatchIndex}
              <strong>{match}</strong>
              {anotherMatchIndex}
            </li>
          );
        } else {
          return (
            <li key={userName}>
              {userName}
            </li>
          );
        }
      })}
    </ul>
      ) : (
        //If no name exist then it will show this text
        <div>
          <p>Sorry, name doesn't exist.</p>
        </div>
      )}
    </div>
    </div>
  );
};
export default AutoComplete;
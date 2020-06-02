import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pa2'>
		  <input 
		  className='pa3 ba textBox'
		    type= 'search'
		    placeholder = 'search for tv show'
		 	onChange = {searchChange}
		  />
		</div>
	)
}

export default SearchBox;
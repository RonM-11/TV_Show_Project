import React from 'react';
import Card from './Card';

const CardList = ({ shows }) => {
	return (
		<div>
			{
				shows.map((show, i) => {
					return (
						<Card
							 key= {show.id}
							 id={show.id}
							 name= {show.name}
							 status={show.status}
							 summary={show.summary}
                             premiered={show.premiered}
                             url = {show.url}
                             image = {show.image.medium}
						 />
				)}
				)
			}
		</div>
	);
}

export default CardList;
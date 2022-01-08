import React from 'react';
import Item from './Item';

function List(props) {
    return(
        <div className='container'>
            <div className="row border py-3">
            {
                props.items.map(item => 
                    <Item 
                        key={item.id}
                        id={item.id}
                        rating={item.rating}
                        title={item.title}
                        image={item.image}
                    />    
                )
            }
            </div>
        </div>
    );
}

export default List;
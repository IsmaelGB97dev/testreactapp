import React from 'react';

function Search(props) {
    return(
        <div className="input-group my-auto">
            <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">🔎</button>
        </div>
    );
}

export default Search;
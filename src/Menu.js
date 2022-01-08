import React from "react"; 
import ModalAdd from "./ModalAdd";
import Search from './Search';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { newItemPanel: false };
        this.add = this.add.bind(this);
    }

    add() {
        document.getElementById('modalAdd').css = 'display: block';
    }

    render(){
        return (
            <div className="container bg-dark">
                <div className="row py-4">
                    <div className="col-2 text-center logo">
                        <h5 className="text-white">{this.props.title}</h5>
                    </div>
                    <div className="col-8 search">
                        <Search />
                    </div>
                    <div className="col-2 text-center actions">
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalAdd">Nuevo Libro</button>
                    </div>
                </div>
                
                <ModalAdd />
            </div>
        )
    }
}

export default Menu;
import React from 'react';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: []
        };
    }

    componentDidMount() {
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }

    render() {
        return(
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="row justify-content-center">
                    <div id={this.props.id} className='col-11 mt-5 p-2 border text-center bg-dark text-white'>
                        <img src={'images/'+this.props.image} alt={this.props.title} className='img-fluid' width="150" height="200" />
                        <h5 className='pt-2'>
                            {
                                this.state.stars.map(s => '⭐')
                            }
                        </h5>
                        <h5>{this.props.title}</h5>
                        <button type='button' className='btn btn-danger form-control mt-1'>Eliminar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item; 
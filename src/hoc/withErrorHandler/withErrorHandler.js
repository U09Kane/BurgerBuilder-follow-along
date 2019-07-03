import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';


const withErrorHandler = (InnerComponent, axios) => {
    return class extends Component{

        state = {
            error: null
        }

        componentDidMount () {
            axios.interceptors.response.use(
                req => {
                    this.setState({error: null})
            });
            axios.interceptors.response.use(
                null, error => {
                    this.setState({error: error});
            });
        }

        render () {
            return (
                <Aux>
                    <Modal show={this.state.error}>
                        {this.state.error.message}
                    </Modal>
                    <InnerComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default withErrorHandler;

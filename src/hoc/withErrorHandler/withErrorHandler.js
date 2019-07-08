import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';


const withErrorHandler = (InnerComponent, axios) => {
    return class extends Component{

        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.response.use(
                req => {
                    this.setState({error: null})
                    return req
            });
            this.reqInterceptor = axios.interceptors.response.use(
                res => res, error => {
                    this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.reqInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error? this.state.error.message: null}
                    </Modal>
                    <InnerComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default withErrorHandler;

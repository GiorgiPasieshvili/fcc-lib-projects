import { PureComponent } from 'react';
// import { Route } from 'react-router-dom';
import Calculator from '../component/Calculator';
import '../style/main.scss';

class AppRouter extends PureComponent {
    
    render() {
        return (
            <>
                <Calculator />
            </>
        )
    }
}

export default AppRouter;

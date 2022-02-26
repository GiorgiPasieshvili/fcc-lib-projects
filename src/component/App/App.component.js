import { PureComponent } from 'react';
import Calculator from '../Calculator'

/** @namespace Component/App/Component */
export class App extends PureComponent {

    render() {
        return (
            <div>
                <Calculator />
            </div>
        )
    }
}

export default App;
import {SHCont, SVGAnimate} from "./components/SHsvg";
import {h, Fragment, Component} from "preact";

export class App extends Component<any, any> {
    componentDidMount() {
        SVGAnimate()
    }

    render() {
        return (
            <Fragment>
                <SHCont/>
            </Fragment>
        );
    }
}

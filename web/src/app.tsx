import {SHCont, SVGAnimate} from "./components/SHsvg";
import {Component, Fragment, h} from "preact";
import {Projects} from "./components/projects";

export class App extends Component<any, any> {
    componentDidMount() {
        SVGAnimate();
    }

    render() {
        return (
            <Fragment>
                <SHCont/>
                <Projects/>
            </Fragment>
        );
    }
}

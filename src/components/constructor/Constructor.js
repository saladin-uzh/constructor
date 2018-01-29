import React, {Component} from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import {Help} from "./Help";
import {Publish} from "./Publish";

export class Constructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: []
        };
    }

    render() {
        return (
            <section className="constructor">
                <SideBar
                />
                <Main
                    sections={this.state.sections}
                />
                <Help/>
                <Publish/>
            </section>
        );
    }
}
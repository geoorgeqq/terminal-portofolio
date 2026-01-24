import type { JSX } from "react";

export default function Help() : JSX.Element{
    return (<div className="output-block" key="help-output">
            <div className="output-block">Use the following commands</div>
            <div className="output-block">ls - to list all the personal projects</div>
            <div className="output-block">about - learn something about me</div>
            <div className="output-block">theme - change the theme of the terminal</div>
            <div className="output-block">theme list - list of available themes</div>
          </div>)
}
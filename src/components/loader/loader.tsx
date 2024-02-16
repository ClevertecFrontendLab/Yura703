import React from 'react'
import Lottie from 'react-lottie';
import animationData from "@public/loader.json";
import "./loader.scss";

export class Loader extends React.Component {

    defaultOptions = {
        autoplay: true,
        loop: true,
        animationData: animationData
      };

    //   eventListeners = [
    //     {
    //       eventName: "loopComplete",
    //       callback: () => console.log("a loop complete")
    //     }
    //   ];

  render() {

    return (
        <div className="loader">
            <Lottie
                height={400}
                width={400}
                //eventListeners={this.eventListeners}
                options={this.defaultOptions}
            />
        </div>
      )
  }
}

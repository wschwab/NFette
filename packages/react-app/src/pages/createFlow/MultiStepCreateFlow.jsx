import React from "react";
import { useStep } from "react-hooks-helper";
import { Transition } from "react-transition-group";
import Overview from "./0-Overview/Overview";
import CreateNFT from "./1-CreateNFT/createNFT";
import ChooseCurve from "./3-ChooseCurve/chooseCurve";
import SelectPrice from "./2-SelectPrice/selectPrice";
import Review from "./4-Review/review";
import Final from "./5-Final/final";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const steps = [
  { id: "overview", image: 'Logo'},
  { id: "createNFT", image: 'Flow_logo_1'},
  { id: "selectPrice", image: 'Flow_logo_2'},
  { id: "chooseCurve", image: 'Flow_logo_3'},
  { id: "review", image: 'Flow_logo_1'},
  { id: "final", image: 'Flow_logo_2'},
];

const MultiStepCreateFlow = (props) => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  props.setCurrentStep(step)
  
  return (
    <>
      <Transition
        in={id === "overview"}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Overview navigation={navigation} />
          </div>
        )}
      </Transition>
      <Transition
        in={id === "createNFT"}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <CreateNFT navigation={navigation} />
          </div>
        )}
      </Transition>
      <Transition
        in={id === "selectPrice"}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <SelectPrice navigation={navigation} />
          </div>
        )}
      </Transition>
      
      <Transition
        in={id === "chooseCurve"}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <ChooseCurve navigation={navigation} />
          </div>
        )}
      </Transition>
      <Transition
        in={id === "review"}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Review navigation={navigation} />
          </div>
        )}
      </Transition>
      <Transition
        in={id === "final"}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Final navigation={navigation} />
          </div>
        )}
      </Transition>
    </>
  );

};

export default MultiStepCreateFlow;

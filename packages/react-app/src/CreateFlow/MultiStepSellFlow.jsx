import React from "react";
import { useStep } from "react-hooks-helper";
import { Transition } from "react-transition-group";
import Overview from "./0-Overview/Overview";
import CreateNFT from "./1-CreateNFT/createNFT";
import ChooseCurve from "./2-ChooseCurve/chooseCurve";
import ImportNFT from "./1-ImportNFT/importNFT";
import SelectPrice from "./2-SelectPrice/selectPrice";
import SetupLP from "./3-SetupLP/setupLP";
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
  { id: "overview"},
  { id: "createNFT"},
  { id: "selectPrice" },
  { id: "chooseCurve" },
  { id: "setupLP" },
  { id: "review" },
  { id: "final" },
];

const MultiStepSellFlow = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  
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
        in={id === "setupLP"}
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
            <SetupLP navigation={navigation} />
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

export default MultiStepSellFlow;

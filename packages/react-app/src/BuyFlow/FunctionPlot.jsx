// this arcan formula is shamelessly copy-pasted from https://github.com/mauriciopoppe/function-plot/issues/118#issuecomment-697965333

import React, { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';

export const FunctionPlot = React.memo(({ options }) => {
  const rootEl = useRef(null)

  useEffect(() => {
    try {
      functionPlot(Object.assign({}, options, { target: rootEl.current }))
    } catch (e) {}
  })

  return (<div ref={rootEl} />)
}, () => false)
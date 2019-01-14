import React, { useState } from 'react'
import CounterButton from 'component/Counter/CounterButton'

const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementCount = increment => setCount(count + increment)

    return (
        <div>
            <CounterButton increment={1} onClickFunction={incrementCount} />
            <CounterButton increment={10} onClickFunction={incrementCount} />
            <CounterButton increment={100} onClickFunction={incrementCount} />
            <CounterButton increment={1000} onClickFunction={incrementCount} />
            <span>{count}</span>
        </div>
    )
}

export default Counter

import React from 'react';
import Child from './child'

const parent = (props) => {
    return(
        <div>
            <Child {...props} xyz="xyz"/>
            <Child doWhatever={props.changeTheWorldEvent} title="change"/>
            <Child doWhatever={props.keepTheWorldEvent} title="keep"/>
        </div>
    )
}

export default parent;
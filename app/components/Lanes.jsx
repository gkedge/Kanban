import React from 'react';
import Lane from './Lane.jsx';

export default ({lanes}) => {
    return (
        <div className="lanes">{lanes.map(lane =>
            <Lane className="lane" data-lane-num={lane.num} key={lane.id} lane={lane} />
        )}</div>
    );
};

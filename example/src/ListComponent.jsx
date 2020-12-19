import React from 'react';
import { withActiveShortcuts } from'keypressjs-react-wrapper';

const ListComponent = ({combos}) => {
    return (
        <>
        <div>List Events</div>
        {
            combos.map((combo) => (
                {combo}
            ))
        }
        </>
    )
}

export default withActiveShortcuts(ListComponent);
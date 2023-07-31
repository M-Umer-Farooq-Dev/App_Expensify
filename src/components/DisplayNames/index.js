import React from 'react';
import DisplayNamesWithToolTip from './DisplayNamesWithTooltip';
import DisplayNamesWithoutTooltip from './DisplayNamesWithoutTooltip';
import { defaultProps, propTypes } from './displayNamesPropTypes';

function DisplayNames(props) {
    if (!props.tooltipEnabled) {
        return (
            <DisplayNamesWithoutTooltip
                fullTitle={props.fullTitle}
                textStyles={props.textStyles}
                numberOfLines={props.numberOfLines}
            />
        );
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <DisplayNamesWithToolTip {...props} />;
}

DisplayNames.propTypes = propTypes;
DisplayNames.defaultProps = defaultProps;
DisplayNames.displayName = 'DisplayNames';

export default DisplayNames;

export const selectStep = ( stepId ) =>
    ({
        type    : 'core:step:select',
        payload : { stepId },
    })

export const selectFragment = ( fragmentName ) =>
    ({
        type    : 'core:fragment:select',
        payload : { fragmentName },
    })

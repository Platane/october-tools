import stepList from 'fragment/core/stepList'

const f = x => Math.max( 1, Math.min( 5, x / 1000 ) )

const actionList = stepList => {

    let k=0

    return stepList
        .slice(0,40)
        .map( (step,i,arr) => {

            const y = k

            const delta = arr[i+1]
                ? step.date - arr[i+1].date
                : 0

            k += f( delta )

            return {
                y,
                id      : step.id,
                type    : step.action.type,
                payload : step.action.payload,
            }
        })
}
actionList.dependencies = [ stepList ]
actionList.stateless    = true

module.exports = actionList

const id = action =>
    action.payload.stepId

id.actions   = ['core:step:select']
id.initValue = null

module.exports = id

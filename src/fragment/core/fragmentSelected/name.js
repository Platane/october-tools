const name = action =>
    action.payload.fragmentName

name.actions   = ['core:fragment:select']
name.initValue = null

module.exports = name

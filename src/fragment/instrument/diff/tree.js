import diffList     from './list'
import {nest}       from 'util/object'

const diffTree = diffList =>
    nest( diffList )

diffTree.dependencies = [ diffList ]
diffTree.stateless    = true

module.exports = diffTree

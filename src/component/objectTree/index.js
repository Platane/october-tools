import Leaf                 from './leaf'
import NodeLabel            from './nodeLabel'
import treeState            from 'component/abstractTree/treeState'
import tree                 from 'component/abstractTree'


module.exports = treeState( tree( Leaf, NodeLabel ) )

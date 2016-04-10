import {transitiveReduction}    from '../../../src/web_modules/compute/graph/sugiyama/layering/transitiveReduction'
// import {changeIndex}            from '../../src/web_modules/compute/graph/basic'
// import sort                     from '../../src/web_modules/compute/graph/topologicalOrdering/kahn'

import expect from 'expect'

describe('graph', () => {

    describe('layer - transitive reduction', () => {

        it('unecessary', () => {
            const graph = [ [1], [] ]

            transitiveReduction( graph )

            expect( graph ).toEqual( [ [1], [ ] ]  )
        })

        it('reduce', () => {
            const graph = [ [1,2], [], [1] ]

            transitiveReduction( graph )

            expect( graph ).toEqual( [ [2], [], [1] ]  )
        })
    })

})

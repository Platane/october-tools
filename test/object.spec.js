import expect           from 'expect'
import * as o           from 'util/object'


describe('object utils', () => {

    describe('nest', () =>{

        it('with null', () =>{
            expect( o.nest( null ) ).toEqual( null )
        })
        it('with primitive', () =>{
            expect( o.nest( 17 ) ).toEqual( 17 )
        })
        it('with object', () =>{
            expect( o.nest( { 'A.B':17 } ) ).toEqual( { A:{ B: 17 } } )
        })
        it('with array', () =>{
            expect( o.nest( { '0.0.0':17 } ) ).toEqual( {'0':{'0':{'0':17}}} )
        })
        it('with null nested inside object', () =>{
            expect( o.nest( { 'A.B':null } ) ).toEqual( { A:{ B: null } } )
        })
        it('with object which require merge', () =>{
            expect( o.nest( { 'A.B':17,'A.C':18, } ) ).toEqual( { A:{ B: 17, C: 18 } } )
        })
        it('with object which require merge (deep)', () =>{
            expect( o.nest( { 'U.A.B':17,'U.A.C':18, } ) ).toEqual( { U:{ A:{ B: 17, C: 18 } } } )
        })
        it('with object which require flatten', () =>{
            expect( o.nest( { 'A':{ C:{F:6}, D:5 },'A.C.E':18, } ) ).toEqual( { A:{ C: {F:6, E:18 }, D: 5 } } )
        })
        it('with object with null entries', () =>{
            expect( o.nest( { 'A':1, 'B':null } ) ).toEqual( { A:1, B:null } )
        })
        xit('with object with empty array entries', () =>{
            expect( o.nest( { 'A':1, 'B':[] } ) ).toEqual( { A:1, B:[] } )
        })

    })

})

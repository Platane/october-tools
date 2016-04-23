import expect           from 'expect'
import * as o           from '../src/web_modules/utils/object'


describe('object utils', () => {

    describe('flatten', () =>{

        it('with null', () =>{
            expect( o.flatten( null ) ).toEqual( null )
        })
        it('with primitive', () =>{
            expect( o.flatten( 17 ) ).toEqual( 17 )
        })
        it('with object', () =>{
            expect( o.flatten( { A:{ B: 17 } } ) ).toEqual( { 'A.B':17 } )
        })
        it('with array', () =>{
            expect( o.flatten( [[[17]]] ) ).toEqual( { '0.0.0':17 } )
        })
        it('with null nested inside object', () =>{
            expect( o.flatten( { A:{ B: null } } ) ).toEqual( { 'A.B':null } )
        })

    })

    // describe('shortenPath', () =>{
    //
    //     it('with null', () =>{
    //         expect( o.shortenPath( null ) ).toEqual( null )
    //     })
    //     it('with primitive', () =>{
    //         expect( o.shortenPath( 17 ) ).toEqual( 17 )
    //     })
    //     it('with object', () =>{
    //         expect( o.shortenPath( { A:{ B: 17 } } ) ).toEqual( { 'A.B':17 } )
    //     })
    //     it('with array', () =>{
    //         expect( o.shortenPath( [[[17]]] ) ).toEqual( { '0.0.0':17 } )
    //     })
    //     it('with null nested inside object', () =>{
    //         expect( o.shortenPath( { A:{ B: null } } ) ).toEqual( { 'A.B':null } )
    //     })
    //     it('with complex object', () =>{
    //         expect( o.shortenPath( { A:{ B: { C: 17 }, U: 24 } } ) ).toEqual( { A:{ 'B.C':17, U:24 } } )
    //     })
    //
    // })

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

    })

    describe('diff', () =>{

        it('with null', () =>{
            expect( o.diff( null, null ) ).toEqual( null )
        })
        it('primitive change', () =>{
            expect( o.diff( null, 1 ) ).toEqual({ before:null, after:1 })
        })
        it('object did not change', () => {
            expect( o.diff( {a:1}, {a:1} ) ).toEqual( null )
        })
        it('object change', () => {
            expect( o.diff( {a:1}, {a:2} ) ).toEqual( {a:{ before:1, after:2 }} )
        })
    })

})

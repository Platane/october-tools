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
            expect( o.flatten( { A:{ B: { C: null, D:13 } } } ) ).toEqual( { 'A.B.C':null, 'A.B.D':13 } )
        })

    })

    describe('shortenPath', () =>{

        it('with null', () =>{
            expect( o.shortenPath( null ) ).toEqual( null )
        })
        it('with primitive', () =>{
            expect( o.shortenPath( 17 ) ).toEqual( 17 )
        })
        it('with object', () =>{
            expect( o.shortenPath( { A:{ B: 17 } } ) ).toEqual( { 'A.B':17 } )
        })
        it('with array', () =>{
            expect( o.shortenPath( [[[17]]] ) ).toEqual( { '0.0.0':17 } )
        })
        it('with null nested inside object', () =>{
            expect( o.shortenPath( { A:{ B: null } } ) ).toEqual( { 'A.B':null } )
        })
        it('with deep nested object', () =>{
            expect( o.shortenPath( { A:{ B: { C: { D: 5 } } } } ) ).toEqual( { 'A.B.C.D':5 } )
        })
        it('with complex object 3', () =>{
            expect( o.shortenPath( { A:{ B: 13, U: 24 } } ) ).toEqual( { A:{ B:13, U:24 } } )
        })
        it('with complex object', () =>{
            expect( o.shortenPath( { A:{ B: { C: 17 }, U: 24 } } ) ).toEqual( { A:{ 'B.C':17, U:24 } } )
        })
        it('with complex object 2', () =>{
            const A = {
                a : {
                    b: {
                        c:{
                            d: 5
                        }
                    },
                    u: {
                        z: 7
                    }
                },
                g:3
            }
            const B = {
                a:{
                    'b.c.d':5,
                    'u.z':7,
                },
                g:3,
            }
            expect( o.shortenPath( A ) ).toEqual( B )
        })

    })

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

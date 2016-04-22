import expect           from 'expect'
import * as o           from '../src/web_modules/utils/object'


describe('object utils', () => {

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

    })

    describe('enlargePath', () =>{

        it('with null', () =>{
            expect( o.enlargePath( null ) ).toEqual( null )
        })
        it('with primitive', () =>{
            expect( o.enlargePath( 17 ) ).toEqual( 17 )
        })
        it('with object', () =>{
            expect( o.enlargePath( { 'A.B':17 } ) ).toEqual( { A:{ B: 17 } } )
        })
        it('with array', () =>{
            expect( o.enlargePath( { '0.0.0':17 } ) ).toEqual( {'0':{'0':{'0':17}}} )
        })
        it('with null nested inside object', () =>{
            expect( o.enlargePath( { 'A.B':null } ) ).toEqual( { A:{ B: null } } )
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

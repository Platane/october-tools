
const type = A =>
    typeof A != 'object' || !A
        ? 'primitive'
        : Array.isArray( A )
            ? 'array'
            : 'object'

const diffArray = ( equal, A, B ) => {

    const diff     = []

    A.forEach( (item, i_a) => {

        if ( equal( B[i_a], item ) )
            return

        const i_b = B.findIndex( x => equal( x, item ) )

        diff.push({
            i_a,
            i_b : i_b >=0 ? i_b : null,
            item
        })

    })

    B.forEach( (item, i_b) => {

        if ( B.some( x => equal( item, x ) ) )
            return

        diff.push({
            i_a: null,
            i_b,
            item
        })
    })

    return diff
}

const diffObject = ( equal, A, B ) => {

    const o = {}

    Object.keys( A )
        .filter( name => !equal( A, B ) )
        .forEach( name => {

            switch( type( A ) ){
                case 'primitive' : o[name] = { before: A[name], after: B[name] }
                case 'array'     : o[name] = diffArray( equal, A, B )
                case 'object'    : o[name] = diffObject( equal, A, B )
            }
        })

    return o
}

export const diff = ( equal, A, B ) => {

    switch( type( A ) ){
        case 'primitive' : return { before: A, after: B }
        case 'array'     : return diffArray( equal, A, B )
        case 'object'    : return diffObject( equal, A, B )
    }
}

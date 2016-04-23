// { A:{ B: 17 } } => { A.B: 17 }
export const shortenPath = ( A, path=[] ) => {
    if ( !A || typeof A != 'object' )
        return path.length==0
            ? A
            : { [path.join('.')]: A }

    const keys = Object.keys( A )
    switch( keys.length ){
        case 0 : return null
        case 1 : return shortenPath( A[ keys[0] ], [...path, keys[0] ] )
        default :
            const o = {}
            keys
                .forEach( key => {

                    const p = shortenPath( key )

                    if ( p )
                        o[ key ] = p
                })

            return o
    }
}

// { A:{ B: 17 } } => { A.B: 17 }
export const flatten = (A, path=[]) =>
    !A || typeof A != 'object'
        ? (
            path.length==0
                ? A
                : { [path.join('.')]: A }
        )
        : Object.keys( A )
            .reduce( (o, key) =>
                ({...o, ...flatten( A[key], [...path, key] ) })
            ,{})

// { A.B: 17 } => { A:{ B: 17 } }
export const nest = A => {

    if ( !A || typeof A != 'object' )
        return A

    const flat = flatten( A )

    const keys = Object.keys( flat )

    const res = {}

    while( keys.length ){
        const key = keys.shift()
        const path = key.split('.')

        let x=res
        while( path.length > 1 ){
            const l=path.shift()
            x = ( x[l] = x[l] || {} )
        }

        x[ path[0] ] = flat[ key ]
    }

    return res
}


const diffObject = ( A, B ) => {
    const o={}
    Object.keys({ ...A, ...B })
        .forEach( key => {
            const _diff = diff( A[key], B[key] )
            if( _diff )
                o[key] = _diff
        })
    return Object.keys( o ).length == 0
        ? null
        : o
}

export const diff = ( A, B ) =>
    A == B
        ? null
        : !A || !B || typeof A != 'object' || typeof B != 'object'
            // treat as primitive
            ? { before: A, after:B }

            // traverse
            : diffObject( A, B )

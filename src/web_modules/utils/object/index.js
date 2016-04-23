// { A:{ B: 17 } } => { A.B:17 }
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

// { A.B:17 } => { A:{ B: 17 } }
export const enlargePath = A =>
    !A || typeof A != 'object'
        ? A
        : Object.keys( A )
            .reduce( (o,key) => {

                const [head, ...tail] = key.split('.')

                o[ head ] = tail.length==0
                    ? A[key]
                    : { ...( o[ head ] || {} ), ...enlargePath( { [tail.join('.')]: A[key] } ) }

                return o

            }, {} )


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

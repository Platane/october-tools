// { A:{ B: 17 } } => { A.B: 17 }
export const shortenPath = ( A ) => {
    if ( !A || typeof A != 'object' )
        return A

    const keys = Object.keys( A )
    const res = {}

    keys
        .forEach( key => {


            const r = shortenPath( A[ key ] )

            if ( !r || typeof r != 'object' || Object.keys(r).length > 1 )
                res[ key ] = r

            else
                Object.keys(r)
                    .forEach( k => res[ key+'.'+k ] = r[k] )

        })

    return res
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
        // primitive
        return A

    const flat = flatten( A )

    const keys = Object.keys( flat )

    const res = {}

    // merge the keys
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


// {
//  'a.b.c' : { value: 1 },
//  'a.b.e' : 5,
//  'a.d'   : { value: 2 },
// }
//     ||
//     V
//
// {
//    a : {
//      b : {
//         c : 'a.b.c',
//         e : 'a.b.e',
//      },
//      d : 'a.d'
//    }
// }

export const nest = flat => {

    if ( typeof flat != 'object' || !flat )
        return flat

    const list  = Object.keys( flat ).sort()
    const o     = {}

    while ( list.length ) {
        const path = list.shift()
        const keys = path.split('.')

        let u = o
        while( keys.length ){
            const key = keys.shift()
            u = u[ key ] = u[ key ] || ( keys.length == 0 ? flat[path] : {} )
        }
    }

    return o
}

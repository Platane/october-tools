var fs = require('fs')
var pathUtils = require('path')


var fileExist = function( path ){
    try{
        fs.accessSync( path )
        return true
    } catch( err ){
        return false
    }
}

var moduleExist = function( path ){
    return path.slice(-3) != '.js'
        ? fileExist( path+'.js' ) || fileExist( path+'/index.js' )
        : fileExist( path )
}

module.exports = function () {

    var cwd = process.cwd()

    return {
        visitor:{

            ImportDeclaration: function(path, parent) {

                var src = path.node.source.value.trim()

                if ( src[0] == '.' || src[0] == '/' )
                    return

                // the directory of the current file ( from where to write the relative path )
                var fromDirectory = pathUtils.join( cwd, pathUtils.dirname( parent.file.opts.filename ) )

                // directories that may contain the file
                // ( read from the options, default is 'web_modules' )
                var rootDirectories = parent.opts && parent.opts.rootDirectories || [ 'web_modules' ]

                // test the existence of the file in each rootDirectory
                // if it exist in two directories, the first in the list have the priority
                for( var i=rootDirectories.length; i--; ) {

                    var absolute = pathUtils.join( cwd, rootDirectories[i], src )

                    if ( moduleExist( absolute ) )
                        path.node.source.value = './'+pathUtils.relative( fromDirectory, absolute )

                }
            }
        }
    }
}

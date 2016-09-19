const webpack = require ( 'webpack' )
const path = require ( 'path' )
const plugins =
[ new webpack.DefinePlugin
  ( { 'process.env':
      { 'NODE_ENV':
        JSON.stringify ( process.env.NODE_ENV || 'development' )
      }
    }
  )
]

if ( process.env.NODE_ENV === 'production' ) {
  plugins.push
  ( new webpack.optimize.UglifyJsPlugin
    ( { compress: { warnings: false } } )
  )
}

module.exports =
{ entry: './src/main.tsx'
, output:
  { path: path.resolve('build')
  , publicPath: '/build'
  , filename: 'bundle.js'
  }
, devServer: { port: 3000 }
, devtool: 'source-map'
, resolve:
  { extensions: [ '', '.js', '.ts', '.tsx' ]
  }
, module:
  { loaders:
    [ { test: /(\.js|\.ts|\.tsx)$/
      , exclude: /node_modules/
      , loader: 'ts-loader'
      }
    , { test: /\.txt$/
      , exclude: /node_modules/
      , loader: 'raw-loader'
      }
    , { test: /\.s?css$/
      , loaders: [ 'style', 'css', 'sass' ]
      }
      /*
    , { test: /\.js?$/
      , exclude: /node_modules/
      , loader: 'babel'
      , query:
        { presets: [ 'es2015', 'stage-0' ]
        , plugins: [ 'inferno' ]
        }
      }
      */
    ]
  }
, externals: { xmlhttprequest: "XMLHttpRequest" }
, plugins: plugins
}
/*

const path = require ( 'path' )

module.exports =
{ entry: './desktop/boot.tsx'
, output:
  { path: path.resolve ( __dirname, 'build' )
  , filename: 'js/app.js'
  , publicPath: '/assets/'
  }
, devtool: 'source-map'
, resolve:
  { extensions: ['', '.js', '.ts', '.tsx']
  }
, module:
  { loaders:
    [ { test: /(\.js|\.ts|\.tsx)$/
      , exclude: /node_modules/
      , loader: 'ts-loader'
      }
    , { test: /\.txt$/
      , exclude: /node_modules/
      , loader: 'raw-loader'
      }
    , { test: /\.s?css$/
      , loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  }
}
*/

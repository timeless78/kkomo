{
  mode: 'development',
  context: '/home/timeless/workspace/projects/cindy/frontend',
  output: {
    hashFunction: 'xxhash64',
    path: '/home/timeless/workspace/projects/cindy/backend/public',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/home/timeless/workspace/projects/cindy/frontend/src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/home/timeless/workspace/projects/cindy/frontend/node_modules',
      '/home/timeless/workspace/projects/cindy/frontend/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/home/timeless/workspace/projects/cindy/frontend/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/home/timeless/workspace/projects/cindy/frontend/node_modules',
      '/home/timeless/workspace/projects/cindy/frontend/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-loader/dist/index.js',
            options: {
              cacheDirectory: '/home/timeless/workspace/projects/cindy/frontend/node_modules/.cache/vue-loader',
              cacheIdentifier: '4ce3f723',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  additionalData: '\n          @import "@/assets/css/_mixins.scss";\n          @import "@/assets/css/_variables.scss";\n          @import "@/assets/css/_mediaQueries.scss";\n          @import "@/assets/css/_svg.scss";\n          @import "@/assets/css/_common.scss";\n          @import "@/assets/fontello/css/fontello.css";\n          @import "@/assets/css/reset.css";\n        '
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  additionalData: '\n          @import "@/assets/css/_mixins.scss";\n          @import "@/assets/css/_variables.scss";\n          @import "@/assets/css/_mediaQueries.scss";\n          @import "@/assets/css/_svg.scss";\n          @import "@/assets/css/_common.scss";\n          @import "@/assets/fontello/css/fontello.css";\n          @import "@/assets/css/reset.css";\n        '
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  additionalData: '\n          @import "@/assets/css/_mixins.scss";\n          @import "@/assets/css/_variables.scss";\n          @import "@/assets/css/_mediaQueries.scss";\n          @import "@/assets/css/_svg.scss";\n          @import "@/assets/css/_common.scss";\n          @import "@/assets/fontello/css/fontello.css";\n          @import "@/assets/css/reset.css";\n        '
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  additionalData: '\n          @import "@/assets/css/_mixins.scss";\n          @import "@/assets/css/_variables.scss";\n          @import "@/assets/css/_mediaQueries.scss";\n          @import "@/assets/css/_svg.scss";\n          @import "@/assets/css/_common.scss";\n          @import "@/assets/fontello/css/fontello.css";\n          @import "@/assets/css/reset.css";\n        '
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/home/timeless/workspace/projects/cindy/frontend/node_modules/babel-loader/lib/index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: '/home/timeless/workspace/projects/cindy/frontend/node_modules/.cache/babel-loader',
              cacheIdentifier: '8240ed74'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          extractComments: false
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'kkomo',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        template: '/home/timeless/workspace/projects/cindy/frontend/public/index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      {
        patterns: [
          {
            from: '/home/timeless/workspace/projects/cindy/frontend/public',
            to: '/home/timeless/workspace/projects/cindy/backend/public',
            toType: 'dir',
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                '/home/timeless/workspace/projects/cindy/frontend/public/index.html'
              ]
            },
            info: {
              minimized: true
            }
          }
        ]
      }
    ),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin(
      {
        extensions: [
          '.js',
          '.jsx',
          '.vue'
        ],
        cwd: '/home/timeless/workspace/projects/cindy/frontend',
        cache: true,
        cacheLocation: '/home/timeless/workspace/projects/cindy/frontend/node_modules/.cache/eslint/c55a93ae.json',
        context: '/home/timeless/workspace/projects/cindy/frontend',
        failOnWarning: false,
        failOnError: true,
        eslintPath: '/home/timeless/workspace/projects/cindy/frontend/node_modules/eslint',
        formatter: 'stylish'
      }
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}

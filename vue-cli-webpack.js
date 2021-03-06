let aa = {
  mode: 'development',
  context: 'E:\\涓淇℃伅\\yjsdata_front',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'E:\\涓淇℃伅\\yjsdata_front\\dist\\yjs-front',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'E:\\涓淇℃伅\\yjsdata_front\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      components: 'E:\\涓淇℃伅\\yjsdata_front\\src\\components',
      yjs: 'E:\\涓淇℃伅\\yjsdata_front\\src\\apps\\yjs',
      net: 'E:\\涓淇℃伅\\yjsdata_front\\src\\common\\net',
      utils: 'E:\\涓淇℃伅\\yjsdata_front\\src\\common\\utils',
      assets: 'E:\\涓淇℃伅\\yjsdata_front\\src\\assets',
      request: 'E:\\涓淇℃伅\\yjsdata_front\\src\\apps\\yjs\\request'
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
      'E:\\涓淇℃伅\\yjsdata_front\\node_modules',
      'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // 炉\_(銉?_/炉
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // 炉\_(銉?_/炉
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'E:\\涓淇℃伅\\yjsdata_front\\node_modules',
      'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // 炉\_(銉?_/炉
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '1413ed1b'
            }
          },
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-loader\\lib\\index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '1413ed1b'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
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
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
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
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";'
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
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  prependData: '@import "@/assets/style/varibales/index.scss";',
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
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
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
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
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
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '1cccefea'
            }
          },
          {
            loader: 'E:\\涓淇℃伅\\yjsdata_front\\node_modules\\babel-loader\\lib\\index.js'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
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
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
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
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          VUE_APP_BASE_API: '"/dev-api"',
          VUE_APP_ZHRD: '"/dev-zhrd"',
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
    /* config.plugin('html-index') */
    new HtmlWebpackPlugin(
      {
        title: '棰勫喅绠楀ぇ鏁版嵁骞冲彴',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'index'
        ],
        template: 'public/index.html',
        filename: 'index.html'
      }
    ),
    /* config.plugin('preload-index') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'index.html'
        ],
        include: {
          type: 'initial',
          entries: [
            'index'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-index') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'index.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            'index'
          ]
        }
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'E:\\涓淇℃伅\\yjsdata_front\\public',
          to: 'E:\\涓淇℃伅\\yjsdata_front\\dist\\yjs-front',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    {
      options: {}
    },
    {
      profile: false,
      handler: function () { /* omitted long function */ },
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    }
  ],
  entry: {
    index: [
      'E:\\涓淇℃伅\\yjsdata_front\\src\\apps\\yjs\\main.js'
    ]
  }
}

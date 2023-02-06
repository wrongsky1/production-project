import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[]  {
    
    const svdLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    };

    const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

    const cssLoaders =  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                },
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    
    // если не использовать тайпскрипт - нужно добавить babel-loader
    const typescriptLoader = {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
    }
    return [
        typescriptLoader,
        cssLoaders,
        svdLoader,
        fileLoader,
    ]
}
// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
import forms from 'windicss/plugin/forms'
import aspectRatio from 'windicss/plugin/aspect-ratio'
import lineClamp from 'windicss/plugin/line-clamp'
import typography from 'windicss/plugin/typography'
import frontier, {shortcuts} from './windicss-plugin-frontier.js'
import merge from 'lodash.merge'

import theme from '../content/settings/theme.json'

const extend = merge(
  {
    content: {
      empty: '" "',
      quote: 'url("/theme/images/quote.svg")'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      siteMaxWidth: '1440px',
      '2xl': '1536px'
    },
    colors: {
      theme: {
        primary: '#DA4A91',
        secondary: '#35469C',
        neutral: '#F0F4F8',
        accent: '#0673e8',
        light: '#FFFFFF',
        text: '#222222'
      },
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Scheherazade New', 'serif'],
      primary: ['"Helvetica"', 'sans-serif'],
      secondary: ['Georgia', 'serif']
    },
    spacing: {
      default: '1rem',
      128: '32rem',
      144: '36rem'
    },
    borderRadius: {
      '4xl': '2rem'
    }
  },
  theme
)

export default defineConfig({
  verbose: true,
  silent: false,
  debug: true,
  compile: true, // false: interpretation mode; true: compilation mode
  globalPreflight: true, // set preflight style is global or scoped
  globalUtility: true, // set utility style is global or scoped
  darkMode: 'class', // or 'media'
  shortcuts: {
    ...shortcuts,
  },
  extract: {
    include: ['src/**/*.{js,svelte,md}', 'content/**/*.{js,svelte,md}']
  },

  theme: { extend },

  plugins: [
    frontier,
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-shadow': {
          textShadow: "-1px -1px 0 var(--text-shadow, #000), 1px -1px 0 var(--text-shadow, #000), -1px 1px 0 var(--text-shadow, #000), 1px 1px 0 var(--text-shadow, #000)"
        },
        '.w-fit': {
          width: 'fit-content'
        },
        '.mx-fit': {
          width: 'fit-content',
          marginLeft: 'auto',
          marginRight: 'auto'
        },
        '.justify-stretch': {
          justifyContent: 'stretch'
        },
        '.with-cols-3': {
          '&:nth-of-type(3n-2)': {
            gridColumnStart: '1',
          },
          '&:nth-of-type(3n-1)':  {
            gridColumnStart: '2',
          },
          '&:nth-of-type(3n)': {
            gridColumnStart: '3',
          },
        },
        '.with-cols-4': {
          '&:nth-of-type(4n-3)': {
            gridColumnStart: '1',
          },
          '&:nth-of-type(4n-2)':  {
            gridColumnStart: '2',
          },
          '&:nth-of-type(4n-1)': {
            gridColumnStart: '3',
          },
          '&:nth-of-type(4n)': {
            gridColumnStart: '4',
          },
        }
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addUtilities, addComponents, Utility, Style }) => {
      const additionalStyles = {
        '.image-left': {
          '> *': {
            gridColumnStart: '2'
          },
          '.image': {
            gridArea: '1/1/-1/auto',
            placeSelf: 'center'
          }
        },
        '.image-cover': {
          '.image': {
            height: '100%',
            objectFit: 'cover'
          }
        },
        '.image-right': {
          '> *': {
            gridColumnStart: '1'
          },
          '.image': {
            gridArea: '1/2/-1/auto',
            placeSelf: 'center'
          }
        },
        '.btn-b-offset': {
          marginBottom: 'var(--site-margin-y)',
          '.btn': {
            marginBottom: 'calc(var(--site-margin-y) * -1)'
          }
        },
        '.btn-t-offset': {
          marginTop: 'var(--site-margin-y)',
          '.btn': {
            marginTop: 'calc(var(--site-margin-y) * -1)'
          }
        },
        '.link-b-offset': {
          marginBottom: '4rem',
          '.link': {
            marginBottom: '-4rem'
          }
        },
        '.link-t-offset': {
          marginTop: 'var(--site-margin-y)',
          '.link': {
            marginTop: 'calc(var(--site-margin-y) * -1)'
          }
        },
        '.image-b-offset': {
          marginBottom: 'var(--site-margin-y)',
          '.image': {
            marginBottom: 'calc(var(--site-margin-y) * -1)'
          }
        },
        '.image-t-offset': {
          marginTop: 'var(--site-margin-y)',
          '.image': {
            marginTop: 'calc(var(--site-margin-y) * -1)'
          }
        },
        '.image-center': {
          '.image': {
            placeSelf: 'center'
          }
        },
        '.btn-center': {
          '.btn': {
            placeSelf: 'center'
          }
        },
        '.matrix': {
          display: 'grid',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(var(--matrix-cols,2),minmax(0,max-content))',
          gridTemplateRows: 'repeat(var(--matrix-rows,0),minmax(0,max-content))',
          gridAutoFlow: 'dense',
          '> *': {
            gridColumnStart: 'span 2'
          }
        }
      }
      addUtilities(additionalStyles)
    }),
    plugin(({ addUtilities, addDynamic, variants }) => {
      addDynamic(
        'matrix-rows',
        ({ Utility }) => {
          return (
            Utility.handler
              .handleSquareBrackets()
              // .handleNumber(0, 24, 'int', (number) => `repeat(${number},minmax(0,max-content))`)
              .handleNumber(0, 24, 'int', (number) => number)
              .createProperty(['--matrix-rows'], (value) => {
                if (value === 'none') return 0
                return value + '!important'
              })
          )
        },
        {
          group: 'grid',
          completions: ['matrix-rows-{number}']
        }
      )
      addDynamic(
        'matrix-cols',
        ({ Utility }) => {
          return (
            Utility.handler
              .handleSquareBrackets()
              // .handleNumber(0, 24, 'int', (number) => `repeat(${number},minmax(0,max-content))`)
              .handleNumber(0, 24, 'int', (number) => number)
              .createProperty(['--matrix-cols'], (value) => {
                if (value === 'none') return 0
                return value
              })
          )
        },
        {
          group: 'grid',
          completions: ['matrix-cols-{number}']
        }
      )
      addDynamic(
        '?',
        ({ Utility, Style, Keyframes }) => {
          if (Utility.raw === '?') {
            return Keyframes.generate('question', {
              '0%': {
                'box-shadow':
                  'inset 4px 4px rgb(236, 15, 170), inset -4px -4px rgb(236, 15, 170)'
              },
              '100%': {
                'box-shadow':
                  'inset 8px 8px rgb(236, 15, 170), inset -8px -8px rgb(236, 15, 170)'
              }
            })
          }
        },
        {
          layer: 'utilities',
          group: 'question',
          completions: ['?']
        }
      )
    }),
    typography,
    forms,
    aspectRatio,
    lineClamp
  ]
})

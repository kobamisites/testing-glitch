import plugin from 'windicss/plugin'

function addGridAreaHelpers(addDynamic, theme) {
  addDynamic(
    'grid-area',
    ({ Utility, Property, Style }) => {
      // https://github.com/windicss/windicss/blob/main/src/lib/utilities/handler.ts
      if (Utility.amount === 'none')
        return Style(Utility.class, Property('grid-area', 'unset'))
      // const value = Utility.handler._amount
      const value = Utility.amount
      if (value) {
        return Style.generate(Utility.class, {
          'grid-area': value
        })
      }
    },
    {
      group: 'grid',
      completions: ['grid-area-{area}']
    }
  )
  // addDynamic(
  //   'area',
  //   ({ Utility, Property, Style }) => {
  //     // https://github.com/windicss/windicss/blob/main/src/lib/utilities/handler.ts
  //     if (Utility.amount === 'none') return Style(Utility.class, Property('grid-area', 'unset'))
  //     // const value = Utility.handler.handleVariable()
  //     const value = Utility.amount
  //     if (value === 'full') {
  //       return Style.generate(Utility.class, {
  //         'grid-area': 'auto / auto / -1 / -1'
  //       })
  //     }
  //     if (value) {
  //       return Style.generate(Utility.class, {
  //         'grid-area': value
  //       })
  //     }
  //   },
  //   {
  //     group: 'grid',
  //     completions: ['area-{area}']
  //   }
  // )
  addDynamic(
    'area',
    ({ Utility, Property, Style }) => {
      // https://github.com/windicss/windicss/blob/main/src/lib/utilities/handler.ts
      return Utility.handler
        .handleSquareBrackets()
        .handleNegative()
        .handleString((text) => text)
        .handleNumber(0, undefined, 'int', (number) => number)
        .createProperty(['grid-area'], (value) => {
          if (value === 'none') return 'none'
          return value
        })
    },
    {
      group: 'grid',
      completions: ['area-{area}']
    }
  )
}

export default plugin(
  ({ addUtilities, addDynamic, theme }) => {
    addGridAreaHelpers(addDynamic, theme)
  },
  {
    theme: {
      gridArea: {}
    },
    variants: {
      gridArea: ['responsive']
    }
  }
)

export const shortcuts = {
  'section-text': {
    'p,ul,h1,h2,h3,h4,h5,h6': {
      '@apply': 'm-0 px-$site-padding-x'
    },
    'h1,h2,h3,h4,h5,h6': {
      '@apply': 'my-8'
    },
    'ul': {
      '@apply': 'pl-8 md:pl-16'
    }
  },
  'section-with-text': {
    '--matrix-rows': '4',
    '@apply': 'matrix',
    '.btn': {
      '@apply': 'place-self-center'
    }
  },
  'section-with-text-centered': {
    '@apply': 'section-with-text container mx-auto place-items-center text-center',
   '.image': {
     '@apply': 'mx-auto'
   }
  },
  'section-with-text-and-image': {
   '@apply': 'section-with-text md:children:col-span-1 md:image-right',
   '.image': {
     '@apply': 'object-cover'
   }
  },
  'section-with-grid': {
   '@apply': 'section-with-text md:children:col-span-1',
  }
}

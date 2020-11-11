module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'poppins': ['Poppins', '游ゴシック', 'YuGothic', 'Noto Sans Japanese', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック','sans-serif'],
      'nothing': ['Nothing You Could Do', 'cursive'],
    },
    extend: {
      colors: {
        coral: '#f5b199',
        navy: '#243344',
        pinkgray: '#4a4242',
        loverygreen: '#628177',
        golden: '#837323',
    },
  },
    inset: {
      '0': 0,
      auto: 'auto',
      '50': '50%',
      '1/2': '50%',
    },
 
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    fontFamily: ['responsive', 'hover', 'focus'],
    color: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    display: ['responsive', 'hover', 'focus']
  },
  plugins: [],
},
}
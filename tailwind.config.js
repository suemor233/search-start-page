module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main-bk':"url('https://suemor.oss-cn-beijing.aliyuncs.com/img/wallhaven-72kejo.jpeg')"
      },
      spacing:{
        '200':'48rem'
      },
      maxWidth:{
        '200':'48rem'
      },
      inset:{
        '30%':'30%',
        '18':'18%',
      },
      flex:{
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
      },

    },
  },
  plugins: [],
}

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
      }

    },
  },
  plugins: [],
}

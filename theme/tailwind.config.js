module.exports = {
    content: [
      '../templates/**/*.html',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4A90E2',  // رنگ اصلی پروژه
          secondary: '#E94E77', // رنگ ثانویه
          background: '#F7F7F7', // پس‌زمینه کلی
          accent: '#F8B400',  // رنگ‌های کمکی
        },
        fontFamily: {
          Dana: ['Dana', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'], // برای فونت انگلیسی
        },
        spacing: {
          '128': '32rem',  // فاصله‌های سفارشی
        },
      },
    },
    plugins: [],
  }
  
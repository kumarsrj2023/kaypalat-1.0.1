/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#1AA565",
        "custom-skyblue": "rgb(53, 164, 221)",
      },
      fontSize: {
        "11": "11px",
        "13": "13px",
        "15": "15px",
        "17": "17px",
        "19": "19px",
        "21": "21px",
        "23": "23px",
        "25": "25px",
        "26": "26px",
      }
    },
  },
  plugins: [],
}


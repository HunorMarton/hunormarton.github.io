import * as sources from '../constants/sourceTypes'
import * as techs from '../constants/techTypes'
import images from './img'

export default [
  {
    title: 'Traffic Run',
    date: 'March 2021',
    link: 'https://codepen.io/HunorMarton/full/ExNzWqm',
    ...images.TrafficRun,
    sources: [
      { type: sources.YOUTUBE, id: 'JhgBwJn1bQw' },
      {
        type: sources.FREECODECAMP,
        id: 'three-js-tutorial'
      },
      { type: sources.CODEPEN, id: 'ExNzWqm' }
    ],
    techs: [techs.JAVASCRIPT, techs.THREEJS]
  },
  {
    title: 'Air Balloon',
    date: 'January 2021',
    link: 'https://codepen.io/HunorMarton/full/VwKOqdY',
    ...images.AirBalloon,
    sources: [
      { type: sources.YOUTUBE, id: 'Ymbv6m3EuNw' },
      { type: sources.CODEPEN, id: 'VwKOqdY' }
    ],
    techs: [techs.JAVASCRIPT, techs.CANVAS]
  },
  {
    title: 'Stack',
    date: 'January 2021',
    link: 'https://codepen.io/HunorMarton/full/MWjBRWp',
    ...images.Stack,
    sources: [
      { type: sources.YOUTUBE, id: 'hBiGFpBle7E' },
      {
        type: sources.FREECODECAMP,
        id: 'render-3d-objects-in-browser-drawing-a-box-with-threejs'
      },
      { type: sources.CODEPEN, id: 'MWjBRWp' }
    ],
    techs: [techs.JAVASCRIPT, techs.THREEJS]
  },
  {
    title: 'SVG Tutorial',
    date: 'December 2020',
    link: 'https://codepen.io/HunorMarton/full/PoGbgqj',
    ...images.SVGTutorial,
    sources: [
      { type: sources.YOUTUBE, id: 'kBT90nwUb_o' },
      {
        type: sources.FREECODECAMP,
        id: 'svg-tutorial-learn-to-code-images'
      },
      { type: sources.CODEPEN, id: 'PoGbgqj' }
    ],
    techs: [techs.SVG]
  },
  {
    title: 'Tilting Maze',
    date: 'November 2020',
    link: 'https://codepen.io/HunorMarton/full/VwKwgxX',
    ...images.TiltingMaze,
    sources: [
      { type: sources.YOUTUBE, id: 'bTk6dcAckuI' },
      { type: sources.CODEPEN, id: 'VwKwgxX' }
    ],
    techs: [techs.HTML, techs.JAVASCRIPT]
  },
  {
    title: 'Learn React & Vue in 20 minutes',
    date: 'November 2020',
    link: 'https://youtu.be/1lPrtceM6QQ',
    ...images.ReactAndVue,
    sources: [{ type: sources.YOUTUBE, id: '1lPrtceM6QQ' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.VUE]
  },
  {
    title: 'MC Escher Cube 23150',
    date: 'November 2020',
    link: 'https://codepen.io/HunorMarton/full/BazeOpE',
    ...images.Escher,
    sources: [
      { type: sources.YOUTUBE, id: 'cNqgatGqvC8' },
      { type: sources.CODEPEN, id: 'BazeOpE' }
    ],
    techs: [techs.CSS, techs.SCSS]
  },
  {
    title: 'Stick Hero',
    date: 'November 2020',
    link: 'https://codepen.io/HunorMarton/full/xxOMQKg',
    ...images.StickHero,
    sources: [
      { type: sources.YOUTUBE, id: 'eue3UdFvwPo' },
      { type: sources.CODEPEN, id: 'xxOMQKg' }
    ],
    techs: [techs.JAVASCRIPT, techs.CANVAS]
  },
  {
    title: 'Fading Snake',
    date: 'November 2020',
    link: 'https://codepen.io/HunorMarton/full/dyXjaza',
    ...images.FadingSnake,
    sources: [
      { type: sources.YOUTUBE, id: 'TAmYp4jKWoM' },
      { type: sources.CODEPEN, id: 'dyXjaza' }
    ],
    techs: [techs.HTML, techs.JAVASCRIPT, techs.CSS]
  },
  {
    title: 'CSS only interactive 3D die',
    date: 'October 2020',
    link: 'https://codepen.io/HunorMarton/full/mdERrLy',
    ...images.Die,
    sources: [{ type: sources.CODEPEN, id: 'mdERrLy' }],
    techs: [techs.HTML, techs.CSS, techs.SCSS]
  },
  {
    title: 'A Playful Intro to Vue',
    date: 'August 2020',
    link: 'https://skl.sh/2ERhZac',
    ...images.LearnVue,
    sources: [{ type: sources.SKILLSHARE }],
    techs: [techs.JAVASCRIPT, techs.VUE]
  },
  {
    title: 'How to Make localStorage Reactive in Vue',
    date: 'June 2020',
    link: 'https://css-tricks.com/how-to-make-localstorage-reactive-in-vue/',
    desc: 'Reactivity is one of Vue’s greatest features. It is also one of the most mysterious if you don’t know what it’s doing behind the scenes. Like, why does it work with objects and arrays and not with other things, like localStorage?',
    sources: [{ type: sources.CSSTRICKS }],
    techs: [techs.VUE, 'localStorage']
  },
  {
    title: 'Minesweeper',
    date: 'May 2020',
    link: 'https://codepen.io/HunorMarton/full/LYGYMgV',
    ...images.Minesweeper,
    sources: [{ type: sources.CODEPEN, id: 'LYGYMgV' }],
    techs: [techs.HTML, techs.JAVASCRIPT, techs.VUE, techs.PUG]
  },
  {
    title: 'Logic gate simulator',
    date: 'May 2020',
    link: 'https://hunormarton.github.io/logic-gate/',
    ...images.LogicGate,
    sources: [{ type: sources.GITHUB, id: 'logic-gate' }],
    techs: [techs.HTML, techs.JAVASCRIPT, techs.VUE, techs.SVG]
  },
  {
    title: 'Using requestAnimationFrame with React Hooks',
    date: 'August 2019',
    link: 'https://css-tricks.com/using-requestanimationframe-with-react-hooks/',
    desc: 'Animating with requestAnimationFrame should be easy, but if you haven’t read React’s documentation thoroughly then you will probably run into a few things that might cause you a headache. Here are three gotcha moments I learned the hard way.',
    sources: [{ type: sources.CSSTRICKS }],
    techs: [techs.REACT]
  },
  {
    title: 'A Playful Intro to React',
    date: 'June 2019',
    link: 'https://skl.sh/2Lw526T',
    ...images.TicTacToe,
    sources: [{ type: sources.SKILLSHARE }],
    techs: [techs.JAVASCRIPT, techs.REACT]
  },
  {
    title: 'Crossy Road',
    date: 'December 2018',
    link: 'https://codepen.io/HunorMarton/full/JwWLJo',
    ...images.CrossyRoad,
    sources: [{ type: sources.CODEPEN, id: 'JwWLJo' }],
    techs: [techs.JAVASCRIPT, techs.THREEJS]
  },
  {
    title: 'SVG Curves',
    date: 'November 2018',
    link: 'https://hunormarton.github.io/svg-curves/',
    ...images.SVGCurves,
    sources: [{ type: sources.GITHUB, id: 'svg-curves' }],
    techs: [
      techs.HTML,
      techs.JAVASCRIPT,
      techs.TYPESCRIPT,
      techs.REACT,
      techs.REDUX,
      techs.RXJS,
      techs.SVG
    ]
  },
  {
    title: 'Solitaire',
    date: 'June 2017',
    link: 'http://codepen.io/HunorMarton/full/rwpGXj/',
    ...images.Solitaire,
    sources: [{ type: sources.CODEPEN, id: 'rwpGXj' }],
    techs: [techs.HTML, techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.SVG]
  },
  {
    title: 'Task Manager',
    date: 'May 2017',
    link: 'http://codepen.io/HunorMarton/full/qmJvvY/',
    ...images.TaskManager,
    sources: [{ type: sources.CODEPEN, id: 'qmJvvY' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.RXJS]
  },
  {
    title: 'Luminosity',
    date: 'May 2017',
    link: 'http://codepen.io/HunorMarton/full/BRRLPP/',
    ...images.Luminosity,
    sources: [{ type: sources.CODEPEN, id: 'BRRLPP' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.CSS, techs.SVG]
  },
  {
    title: 'Maze',
    date: 'April 2017',
    link: 'https://hunormarton.github.io/maze/',
    ...images.Maze,
    sources: [{ type: sources.GITHUB, id: 'maze' }],
    techs: [
      techs.HTML,
      techs.JAVASCRIPT,
      techs.REACT,
      techs.REDUX,
      techs.SVG,
      'devicemotion'
    ]
  },
  {
    title: 'Compass',
    date: 'April 2017',
    link: 'https://hunormarton.github.io/compass/',
    ...images.Compass,
    sources: [{ type: sources.GITHUB, id: 'compass' }],
    techs: [techs.JAVASCRIPT, techs.REACT, 'deviceorientation']
  },
  {
    title: 'Square',
    date: 'March 2017',
    link: 'http://codepen.io/HunorMarton/full/bqWxgp',
    ...images.Square,
    sources: [{ type: sources.CODEPEN, id: 'bqWxgp' }],
    techs: [techs.PUG, techs.SCSS]
  },
  {
    title: 'Countdown',
    date: 'March 2017',
    link: 'http://codepen.io/HunorMarton/full/mWWqBv',
    ...images.Countdown,
    sources: [{ type: sources.CODEPEN, id: 'mWWqBv' }],
    techs: [techs.HTML, techs.PUG, techs.CSS, techs.SCSS]
  },
  {
    title: 'HSL Color Picker',
    date: 'March 2017',
    link: 'http://codepen.io/HunorMarton/full/dvXVvQ',
    ...images.HSL,
    sources: [{ type: sources.CODEPEN, id: 'dvXVvQ' }],
    techs: [
      techs.HTML,
      techs.JAVASCRIPT,
      techs.REACT,
      techs.REDUX,
      techs.RXJS,
      techs.SVG
    ]
  },
  {
    title: 'RGB',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/PpwRdM',
    ...images.RGB,
    sources: [{ type: sources.CODEPEN, id: 'PpwRdM' }],
    techs: [techs.CSS, 'mix-blend-mode', techs.PUG]
  },
  {
    title: 'Transpose of a matrix',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/LxqwjX',
    ...images.Transpose,
    sources: [{ type: sources.CODEPEN, id: 'LxqwjX' }],
    techs: [techs.PUG, techs.CSS]
  },
  {
    title: 'Sine',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/ggQGqQ',
    ...images.Sine,
    sources: [{ type: sources.CODEPEN, id: 'ggQGqQ' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.SVG]
  },
  {
    title: 'Redux Undo',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/wgpKGL',
    ...images.Undo,
    sources: [{ type: sources.CODEPEN, id: 'wgpKGL' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX]
  },
  {
    title: 'Text on the wall',
    date: 'January 2017',
    link: 'http://codepen.io/HunorMarton/full/EZgMGb',
    ...images.Wall,
    sources: [{ type: sources.CODEPEN, id: 'EZgMGb' }],
    techs: [techs.PUG, techs.CSS]
  },
  {
    title: 'Rotating 3D figure',
    date: 'January 2017',
    link: 'http://codepen.io/HunorMarton/full/mRbNQd',
    ...images.Figure,
    sources: [{ type: sources.CODEPEN, id: 'mRbNQd' }],
    techs: [techs.PUG, techs.CSS, techs.SCSS]
  },
  {
    title: 'Analog Text Clock',
    date: 'November 2016',
    link: 'http://codepen.io/HunorMarton/full/vyGVpX',
    ...images.Clock,
    sources: [{ type: sources.CODEPEN, id: 'vyGVpX' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.CSS]
  }
]

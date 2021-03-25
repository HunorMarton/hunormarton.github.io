import * as types from '../constants/portfolioTypes'
import * as techs from '../constants/techTypes'

import MinesweeperMedium from './img/Minesweeper-min.png'
import MinesweeperLarge from './img/Minesweeper@2x-min.png'

import LogicGateMedium from './img/LogicGate-min.png'
import LogicGateLarge from './img/LogicGate@2x-min.png'

import TicTacToeMedium from './img/TicTacToe.png'
import TicTacToeLarge from './img/TicTacToe@2x.png'

import CrossyRoadMedium from './img/CrossyRoad-min.png'

import SolitaireMedium from './img/Solitaire-min.png'
import SolitaireLarge from './img/Solitaire@2x-min.png'

import TaskManagerMedium from './img/TaskManager-min.png'
import TaskManagerLarge from './img/TaskManager@2x-min.png'

import LuminosityMedium from './img/Luminosity-min.png'
import LuminosityLarge from './img/Luminosity@2x-min.png'

import MazeMedium from './img/Maze-min.png'
import MazeLarge from './img/Maze@2x-min.png'

import CompassMedium from './img/Compass-min.png'
import CompassLarge from './img/Compass@2x-min.png'

import SVGCurvesMedium from './img/SVGCurves-min.png'
import SVGCurvesLarge from './img/SVGCurves@2x-min.png'

import SquareMedium from './img/Square-min.png'
import SquareLarge from './img/Square@2x-min.png'

import CountdownMedium from './img/Countdown-min.png'
import CountdownLarge from './img/Countdown@2x-min.png'

import HSLMedium from './img/HSL-min.png'
import HSLLarge from './img/HSL@2x-min.png'

import RGBMedium from './img/RGB-min.png'
import RGBLarge from './img/RGB@2x-min.png'

import TransposeMedium from './img/Transpose-min.png'
import TransposeLarge from './img/Transpose@2x-min.png'

import SineMedium from './img/Sine-min.png'
import SineLarge from './img/Sine@2x-min.png'

import UndoMedium from './img/Undo-min.png'
import UndoLarge from './img/Undo@2x-min.png'

import WallMedium from './img/Wall-min.png'
import WallLarge from './img/Wall@2x-min.png'

import FigureMedium from './img/Figure-min.png'
import FigureLarge from './img/Figure@2x-min.png'

import ClockMedium from './img/Clock-min.png'
import ClockLarge from './img/Clock@2x-min.png'

export default [
  {
    title: 'How to Make localStorage Reactive in Vue',
    date: 'June 2020',
    link: 'https://css-tricks.com/how-to-make-localstorage-reactive-in-vue/',
    desc:
      'Reactivity is one of Vue’s greatest features. It is also one of the most mysterious if you don’t know what it’s doing behind the scenes. Like, why does it work with objects and arrays and not with other things, like localStorage?',
    sources: [
      { type: types.CSSTRICKS, id: 'How to Make localStorage Reactive in Vue' }
    ],
    techs: [techs.VUE, 'localStorage']
  },
  {
    title: 'Minesweeper',
    date: 'May 2020',
    link: 'https://codepen.io/HunorMarton/full/LYGYMgV',
    'img@1x': MinesweeperMedium,
    'img@2x': MinesweeperLarge,
    sources: [{ type: types.CODEPEN, id: 'LYGYMgV' }],
    techs: [techs.JAVASCRIPT, techs.VUE, techs.PUG]
  },
  {
    title: 'Logic gate simulator',
    date: 'May 2020',
    link: 'https://hunormarton.github.io/logic-gate/',
    'img@1x': LogicGateMedium,
    'img@2x': LogicGateLarge,
    sources: [{ type: types.GITHUB, id: 'logic-gate' }],
    techs: [techs.JAVASCRIPT, techs.VUE, techs.SVG]
  },
  {
    title: 'Using requestAnimationFrame with React Hooks',
    date: 'August 2019',
    link:
      'https://css-tricks.com/using-requestanimationframe-with-react-hooks/',
    desc:
      'Animating with requestAnimationFrame should be easy, but if you haven’t read React’s documentation thoroughly then you will probably run into a few things that might cause you a headache. Here are three gotcha moments I learned the hard way.',
    sources: [
      {
        type: types.CSSTRICKS,
        id: 'Using requestAnimationFrame with React Hooks'
      }
    ],
    techs: [techs.REACT]
  },
  {
    title: 'A Playful Intro to React',
    date: 'June 2019',
    link: 'https://skl.sh/2Lw526T',
    'img@1x': TicTacToeMedium,
    'img@2x': TicTacToeLarge,
    sources: [{ type: types.SKILLSHARE, id: 'TicTacToe' }],
    techs: [techs.JAVASCRIPT, techs.REACT]
  },
  {
    title: 'Crossy Road',
    date: 'December 2018',
    link: 'https://codepen.io/HunorMarton/full/JwWLJo',
    'img@1x': CrossyRoadMedium,
    'img@2x': CrossyRoadMedium,
    sources: [{ type: types.CODEPEN, id: 'JwWLJo' }],
    techs: [techs.JAVASCRIPT, 'three.js']
  },
  {
    title: 'SVG Curves',
    date: 'November 2018',
    link: 'https://hunormarton.github.io/svg-curves/',
    'img@1x': SVGCurvesMedium,
    'img@2x': SVGCurvesLarge,
    sources: [{ type: types.GITHUB, id: 'svg-curves' }],
    techs: [
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
    'img@1x': SolitaireMedium,
    'img@2x': SolitaireLarge,
    sources: [{ type: types.CODEPEN, id: 'rwpGXj' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.SVG]
  },
  {
    title: 'Task Manager',
    date: 'May 2017',
    link: 'http://codepen.io/HunorMarton/full/qmJvvY/',
    'img@1x': TaskManagerMedium,
    'img@2x': TaskManagerLarge,
    sources: [{ type: types.CODEPEN, id: 'qmJvvY' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.RXJS]
  },
  {
    title: 'Luminosity',
    date: 'May 2017',
    link: 'http://codepen.io/HunorMarton/full/BRRLPP/',
    'img@1x': LuminosityMedium,
    'img@2x': LuminosityLarge,
    sources: [{ type: types.CODEPEN, id: 'BRRLPP' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.CSS3, techs.SVG]
  },
  {
    title: 'Maze',
    date: 'April 2017',
    link: 'https://hunormarton.github.io/maze/',
    'img@1x': MazeMedium,
    'img@2x': MazeLarge,
    sources: [{ type: types.GITHUB, id: 'maze' }],
    techs: [
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
    'img@1x': CompassMedium,
    'img@2x': CompassLarge,
    sources: [{ type: types.GITHUB, id: 'compass' }],
    techs: [techs.JAVASCRIPT, techs.REACT, 'deviceorientation']
  },
  {
    title: 'Square',
    date: 'March 2017',
    link: 'http://codepen.io/HunorMarton/full/bqWxgp',
    'img@1x': SquareMedium,
    'img@2x': SquareLarge,
    sources: [{ type: types.CODEPEN, id: 'bqWxgp' }],
    techs: [techs.PUG, techs.SCSS]
  },
  {
    title: 'Countdown',
    date: 'March 2017',
    link: 'http://codepen.io/HunorMarton/full/mWWqBv',
    'img@1x': CountdownMedium,
    'img@2x': CountdownLarge,
    sources: [{ type: types.CODEPEN, id: 'mWWqBv' }],
    techs: [techs.PUG, techs.CSS3, techs.SCSS]
  },
  {
    title: 'HSL Color Picker',
    date: 'March 2017',
    link: 'http://codepen.io/HunorMarton/full/dvXVvQ',
    'img@1x': HSLMedium,
    'img@2x': HSLLarge,
    sources: [{ type: types.CODEPEN, id: 'dvXVvQ' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.RXJS, techs.SVG]
  },
  {
    title: 'RGB',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/PpwRdM',
    'img@1x': RGBMedium,
    'img@2x': RGBLarge,
    sources: [{ type: types.CODEPEN, id: 'PpwRdM' }],
    techs: [techs.JAVASCRIPT, 'mix-blend-mode', techs.PUG]
  },
  {
    title: 'Transpose of a matrix',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/LxqwjX',
    'img@1x': TransposeMedium,
    'img@2x': TransposeLarge,
    sources: [{ type: types.CODEPEN, id: 'LxqwjX' }],
    techs: [techs.PUG, techs.CSS3]
  },
  {
    title: 'Sine',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/ggQGqQ',
    'img@1x': SineMedium,
    'img@2x': SineLarge,
    sources: [{ type: types.CODEPEN, id: 'ggQGqQ' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.SVG]
  },
  {
    title: 'Redux Undo',
    date: 'February 2017',
    link: 'http://codepen.io/HunorMarton/full/wgpKGL',
    'img@1x': UndoMedium,
    'img@2x': UndoLarge,
    sources: [{ type: types.CODEPEN, id: 'wgpKGL' }],
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX]
  },
  {
    title: 'Text on the wall',
    date: 'January 2017',
    link: 'http://codepen.io/HunorMarton/full/EZgMGb',
    'img@1x': WallMedium,
    'img@2x': WallLarge,
    sources: [{ type: types.CODEPEN, id: 'EZgMGb' }],
    techs: [techs.PUG, techs.CSS3]
  },
  {
    title: 'Rotating 3D figure',
    date: 'January 2017',
    link: 'http://codepen.io/HunorMarton/full/mRbNQd',
    'img@1x': FigureMedium,
    'img@2x': FigureLarge,
    sources: [{ type: types.CODEPEN, id: 'mRbNQd' }],
    techs: [techs.PUG, techs.CSS3, techs.SCSS]
  },
  {
    title: 'Analog Text Clock',
    date: 'November 2016',
    link: 'http://codepen.io/HunorMarton/full/vyGVpX',
    'img@1x': ClockMedium,
    'img@2x': ClockLarge,
    sources: [{ type: types.CODEPEN, id: 'vyGVpX' }],
    techs: [techs.JAVASCRIPT, techs.REACT]
  }
]

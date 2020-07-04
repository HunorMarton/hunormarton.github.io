import * as types from '../constants/portfolioTypes'
import * as techs from '../constants/techTypes'

import TicTacToeSmall from './img/TicTacToe@0.5x.png'
import TicTacToeMedium from './img/TicTacToe.png'
import TicTacToeLarge from './img/TicTacToe@2x.png'

import CrossyRoadSmall from './img/CrossyRoad@0.5x-min.png'
import CrossyRoadMedium from './img/CrossyRoad-min.png'

import SolitaireSmall from './img/Solitaire@0.5x-min.png'
import SolitaireMedium from './img/Solitaire-min.png'
import SolitaireLarge from './img/Solitaire@2x-min.png'

import TaskManagerSmall from './img/TaskManager@0.5x-min.png'
import TaskManagerMedium from './img/TaskManager-min.png'
import TaskManagerLarge from './img/TaskManager@2x-min.png'

import LuminositySmall from './img/Luminosity@0.5x-min.png'
import LuminosityMedium from './img/Luminosity-min.png'
import LuminosityLarge from './img/Luminosity@2x-min.png'

import MazeSmall from './img/Maze@0.5x-min.png'
import MazeMedium from './img/Maze-min.png'
import MazeLarge from './img/Maze@2x-min.png'

import CompassSmall from './img/Compass@0.5x-min.png'
import CompassMedium from './img/Compass-min.png'
import CompassLarge from './img/Compass@2x-min.png'

import SVGCurvesSmall from './img/SVGCurves@0.5x-min.png'
import SVGCurvesMedium from './img/SVGCurves-min.png'
import SVGCurvesLarge from './img/SVGCurves@2x-min.png'

import SquareSmall from './img/Square@0.5x-min.png'
import SquareMedium from './img/Square-min.png'
import SquareLarge from './img/Square@2x-min.png'

import CountdownSmall from './img/Countdown@0.5x-min.png'
import CountdownMedium from './img/Countdown-min.png'
import CountdownLarge from './img/Countdown@2x-min.png'

import HSLSmall from './img/HSL@0.5x-min.png'
import HSLMedium from './img/HSL-min.png'
import HSLLarge from './img/HSL@2x-min.png'

import RGBSmall from './img/RGB@0.5x-min.png'
import RGBMedium from './img/RGB-min.png'
import RGBLarge from './img/RGB@2x-min.png'

import TransposeSmall from './img/Transpose@0.5x-min.png'
import TransposeMedium from './img/Transpose-min.png'
import TransposeLarge from './img/Transpose@2x-min.png'

import SineSmall from './img/Sine@0.5x-min.png'
import SineMedium from './img/Sine-min.png'
import SineLarge from './img/Sine@2x-min.png'

import UndoSmall from './img/Undo@0.5x-min.png'
import UndoMedium from './img/Undo-min.png'
import UndoLarge from './img/Undo@2x-min.png'

import WallSmall from './img/Wall@0.5x-min.png'
import WallMedium from './img/Wall-min.png'
import WallLarge from './img/Wall@2x-min.png'

import FigureSmall from './img/Figure@0.5x-min.png'
import FigureMedium from './img/Figure-min.png'
import FigureLarge from './img/Figure@2x-min.png'

import ClockSmall from './img/Clock@0.5x-min.png'
import ClockMedium from './img/Clock-min.png'
import ClockLarge from './img/Clock@2x-min.png'

export default [
  {
    title: 'A Playful Intro to React',
    type: types.SKILLSHARE,
    id: 'TicTacToe',
    link: 'https://skl.sh/2Lw526T',
    'img@0.5x': TicTacToeSmall,
    'img@1x': TicTacToeMedium,
    'img@2x': TicTacToeLarge,
    date: 'June 2019',
    techs: [techs.JAVASCRIPT, techs.REACT],
  },
  {
    title: 'Crossy Road',
    type: types.CODEPEN,
    id: 'JwWLJo',
    link: 'https://codepen.io/HunorMarton/full/JwWLJo',
    'img@0.5x': CrossyRoadSmall,
    'img@1x': CrossyRoadMedium,
    'img@2x': CrossyRoadMedium,
    date: 'December 2018',
    techs: [techs.JAVASCRIPT, 'three.js'],
  },
  {
    title: 'SVG Curves',
    type: types.GITHUB,
    id: 'svg-curves',
    link: 'https://hunormarton.github.io/svg-curves/',
    'img@0.5x': SVGCurvesSmall,
    'img@1x': SVGCurvesMedium,
    'img@2x': SVGCurvesLarge,
    date: 'November 2018',
    techs: [
      techs.JAVASCRIPT,
      techs.TYPESCRIPT,
      techs.REACT,
      techs.REDUX,
      techs.RXJS,
      techs.SVG,
    ],
  },
  {
    title: 'Solitaire',
    type: types.CODEPEN,
    id: 'rwpGXj',
    link: 'http://codepen.io/HunorMarton/full/rwpGXj/',
    'img@0.5x': SolitaireSmall,
    'img@1x': SolitaireMedium,
    'img@2x': SolitaireLarge,
    date: 'June 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.SVG],
  },
  {
    title: 'Task Manager',
    type: types.CODEPEN,
    id: 'qmJvvY',
    link: 'http://codepen.io/HunorMarton/full/qmJvvY/',
    'img@0.5x': TaskManagerSmall,
    'img@1x': TaskManagerMedium,
    'img@2x': TaskManagerLarge,
    date: 'May 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.RXJS],
  },
  {
    title: 'Luminosity',
    type: types.CODEPEN,
    id: 'BRRLPP',
    link: 'http://codepen.io/HunorMarton/full/BRRLPP/',
    'img@0.5x': LuminositySmall,
    'img@1x': LuminosityMedium,
    'img@2x': LuminosityLarge,
    date: 'May 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, techs.CSS3, techs.SVG],
  },
  {
    title: 'Maze',
    type: types.GITHUB,
    id: 'maze',
    link: 'https://hunormarton.github.io/maze/',
    'img@0.5x': MazeSmall,
    'img@1x': MazeMedium,
    'img@2x': MazeLarge,
    date: 'April 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.SVG, 'devicemotion'],
  },
  {
    title: 'Compass',
    type: types.GITHUB,
    id: 'compass',
    link: 'https://hunormarton.github.io/compass/',
    'img@0.5x': CompassSmall,
    'img@1x': CompassMedium,
    'img@2x': CompassLarge,
    date: 'April 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, 'deviceorientation'],
  },
  {
    title: 'Square',
    type: types.CODEPEN,
    id: 'bqWxgp',
    link: 'http://codepen.io/HunorMarton/full/bqWxgp',
    'img@0.5x': SquareSmall,
    'img@1x': SquareMedium,
    'img@2x': SquareLarge,
    date: 'March 2017',
    techs: [techs.PUG, techs.SCSS],
  },
  {
    title: 'Countdown',
    type: types.CODEPEN,
    id: 'mWWqBv',
    link: 'http://codepen.io/HunorMarton/full/mWWqBv',
    'img@0.5x': CountdownSmall,
    'img@1x': CountdownMedium,
    'img@2x': CountdownLarge,
    date: 'March 2017',
    techs: [techs.PUG, techs.CSS3, techs.SCSS],
  },
  {
    title: 'HSL Color Picker',
    type: types.CODEPEN,
    id: 'dvXVvQ',
    link: 'http://codepen.io/HunorMarton/full/dvXVvQ',
    'img@0.5x': HSLSmall,
    'img@1x': HSLMedium,
    'img@2x': HSLLarge,
    date: 'March 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX, techs.RXJS, techs.SVG],
  },
  {
    title: 'RGB',
    type: types.CODEPEN,
    id: 'PpwRdM',
    link: 'http://codepen.io/HunorMarton/full/PpwRdM',
    'img@0.5x': RGBSmall,
    'img@1x': RGBMedium,
    'img@2x': RGBLarge,
    date: 'February 2017',
    techs: [techs.JAVASCRIPT, 'mix-blend-mode', techs.PUG],
  },
  {
    title: 'Transpose of a matrix',
    type: types.CODEPEN,
    id: 'LxqwjX',
    link: 'http://codepen.io/HunorMarton/full/LxqwjX',
    'img@0.5x': TransposeSmall,
    'img@1x': TransposeMedium,
    'img@2x': TransposeLarge,
    date: 'February 2017',
    techs: [techs.PUG, techs.CSS3],
  },
  {
    title: 'Sine',
    type: types.CODEPEN,
    id: 'ggQGqQ',
    link: 'http://codepen.io/HunorMarton/full/ggQGqQ',
    'img@0.5x': SineSmall,
    'img@1x': SineMedium,
    'img@2x': SineLarge,
    date: 'February 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, techs.SVG],
  },
  {
    title: 'Redux Undo',
    type: types.CODEPEN,
    id: 'wgpKGL',
    link: 'http://codepen.io/HunorMarton/full/wgpKGL',
    'img@0.5x': UndoSmall,
    'img@1x': UndoMedium,
    'img@2x': UndoLarge,
    date: 'February 2017',
    techs: [techs.JAVASCRIPT, techs.REACT, techs.REDUX],
  },
  {
    title: 'Text on the wall',
    type: types.CODEPEN,
    id: 'EZgMGb',
    link: 'http://codepen.io/HunorMarton/full/EZgMGb',
    'img@0.5x': WallSmall,
    'img@1x': WallMedium,
    'img@2x': WallLarge,
    date: 'January 2017',
    techs: [techs.PUG, techs.CSS3],
  },
  {
    title: 'Rotating 3D figure',
    type: types.CODEPEN,
    id: 'mRbNQd',
    link: 'http://codepen.io/HunorMarton/full/mRbNQd',
    'img@0.5x': FigureSmall,
    'img@1x': FigureMedium,
    'img@2x': FigureLarge,
    date: 'January 2017',
    techs: [techs.PUG, techs.CSS3, techs.SCSS],
  },
  {
    title: 'Analog Text Clock',
    type: types.CODEPEN,
    id: 'vyGVpX',
    link: 'http://codepen.io/HunorMarton/full/vyGVpX',
    'img@0.5x': ClockSmall,
    'img@1x': ClockMedium,
    'img@2x': ClockLarge,
    date: 'November 2016',
    techs: [techs.JAVASCRIPT, techs.REACT],
  },
]

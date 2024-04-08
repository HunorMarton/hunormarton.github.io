import { type HobbyItem, SourceType as sources, TechTypes as techs } from './types'
import TrafficRun from './images/TrafficRun.png';
// import AirBalloon from './images/AirBalloon.png';
import Stack from './images/Stack.png';
import SVGTutorial from './images/SVGTutorial.png';
import TiltingMaze from './images/TiltingMaze.png';
// import ReactAndVue from './images/ReactAndVue.png';
import Escher from './images/Escher.png';
import StickHero from './images/StickHero.png';
import FadingSnake from './images/FadingSnake.png';
import Die from './images/Die.png';
// import LearnVue from './images/LearnVue.png';
import Minesweeper from './images/Minesweeper.png';
import LogicGate from './images/LogicGate.png';
import TicTacToe from './images/TicTacToe.png';
import CrossyRoad from './images/CrossyRoad.png';
import SVGCurves from './images/SVGCurves.png';
import Solitaire from './images/Solitaire.png';
import TaskManager from './images/TaskManager.png';
// import Luminosity from './images/Luminosity.png';
import Maze from './images/Maze.png';
import Compass from './images/Compass.png';
// import Square from './images/Square.png';
import Countdown from './images/Countdown.png';
import HSL from './images/HSL.png';
// import RGB from './images/RGB.png';
// import Transpose from './images/Transpose.png';
import Sine from './images/Sine.png';
// import Undo from './images/Undo.png';
// import Wall from './images/Wall.png';
import Figure from './images/Figure.png';
import Clock from './images/Clock.png';
import Gorillas from './images/Gorillas.png';

const data: HobbyItem[] = [
    {
        title: 'Gorillas',
        date: 'February 2024',
        link: 'https://codepen.io/HunorMarton/full/jOJZqvp',
        image: Gorillas,
        sources: [
            { type: sources.YOUTUBE, id: '2q5EufbUEQk' },
            {
                type: sources.FREECODECAMP,
                id: 'gorillas-game-in-javascript'
            },
            { type: sources.GITHUB, id: 'gorillas' }
        ],
        techs: [techs.JAVASCRIPT, techs.CANVAS]
    },
    {
        title: 'SVG Tutorial',
        date: 'December 2023',
        link: 'https://svg-tutorial.com',
        image: SVGTutorial,
        sources: [
            { type: sources.YOUTUBE, id: 'kBT90nwUb_o' },
            {
                type: sources.FREECODECAMP,
                id: 'svg-tutorial-learn-to-code-images'
            },
            { type: sources.GITHUB, id: 'svg-tutorial' }
        ],
        techs: [techs.SVG, techs.ASTRO, techs.TYPESCRIPT]
    },
    {
        title: 'Traffic Run',
        date: 'March 2021',
        link: 'https://codepen.io/HunorMarton/full/ExNzWqm',
        image: TrafficRun,
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
    /*
    {
        title: 'Air Balloon',
        date: 'January 2021',
        link: 'https://codepen.io/HunorMarton/full/VwKOqdY',
        image: AirBalloon,
        sources: [
            { type: sources.YOUTUBE, id: 'Ymbv6m3EuNw' },
            { type: sources.CODEPEN, id: 'VwKOqdY' }
        ],
        techs: [techs.JAVASCRIPT, techs.CANVAS]
    },
    */

    {
        title: 'Stack',
        date: 'January 2021',
        link: 'https://codepen.io/HunorMarton/full/MWjBRWp',
        image: Stack,
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
        title: 'Tilting Maze',
        date: 'November 2020',
        link: 'https://codepen.io/HunorMarton/full/VwKwgxX',
        image: TiltingMaze,
        sources: [
            { type: sources.YOUTUBE, id: 'bTk6dcAckuI' },
            { type: sources.CODEPEN, id: 'VwKwgxX' }
        ],
        techs: [techs.HTML, techs.JAVASCRIPT]
    },
    /*
    {
        title: 'Learn React & Vue in 20 minutes',
        date: 'November 2020',
        link: 'https://youtu.be/1lPrtceM6QQ',
        image: ReactAndVue,
        sources: [{ type: sources.YOUTUBE, id: '1lPrtceM6QQ' }],
        techs: [techs.JAVASCRIPT, techs.REACT, techs.VUE]
    },
    */
    {
        title: 'MC Escher Cube 23150',
        date: 'November 2020',
        link: 'https://codepen.io/HunorMarton/full/BazeOpE',
        image: Escher,
        sources: [
            { type: sources.YOUTUBE, id: 'cNqgatGqvC8' },
            { type: sources.CODEPEN, id: 'BazeOpE' }
        ],
        techs: [techs.CSS]
    },
    {
        title: 'Stick Hero',
        date: 'November 2020',
        link: 'https://codepen.io/HunorMarton/full/xxOMQKg',
        image: StickHero,
        sources: [
            { type: sources.YOUTUBE, id: 'eue3UdFvwPo' },
            { type: sources.FREECODECAMP, id: 'javascript-game-tutorial-stick-hero-with-html-canvas' },
            { type: sources.CODEPEN, id: 'xxOMQKg' }
        ],
        techs: [techs.JAVASCRIPT, techs.CANVAS]
    },
    {
        title: 'Fading Snake',
        date: 'November 2020',
        link: 'https://codepen.io/HunorMarton/full/dyXjaza',
        image: FadingSnake,
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
        image: Die,
        sources: [{ type: sources.CODEPEN, id: 'mdERrLy' }],
        techs: [techs.HTML, techs.CSS]
    },
    /*
    {
        title: 'A Playful Intro to Vue',
        date: 'August 2020',
        link: 'https://skl.sh/2ERhZac',
        image: LearnVue,
        sources: [{ type: sources.SKILLSHARE }],
        techs: [techs.JAVASCRIPT, techs.VUE]
    },
    */
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
        image: Minesweeper,
        sources: [{ type: sources.CODEPEN, id: 'LYGYMgV' }],
        techs: [techs.HTML, techs.JAVASCRIPT, techs.VUE, techs.PUG]
    },
    {
        title: 'Logic gate simulator',
        date: 'May 2020',
        link: 'https://hunormarton.github.io/logic-gate/',
        image: LogicGate,
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
        image: TicTacToe,
        sources: [{ type: sources.SKILLSHARE }],
        techs: [techs.JAVASCRIPT, techs.REACT]
    },
    {
        title: 'Crossy Road',
        date: 'December 2018',
        link: 'https://codepen.io/HunorMarton/full/JwWLJo',
        image: CrossyRoad,
        sources: [{ type: sources.CODEPEN, id: 'JwWLJo' }],
        techs: [techs.JAVASCRIPT, techs.THREEJS]
    },
    {
        title: 'SVG Curves',
        date: 'November 2018',
        link: 'https://hunormarton.github.io/svg-curves/',
        image: SVGCurves,
        sources: [{ type: sources.GITHUB, id: 'svg-curves' }],
        techs: [
            techs.HTML,
            techs.JAVASCRIPT,
            techs.TYPESCRIPT,
            techs.REACT,
            techs.RXJS,
            techs.SVG
        ]
    },
    /*
    {
        title: 'Imperative vs Reactive',
        date: 'September 2017',
        link: 'https://codepen.io/HunorMarton/post/imperative-vs-reactive',
        desc: 'Imperative and reactive programing are two separate programing paradigms. But what is the difference, and how do they correlate with functional programing?',
        sources: [{ type: sources.CODEPENPOST, id: 'imperative-vs-reactive' }],
        techs: [techs.JAVASCRIPT, techs.RXJS]
    },
    */
    {
        title: 'Solitaire',
        date: 'June 2017',
        link: 'http://codepen.io/HunorMarton/full/rwpGXj/',
        image: Solitaire,
        sources: [{ type: sources.CODEPEN, id: 'rwpGXj' }],
        techs: [techs.HTML, techs.JAVASCRIPT, techs.REACT, techs.SVG]
    },
    /*
    {
        title: 'Handling complex mouse and touch events with RxJS',
        date: 'May 2017',
        link: 'https://codepen.io/HunorMarton/post/handling-complex-mouse-and-touch-events-with-rxjs',
        desc: 'In this tutorial we are going to create complex user interaction events like drag, drop and vertical, horizontal swipe events using the power of RxJS.',
        sources: [
            {
                type: sources.CODEPENPOST,
                id: 'handling-complex-mouse-and-touch-events-with-rxjs'
            }
        ],
        techs: [techs.JAVASCRIPT, techs.RXJS]
    },
    */
    {
        title: 'Task Manager',
        date: 'May 2017',
        link: 'http://codepen.io/HunorMarton/full/qmJvvY/',
        image: TaskManager,
        sources: [{ type: sources.CODEPEN, id: 'qmJvvY' }, {
            type: sources.CODEPENPOST,
            id: 'handling-complex-mouse-and-touch-events-with-rxjs'
        }],
        techs: [techs.JAVASCRIPT, techs.REACT, techs.RXJS]
    },
    /*
    {
        title: 'Luminosity',
        date: 'May 2017',
        link: 'http://codepen.io/HunorMarton/full/BRRLPP/',
        image: Luminosity,
        sources: [{ type: sources.CODEPEN, id: 'BRRLPP' }],
        techs: [techs.JAVASCRIPT, techs.REACT, techs.CSS, techs.SVG]
    },
    */
    {
        title: 'Maze',
        date: 'April 2017',
        link: 'https://hunormarton.github.io/maze/',
        image: Maze,
        sources: [{ type: sources.GITHUB, id: 'maze' }],
        techs: [
            techs.HTML,
            techs.JAVASCRIPT,
            techs.REACT,
            techs.SVG,
            'devicemotion'
        ]
    },
    {
        title: 'Compass',
        date: 'April 2017',
        link: 'https://hunormarton.github.io/compass/',
        image: Compass,
        sources: [{ type: sources.GITHUB, id: 'compass' }],
        techs: [techs.JAVASCRIPT, techs.REACT, 'deviceorientation']
    },
    /*
    {
        title: 'Square',
        date: 'March 2017',
        link: 'http://codepen.io/HunorMarton/full/bqWxgp',
        image: Square,
        sources: [{ type: sources.CODEPEN, id: 'bqWxgp' }],
        techs: [techs.PUG]
    },
    */
    {
        title: 'Countdown',
        date: 'March 2017',
        link: 'http://codepen.io/HunorMarton/full/mWWqBv',
        image: Countdown,
        sources: [{ type: sources.CODEPEN, id: 'mWWqBv' }],
        techs: [techs.HTML, techs.PUG, techs.CSS]
    },
    {
        title: 'HSL Color Picker',
        date: 'March 2017',
        link: 'http://codepen.io/HunorMarton/full/dvXVvQ',
        image: HSL,
        sources: [{ type: sources.CODEPEN, id: 'dvXVvQ' }],
        techs: [
            techs.HTML,
            techs.JAVASCRIPT,
            techs.REACT,
            techs.RXJS,
            techs.SVG
        ]
    },
    /*
    {
        title: 'RGB',
        date: 'February 2017',
        link: 'http://codepen.io/HunorMarton/full/PpwRdM',
        image: RGB,
        sources: [{ type: sources.CODEPEN, id: 'PpwRdM' }],
        techs: [techs.CSS, 'mix-blend-mode', techs.PUG]
    },
    {
        title: 'Transpose of a matrix',
        date: 'February 2017',
        link: 'http://codepen.io/HunorMarton/full/LxqwjX',
        image: Transpose,
        sources: [{ type: sources.CODEPEN, id: 'LxqwjX' }],
        techs: [techs.PUG, techs.CSS]
    },
    */
    {
        title: 'Sine',
        date: 'February 2017',
        link: 'http://codepen.io/HunorMarton/full/ggQGqQ',
        image: Sine,
        sources: [{ type: sources.CODEPEN, id: 'ggQGqQ' }],
        techs: [techs.JAVASCRIPT, techs.REACT, techs.SVG]
    },
    /*
    {
        title: 'Redux Undo',
        date: 'February 2017',
        link: 'http://codepen.io/HunorMarton/full/wgpKGL',
        image: Undo,
        sources: [{ type: sources.CODEPEN, id: 'wgpKGL' }],
        techs: [techs.JAVASCRIPT, techs.REACT]
    },
    {
        title: 'Text on the wall',
        date: 'January 2017',
        link: 'http://codepen.io/HunorMarton/full/EZgMGb',
        image: Wall,
        sources: [{ type: sources.CODEPEN, id: 'EZgMGb' }],
        techs: [techs.PUG, techs.CSS]
    },
    */
    {
        title: 'Rotating 3D figure',
        date: 'January 2017',
        link: 'http://codepen.io/HunorMarton/full/mRbNQd',
        image: Figure,
        sources: [{ type: sources.CODEPEN, id: 'mRbNQd' }],
        techs: [techs.PUG, techs.CSS]
    },
    {
        title: 'Analog Text Clock',
        date: 'November 2016',
        link: 'http://codepen.io/HunorMarton/full/vyGVpX',
        image: Clock,
        sources: [{ type: sources.CODEPEN, id: 'vyGVpX' }],
        techs: [techs.JAVASCRIPT, techs.REACT, techs.CSS]
    }
];

export default data;

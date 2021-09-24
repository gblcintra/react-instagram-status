import './App.scss';
import { PhotoProps, PositionStatusProps } from './interface'

let photos: PhotoProps[] = [
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 1
	},
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 2
	},
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 3
	},
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 4
	},
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 5
	},
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 6
	},
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 7
	}
];

const positionStatus: PositionStatusProps[] = [
	{
		qtd: 1,
		dasharray: 0,
		dashoffsetOne: 0,
		dashoffsetTwo: 0,
	},
	{
		qtd: 2,
		dasharray: 63,
		dashoffsetOne: -3,
		dashoffsetTwo: -60,
	},
	{
		qtd: 3,
		dasharray: 42,
		dashoffsetOne: -17,
		dashoffsetTwo: 20,
	},
	{
		qtd: 4,
		dasharray: 32,
		dashoffsetOne: -31,
		dashoffsetTwo: 6,
	},
	{
		qtd: 5,
		dasharray: 25,
		dashoffsetOne: 9,
		dashoffsetTwo: -10,
	},
	{
		qtd: 6,
		dasharray: 21,
		dashoffsetOne: -17,
		dashoffsetTwo: -1,
	},
	{
		qtd: 7,
		dasharray: 16,
		dashoffsetOne: -8,
		dashoffsetTwo: 3,
	}
]


function teste(qtd: number, index: number) {
	const position = positionStatus.find(element => element.qtd === qtd)
	const style =
		`
		.classSVG${index}{
			stroke-dasharray: ${position ? position.dasharray : 0}!important;
			stroke-dashoffset: ${position ? position.dashoffsetOne : 0}!important;
		}
		.classSVGb${index}{
			stroke-dasharray: ${position ? position.dasharray : 0}!important;
			stroke-dashoffset: ${position ? position.dashoffsetTwo : 0}!important;
		}
		`
	return style;
}

function App() {
	return (
		<div className="container">
			{photos.map((item, index) => (
				<div className="circle" key={index}>
					<img src={item.url} alt={item.name} />
					<style>
						{teste(item.qtd, index)}
					</style>
					<svg className={'svg1 classSVG'+index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<circle cx="50" cy="50" r="40" />
					</svg>
					<svg className={'svg2 classSVGb'+index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<circle cx="50" cy="50" r="40" />
					</svg>
				</div>
			))}
		</div>
	);
}

export default App;

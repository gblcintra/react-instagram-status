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
	}
];

const positionStatus: PositionStatusProps[] = [
	{
		qtd: 1,
		position: 0
	},
	{
		qtd: 2,
		position: 63
	},
	{
		qtd: 3,
		position: 42
	},
	{
		qtd: 4,
		position: 32
	},
	{
		qtd: 5,
		position: 25
	},
	{
		qtd: 6,
		position: 21
	},
	{
		qtd: 7,
		position: 16
	}
]


function teste(qtd: number){
	const position = positionStatus.find( element => element.qtd === qtd) 
	return position ? position.position : 0;
}

function App() {
	return (
		<div className="container">
			{photos.map((item, index) => (
				<div className="circle" key={index}>
					<img src={item.url} alt={item.name} />
					<style>
						{`.classSVG${index}{
							stroke-dasharray: ${teste(item.qtd)}!important
						}`}
					</style>
					<svg className={'classSVG'+index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<circle cx="50" cy="50" r="40" />
					</svg>
				</div>
			))}
		</div>
	);
}

export default App;

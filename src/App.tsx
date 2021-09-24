import './App.scss';
import { PhotoProps } from './interface'
import PositionPhoto from './components/Position' 
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

function App() {
	return (
		<div className="container">
			{photos.map((item, index) => (
				<div className="circle" key={index}>
					<img src={item.url} alt={item.name} />
					<style>
						{PositionPhoto(item.qtd, index)}
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

import './App.scss';
import { PhotoProps } from './interface'

let photos: PhotoProps[] = [
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 12
	}
];


function App() {
	return (
		<div className="container">
			{photos.map((item, index) => (
			<div className="circle" key={index}>
				<img src={item.url} alt={item.name} />
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  
					<circle cx="50" cy="50" r="40" />
				</svg>
			</div>
			))}
		</div>
	);
}

export default App;

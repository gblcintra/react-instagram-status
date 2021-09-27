
import './App.scss';
import PositionPhoto from './components/Position'
import photos from './components/Photos'


function App() {
	return (
		<div className="container">
			{photos().map((item, index) => (
				<div>
					<p className="photo_quantity">Qtd de Foto: {item.image.length}</p>
					<div className="circle" key={index}>
						<img src={item.url} alt={item.name} />
						<style>
							{PositionPhoto(item.image.length, index)}
						</style>
						<svg className={'svg1 classSVG' + index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="40" />
						</svg>
						<svg className={'svg2 classSVGb' + index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="40" />
						</svg>
					</div>
				</div>
			))}
		</div>
	);
}

export default App;

import './App.scss';
import { PhotoProps } from './interface'

let photos: PhotoProps[] = [
	{
		url: 'https://avatars.githubusercontent.com/u/15270961?v=4',
		name: 'photo',
		qtd: 12
	}
];

function renderLi(item: PhotoProps) {
	const items = []
	for (let i = 0; item.qtd > i; i++) {
		items.push(<li className='color'></li>)
	};
	return items
}

function App() {
	return (
		<div className="container">
			{photos.map((item, index) => (
				<div key={index}>
					<div className="justify-content-center">
						<div className="image_outer_container">
							{/* <div className="green_icon"></div> */}
							<div className="image_inner_container">
								<img src={item.url} alt={item.name} />
							</div>
						</div>
					</div>
					<div className="wheel">
						<ul className="umbrella" id='teste2'>
							{renderLi(item)}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}

export default App;

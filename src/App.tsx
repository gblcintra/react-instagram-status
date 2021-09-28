
import './App.scss';
import Stories from 'react-insta-stories';
import Modal from 'react-modal';
import Border from './components/Border';
import { useStory } from './context';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '0',
		overflow: 'hidden'
	},
};

function App() {
	const { toggleModal, handleSetItem, modalIsOpen, item, photos } = useStory();

	function closeModal() {
		toggleModal();
	}

	return (
		<div className="container">
			{photos.map((item, index) => (
				<div key={index}>
					<p className="photo_quantity">Qtd de Foto: {item.image.length}</p>
					<div className="circle" onClick={() => handleSetItem(item)} >
						<img src={item.url} alt={item.name} />
						<Border
							qtd={item.image.length}
							index={index}
							onRender={(photosRender, itemRender, modalOpen) => {
								console.log('callback render', {
									photosRender,
									itemRender,
									modalOpen
								});
							}}
						/>
					</div>

				</div>
			))}

			{
				item && (
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						style={customStyles}
						ariaHideApp={false}
						contentLabel="Photo"
					>
						<Stories
							stories={item.image}
							defaultInterval={1200}
							width={432}
							height={768}							
						/>
					</Modal>
				)
			}
		</div>
	);
}

export default App;

import { PositionStatusProps } from '../../interface'

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
		dasharray: 18,
		dashoffsetOne: -8,
		dashoffsetTwo: 3,
	},
	{
		qtd: 8,
		dasharray: 16,
		dashoffsetOne: -5,
		dashoffsetTwo: 5,
	},
	{
		qtd: 9,
		dasharray: 14,
		dashoffsetOne: -4,
		dashoffsetTwo: 5,
	}
]


function PositionPhoto(qtd: number, index: number) {
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

export default PositionPhoto;

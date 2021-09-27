export interface PhotoProps {
    url:string;
    name: string;
    image: imageProps[];
}

interface imageProps {
    url: string
}
export interface PositionStatusProps {
    qtd: number;
    dasharray: number;
    dashoffsetOne: number ;
    dashoffsetTwo: number ;
}

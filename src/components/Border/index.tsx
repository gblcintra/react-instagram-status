// import { FC, useEffect } from 'react';
import PositionPhoto from '../Position';
// import { useStory } from '../../context';
import { PhotoProps } from '../../interface';

interface BorderProps {
    qtd: number;
    index: number;
    onRender?: (photos: PhotoProps[], item: PhotoProps | null, modalIsOpen: boolean) => void;
}

const Border = ({ qtd, index, onRender }: BorderProps) => {
    // const { item, photos, modalIsOpen } = useStory();

    // useEffect(() => {
    //     onRender && onRender(photos, item, modalIsOpen);
    // }, []);

    return(
        <>
            <style>
                {PositionPhoto(qtd, index)}
            </style>
            <svg className={'svg1 classSVG' + index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <svg className={'svg2 classSVGb' + index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" />
            </svg>
        </>
    );
};

export default Border;

// interface StorefrontFunction<T> extends FC<T> {
//     schema?: object;
// }
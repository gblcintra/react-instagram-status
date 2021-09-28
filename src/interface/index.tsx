import { ReactNode } from 'react';

export interface PhotoProps {
    url:string;
    name: string;
    image: imageProps[];
}

interface imageProps {
    url: string;
    duration: number;
}
export interface PositionStatusProps {
    qtd: number;
    dasharray: number;
    dashoffsetOne: number ;
    dashoffsetTwo: number ;
}

export interface ContextProps {
    children: ReactNode;
}

export interface StateProps {
    modalIsOpen: boolean;
    item: PhotoProps | null;
    photos: PhotoProps[];
 }


export type Action = 
{ type: 'TOGGLE_MODAL' } | 
{ type: 'SET_ITEM', payload: { item: PhotoProps }} |
{ type: 'CURRENT_INDEX_STORY', payload: { index: number }} | 
{ type: 'SET_PHOTOS', payload: { photos: PhotoProps[] }}
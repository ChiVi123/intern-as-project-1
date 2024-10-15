import { ILocationEntity } from '~modules/location';

export interface ITabMenuContent {
    title: string;
    content: ILocationEntity[];
}
export interface ITabMenu {
    key: string;
    label: string;
    children?: ITabMenuContent[];
}

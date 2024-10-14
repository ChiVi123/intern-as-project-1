interface ILocationModal {
    id?: string;
    mark: string;
    title: string;
    content: string;
    isList?: boolean;
    category?: DocumentReference<ICategoryModal>;
    position: { top: string; left: string };
}

import 'utils/components/GenericCard/GenericCard.css';

function GenericCard({
    children,
    row,
}: {
    row: number;
    children: string | JSX.Element | JSX.Element[];
}) {
    return <section className={'card row-' + row}>{children}</section>;
}

export default GenericCard;

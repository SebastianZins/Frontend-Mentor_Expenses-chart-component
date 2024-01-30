import 'utils/components/PageLayout/PageLayout.css';

function PageLayout({
    children,
}: {
    children: string | JSX.Element | JSX.Element[];
}) {
    return <main className='page'>{children}</main>;
}

export default PageLayout;

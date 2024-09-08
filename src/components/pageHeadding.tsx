export default function PageHeadding({ title }: { title: string }): JSX.Element {
    return (
        <>
            <section className="container max-w-2xl mb-10">
                <div className='items-center'>
                    <h1 className='text-3xl font-bold text-center p-4'>{title}</h1>
                </div>
            </section>
        </>
    );
}
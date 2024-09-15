export default function PageHeadding({ title }: { title: string }): JSX.Element {
    return (
        <>
            <section className="container max-w-2xl mb-10 sm:mb-5">
                <div className='items-center'>
                    <h1 className='text-3xl font-bold text-center p-4 sm:text-2xl sm:p-2'>{title}</h1>
                </div>
            </section>
        </>
    );
}
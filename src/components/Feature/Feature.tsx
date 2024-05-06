type FeatureProps = {
    backgroundColor?: string;
    description: string;
    isReverse?: boolean;
    isWhiteText?: boolean;
    thumbnailSize?: 'sm' | 'lg';
    thumbnailUrl: string;
    thumbnailY?: 'sm' | 'lg';
    title: string;
};

function Feature({
    backgroundColor,
    description,
    isReverse = false,
    isWhiteText,
    thumbnailSize = 'sm',
    thumbnailUrl,
    thumbnailY = 'sm',
    title,
}: FeatureProps) {
    const backgroundPositionX = isReverse
        ? '[background-position-x:calc(50%-300px)]'
        : '[background-position-x:calc(50%+300px)]';
    const backgroundPositionY = {
        sm: '[background-position-y:70px]',
        lg: '[background-position-y:120px]',
    };
    const backgroundSize = {
        sm: '[background-size:300px',
        lg: '[background-size:500px]',
    };

    return (
        <section
            className={`${backgroundColor ? backgroundColor : ''} bg-no-repeat ${backgroundPositionX} ${backgroundPositionY[thumbnailY]} ${backgroundSize[thumbnailSize]} ${thumbnailUrl}`}
        >
            <div
                className={`container flex ${isReverse ? 'flex-row-reverse' : ''}`}
            >
                <div
                    className={`w-1/3 space-y-10 ${isWhiteText ? 'text-white' : ''}`}
                >
                    <h2 className="">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
}

export default Feature;

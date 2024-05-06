type ScrewProps = {
    description: string;
    thumbnailUrl: string;
    title: string;
};

function Screw({ description, thumbnailUrl, title }: ScrewProps) {
    return (
        <div className="flex items-center space-x-8">
            <img alt={title} className="w-20" src={thumbnailUrl} />
            <span>
                <b>{title}。</b>
                {description}
            </span>
        </div>
    );
}

export default Screw;

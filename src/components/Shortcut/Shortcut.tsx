type ShortcutProp = {
    text: string;
    thumbnailUrl: string;
};

function Shortcut({ text, thumbnailUrl }: ShortcutProp) {
    return (
        <div className="flex flex-col items-center justify-between space-y-6">
            <img alt={text} className="h-16" src={thumbnailUrl} />
            <span>{text}</span>
        </div>
    );
}

export default Shortcut;

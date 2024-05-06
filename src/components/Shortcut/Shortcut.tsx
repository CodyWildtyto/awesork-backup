type ShortcutProp = {
    text: string;
    thumbnailUrl: string;
};

function Shortcut({ text, thumbnailUrl }: ShortcutProp) {
    return (
        <div className="flex flex-col items-center justify-between space-y-6">
            <img alt="" className="h-16" src={thumbnailUrl} />
            <span className="">{text}</span>
        </div>
    );
}

export default Shortcut;

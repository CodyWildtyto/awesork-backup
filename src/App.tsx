import Feature from './components/Feature/Feature';
import Screw from './components/Screw/Screw';
import Shortcut from './components/Shortcut/Shortcut';

function App() {
    return (
        <>
            <section className="h-[32rem] bg-no-repeat [background-position-x:68%,calc(68%+80px)] [background-position-y:140px,190px] [background-size:280px,720px] [background-image:url('../public/assets/cover-example.png'),url('../public/assets/cover-background.png')] bg-cyan-500 text-white">
                <div className="container">
                    <p className="text-gray-200">Awesork Present</p>
                    <img
                        alt="logo-full"
                        className="w-96 mb-16"
                        src="/assets/logo-full.png"
                    />
                    <p className="text-5xl">工作，</p>
                    <p className="text-5xl">不為堆積的事焦額。</p>
                    <p className="mt-6 text-xl">LINE討論工作還能隨記待辦事項</p>
                </div>
            </section>
            <section>
                <div className="container">
                    <h1>更聰明的方法，做事更快速。</h1>
                    <div className="grid grid-cols-5 py-16">
                        <Shortcut
                            text="事項記錄"
                            thumbnailUrl="/assets/shortcut-1.png"
                        />
                        <Shortcut
                            text="對話新增"
                            thumbnailUrl="/assets/shortcut-2.png"
                        />
                        <Shortcut
                            text="任務調派"
                            thumbnailUrl="/assets/shortcut-3.png"
                        />
                        <Shortcut
                            text="待辦提醒"
                            thumbnailUrl="/assets/shortcut-4.png"
                        />
                        <Shortcut
                            text="輕易使用"
                            thumbnailUrl="/assets/shortcut-5.png"
                        />
                    </div>
                </div>
            </section>
            <Feature
                backgroundColor="bg-gray-100"
                description="隨時透過 noper 寫下任何事項，作為任務安排、或者團隊筆記，除了有足夠空間備註事情的描述外，可以為每一則事項設置參與者、分類、目標日期、以及執行狀態，方便工作夥伴和自己能輕鬆又快速查閱與管理。"
                thumbnailUrl="[background-image:url(../public/assets/feature-1.png)]"
                title="事項記錄"
            />
            <Feature
                description="現在只要在 LINE 群組輸入『noper』或縮寫『np』加上事項標題，就可以瞬間新增好一件工作待辦事項，用 @ 標註群組成員還能同時指派並通知給他們。"
                isReverse
                thumbnailUrl="[background-image:url(../public/assets/feature-2.png)]"
                title="對話新增"
            />
            <Feature
                backgroundColor="bg-gray-100"
                description="被指派事項的參與者，可以即時收到 noper 的通知，讓任務的派遣能無縫傳遞，事項建立者也能在事項執行狀態被標註完成時收到通知，再配合分類的設置，加強流程及組織上的清晰。"
                thumbnailUrl="[background-image:url(../public/assets/feature-3.png)]"
                title="任務調派"
            />
            <Feature
                description="不再擔心忙碌中忽略的通知，只要設定提醒時間，每天 noper 都會定時透過通訊軟體 LINE 報告待辦的執行程度，配合目標日期及參與者的設置，更能一目瞭然當日每個工作夥伴的事項進度。"
                isReverse
                thumbnailUrl="[background-image:url(../public/assets/feature-4.png)]"
                title="待辦提醒"
            />
            <Feature
                backgroundColor="bg-green-400"
                description="好用的工具加上便利的情境，不僅可以在瀏覽器上使用，甚至在通訊軟體 LINE 中還有量身定做的操作模式，只要將 noper 加入 LINE 群組馬上就享有所有最有效率的功能，完全免申請帳號、免安裝軟體。"
                thumbnailSize="lg"
                thumbnailUrl="[background-image:url(../public/assets/feature-5.png)]"
                thumbnailY="lg"
                title="輕易使用"
            />
            <section className="h-auto">
                <div className="container">
                    <h1>一覽實用功能。</h1>
                    <div className="grid grid-cols-3 gap-32 py-16">
                        <Screw
                            description="簡單又靈活地開啟任務以及筆記，工作夥伴能夠顯而易見了解工作狀況。"
                            thumbnailUrl="/assets/screw-1.png"
                            title="事項"
                        />
                        <Screw
                            description="事項負責人能即時透過多項功能獲取告知，讓任務傳遞無縫接軌。"
                            thumbnailUrl="/assets/screw-2.png"
                            title="參與者"
                        />
                        <Screw
                            description="將大量事項清楚分割不混淆在一起，幫助工作夥伴快速查閱內容。"
                            thumbnailUrl="/assets/screw-3.png"
                            title="分類"
                        />
                        <Screw
                            description="為事項加上時間性，經由提醒功能幫助團隊確實掌握每天任務。"
                            thumbnailUrl="/assets/screw-4.png"
                            title="目標日期"
                        />
                        <Screw
                            description="當有新增或變更事項等的行為發生時，關係的參與者可以即時收到通知。"
                            thumbnailUrl="/assets/screw-5.png"
                            title="通知"
                        />
                        <Screw
                            description="每天依設定的時間發送事項的執行程度，再三確保不再有遺漏的任務。"
                            thumbnailUrl="/assets/screw-6.png"
                            title="提醒"
                        />
                        <Screw
                            description="完美適應通訊軟體LINE，隨時能將重要事項記錄並快速查詢。"
                            thumbnailUrl="/assets/screw-7.png"
                            title="配合討論"
                        />
                        <Screw
                            description="不需繁雜的開始過程，只要在 LINE 群組一個邀請動作就可以開始。"
                            thumbnailUrl="/assets/screw-8.png"
                            title="免註冊"
                        />
                        <Screw
                            description="依照每個人的不同習慣，可以在 LINE 或者瀏覽器輕鬆使用。"
                            thumbnailUrl="/assets/screw-9.png"
                            title="跨平台"
                        />
                    </div>
                </div>
            </section>
            <section className="h-auto bg-cyan-400">
                <div className="container text-center text-5xl">
                    This service has not been available since December 2020!
                </div>
            </section>
            <section className="h-36">
                <div className="container text-center">
                    <p>Copyright © 2019 Awesork co., Ltd.</p>
                </div>
            </section>
        </>
    );
}

export default App;

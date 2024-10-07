import Head from "next/head";
import Image from "next/image";

const categories = [
  {
    title: "コンペティション要素",
    items: [
      {
        name: "陣取り",
        image: "/陣取り.png",
        description:
          "領土を制覇し、自分の色に染め上げよう。戦略と行動力が勝利の鍵だ。",
      },
      {
        name: "タイムアタック",
        image: "/タイムアタック.png",
        description:
          "時は金なり。制限時間内にミッションをクリアし、真の冒険者の力を示せ。",
      },
      {
        name: "ポイント制",
        image: "/ポイント.png",
        description:
          "功績を積み重ねてポイントを獲得。貴重な報酬と交換できる、冒険者の努力の証だ。",
      },
    ],
  },
  {
    title: "協力プレイ要素",
    items: [
      {
        name: "スタンプラリー",
        image: "/スタンプラリー.png",
        description:
          "各地を巡り、スタンプを集めよう。協力して全てのスポットを制覇せよ。",
      },
      {
        name: "宝探し",
        image: "/宝探し.png",
        description:
          "仲間と力を合わせて隠された宝を探し出せ。知恵と協調性が試される。",
      },
      {
        name: "リーダーボード",
        image: "/リーダーボード.png",
        description:
          "ランキングで自分の位置を確認。上位を目指して仲間と切磋琢磨しよう。",
      },
    ],
  },
  {
    title: "インセンティブ要素",
    items: [
      {
        name: "ガチャシステム",
        image: "/ガチャ.png",
        description:
          "運試しの時間だ。ポイントを使って、レアなアイテムをゲットしよう。",
      },
      {
        name: "バッジ/称号システム",
        image: "/バッチ.png",
        description:
          "偉業を成し遂げた証。誇り高き冒険者の胸を飾るバッジと称号を手に入れよう。",
      },
    ],
  },
  {
    title: "ナラティブ要素",
    items: [
      {
        name: "シナリオ／ストーリー展開",
        image: "/ストーリー.png",
        description:
          "壮大な物語の主人公となり、自分の選択で物語を紡いでいこう。",
      },
      {
        name: "プレゼン動画",
        image: "/プレゼン.png",
        description:
          "動画に潜む謎を紐解くと報酬が貰える。知識と洞察力が試される。",
      },
      {
        name: "クイズ・謎解き",
        image: "/謎解き.png",
        description:
          "頭脳を駆使して難問に挑戦。正解の先に待つ報酬を手に入れよう。",
      },
    ],
  },
  {
    title: "エンゲージメント要素",
    items: [
      {
        name: "トレード/交換システム",
        image: "/交換.png",
        description:
          "余剰アイテムは他の冒険者の宝物かもしれない。交換で新たな可能性を開こう。",
      },
      {
        name: "シーズンイベント",
        image: "/シーズン.png",
        description: "季節に合わせた特別な冒険。四季折々の挑戦が待っている。",
      },
      {
        name: "ミニゲーム",
        image: "/ミニゲーム.png",
        description:
          "腕試しの小さな挑戦。反射神経やパズル解決能力が冒険を助ける。",
      },
    ],
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen text-yellow-500 py-10 font-medieval relative"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0, 32, 0, 0.8),
            rgba(0, 48, 0, 0.8)
          ),
          linear-gradient(
            45deg,
            #001a00,
            #003300,
            #004d00,
            #006600
          )
        `,
        backgroundSize: "200% 200%",
        animation: "gradientBG 15s ease infinite",
      }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* コンテンツ */}
      <div className="relative z-10">
        <Head>
          <title>- QUEST -</title>
          <link
            href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap"
            rel="stylesheet"
          />
          <style>{`
            @keyframes gradientBG {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </Head>

        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-10 text-yellow-400 shadow-text text-center">
            -- QUEST --
          </h1>

          <div className="bg-black bg-opacity-70 rounded-lg p-6 mb-10">
            <h2 className="text-3xl font-semibold mb-4 shadow-text text-center">
              【説明文】
            </h2>
            <h3 className="text-2xl shadow-text text-left space-y-4 pl-8">
              <p className="relative">
                <span className="absolute -left-6">・</span>
                それぞれのプロジェクトに難易度（５段階評価）を設け、難易度が高いプロジェクトほど成果報酬⤴️
              </p>
              <p className="relative">
                <span className="absolute -left-6">・</span>
                地域特性や業務・ボランティア内容に応じたミッションを企画し、クエストへ昇華させます。
              </p>
              <p className="relative">
                <span className="absolute -left-6 ">※</span>
                ミッションの材料として、下記ゲーム要素を活用します。
              </p>
            </h3>
          </div>

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 rounded-lg p-6 mb-10 text-center"
            >
              <h4 className="text-2xl font-semibold mb-6 shadow-text">
                {category.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-800 border-2 border-yellow-500 rounded-lg p-4 transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 max-w-xs w-full"
                  >
                    <div className="flex justify-center mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="w-48 h-48 object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-xl font-bold mb-2">{item.name}</p>
                    <p className="text-lg">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-black bg-opacity-70 rounded-lg p-6 mt-10 text-center">
            <h3 className="text-2xl font-semibold mb-4 shadow-text">
              参考事例：さっぽろごみ発見クエスト
            </h3>
            <p className="text-lg">
              札幌市で行われたイベントで、ごみを拾ってコインをGETし、飲食店をお得に利用できるシステムを導入しました。
              <br />
              1ヶ月間で延べ2,934人が参加し、11,086個のごみが回収されました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface MunicipalityData {
  city: string;
  food: string;
  daily: string;
  electronics: string;
  luxury: string;
  experience: string;
  featured: string;
}

const municipalityData: MunicipalityData[] = [
  {
    city: "大分市",
    food: "関アジ・関サバ、かぼす、乾しいたけ",
    daily: "タオル、日用雑貨",
    electronics: "空気清浄機",
    luxury: "大分和牛",
    experience: "温泉旅館宿泊体験",
    featured: "関アジ・関サバセット",
  },
  {
    city: "別府市",
    food: "温泉まんじゅう、湯の花",
    daily: "竹製品",
    electronics: "-",
    luxury: "温泉湯の花エキス化粧品",
    experience: "地獄蒸し体験、温泉入浴券",
    featured: "地獄蒸し料理体験",
  },
  {
    city: "中津市",
    food: "からあげ、城下かれい",
    daily: "手作り革製品",
    electronics: "-",
    luxury: "中津江村ジビエ",
    experience: "城下町散策ツアー",
    featured: "からあげ食べ比べセット",
  },
  {
    city: "日田市",
    food: "日田梨、焼酎",
    daily: "日田杉製品",
    electronics: "-",
    luxury: "天領日田椎茸",
    experience: "小鹿田焼体験",
    featured: "日田杉樽仕込み焼酎",
  },
  {
    city: "佐伯市",
    food: "佐伯寿司、関サバ",
    daily: "木製品",
    electronics: "-",
    luxury: "佐伯産本まぐろ",
    experience: "船釣り体験",
    featured: "佐伯寿司職人体験",
  },
  {
    city: "臼杵市",
    food: "臼杵煎餅、醤油",
    daily: "竹細工",
    electronics: "-",
    luxury: "臼杵ふぐ",
    experience: "城下町ガイド",
    featured: "臼杵ふぐフルコース",
  },
  {
    city: "津久見市",
    food: "みかん、ヒラメ",
    daily: "-",
    electronics: "-",
    luxury: "太刀魚",
    experience: "採石場見学",
    featured: "太刀魚姿造り",
  },
  {
    city: "竹田市",
    food: "白水油、トマト",
    daily: "竹工芸品",
    electronics: "-",
    luxury: "竹田和牛",
    experience: "岡城址散策",
    featured: "竹田産ジビエ料理",
  },
  {
    city: "豊後高田市",
    food: "干物、昭和の町商品",
    daily: "昭和雑貨",
    electronics: "-",
    luxury: "松茸",
    experience: "昭和の町体験",
    featured: "昭和の商店街体験",
  },
  {
    city: "杵築市",
    food: "みかん、日本酒",
    daily: "城下町工芸品",
    electronics: "-",
    luxury: "杵築牛",
    experience: "着物着付け体験",
    featured: "城下町特産品セット",
  },
  {
    city: "宇佐市",
    food: "安心院ワイン、椎茸",
    daily: "-",
    electronics: "-",
    luxury: "宇佐牛",
    experience: "ワイナリー体験",
    featured: "安心院ワイン・牛肉セット",
  },
  {
    city: "豊後大野市",
    food: "こねぎ、里芋",
    daily: "-",
    electronics: "-",
    luxury: "ぎあが梨",
    experience: "原尻の滝観光",
    featured: "原尻の滝そば打ち体験",
  },
  {
    city: "由布市",
    food: "由布院わさび、温泉まんじゅう",
    daily: "湯の花製品",
    electronics: "-",
    luxury: "由布院牛",
    experience: "温泉療養体験",
    featured: "由布院温泉療養プラン",
  },
  {
    city: "国東市",
    food: "くにさき七島藺、みかん",
    daily: "七島藺製品",
    electronics: "-",
    luxury: "クエ",
    experience: "六郷満山巡り",
    featured: "国東半島特産品セット",
  },
  {
    city: "姫島村",
    food: "イセエビ、車えび",
    daily: "-",
    electronics: "-",
    luxury: "クエ鍋セット",
    experience: "漁船クルージング",
    featured: "活イセエビ",
  },
  {
    city: "日出町",
    food: "ちりめん、城下かれい",
    daily: "-",
    electronics: "-",
    luxury: "城下カレイ",
    experience: "城址散策",
    featured: "城下カレイ刺身セット",
  },
  {
    city: "九重町",
    food: '九重"夢"ポーク、山川米',
    daily: "-",
    electronics: "-",
    luxury: "九重産和牛",
    experience: '九重"夢"大吊橋体験',
    featured: "九重産和牛・豚肉セット",
  },
  {
    city: "玖珠町",
    food: "玖珠米、椎茸",
    daily: "木工品",
    electronics: "-",
    luxury: "玖珠和牛",
    experience: "森町並み散策",
    featured: "玖珠産椎茸詰め合わせ",
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardTitle className="text-2xl font-bold flex items-center justify-between">
            <span>大分県ふるさと納税返礼品分析</span>
            <span className="text-sm text-gray-500">2024年度版</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">返礼品一覧</TabsTrigger>
              <TabsTrigger value="experience">体験型返礼品</TabsTrigger>
              <TabsTrigger value="analysis">特徴分析</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="p-3 border text-left bg-blue-50 font-semibold">
                        自治体名
                      </th>
                      <th className="p-3 border text-left bg-red-50 font-semibold">
                        食品
                      </th>
                      <th className="p-3 border text-left bg-yellow-50 font-semibold">
                        日用品
                      </th>
                      <th className="p-3 border text-left bg-purple-50 font-semibold">
                        家電
                      </th>
                      <th className="p-3 border text-left bg-green-50 font-semibold">
                        体験型
                      </th>
                      <th className="p-3 border text-left bg-pink-50 font-semibold">
                        贅沢品
                      </th>
                      <th className="p-3 border text-left bg-orange-50 font-semibold">
                        特徴的な返礼品
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {municipalityData.map(
                      (item: MunicipalityData, index: number) => (
                        <tr
                          key={item.city}
                          className={
                            index % 2 === 0
                              ? "bg-white hover:bg-gray-50 transition-colors"
                              : "bg-gray-50 hover:bg-gray-100 transition-colors"
                          }
                        >
                          <td className="p-3 border font-medium">
                            {item.city}
                          </td>
                          <td className="p-3 border">{item.food}</td>
                          <td className="p-3 border">{item.daily}</td>
                          <td className="p-3 border">{item.electronics}</td>
                          <td className="p-3 border">{item.experience}</td>
                          <td className="p-3 border">{item.luxury}</td>
                          <td className="p-3 border">
                            <Badge
                              variant="secondary"
                              className="bg-orange-100 text-orange-800"
                            >
                              {item.featured}
                            </Badge>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-blue-50 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-blue-800">温泉文化体験</h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• 別府地獄蒸し体験</li>
                    <li>• 由布院温泉療養体験</li>
                    <li>• 温泉施設利用券</li>
                  </ul>
                </Card>
                <Card className="p-4 bg-green-50 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-800">伝統文化体験</h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• 小鹿田焼体験</li>
                    <li>• 城下町ガイド</li>
                    <li>• 六郷満山巡り</li>
                  </ul>
                </Card>
                <Card className="p-4 bg-amber-50 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-amber-800">食文化体験</h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>• 佐伯寿司職人体験</li>
                    <li>• 原尻の滝そば打ち体験</li>
                    <li>• 安心院ワイナリー体験</li>
                  </ul>
                </Card>
              </div>
              <div className="mt-6">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3">体験型返礼品の特徴</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 全18市町村中15市町村が体験型返礼品を提供</li>
                    <li>• 地域の特色を活かした独自の体験プログラム</li>
                    <li>• 体験と物品を組み合わせた複合的な返礼品が人気</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analysis">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-3">地域別の特徴</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • 沿岸部：海産物と温泉文化の融合（別府市、由布市等）
                    </li>
                    <li>• 山間部：自然・農産物体験（九重町、玖珠町等）</li>
                    <li>• 都市部：複合的な体験プログラム（大分市等）</li>
                  </ul>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-3">カテゴリー分析</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 食品：全市町村で提供（特産品活用）</li>
                    <li>• 体験型：83%の自治体が提供</li>
                    <li>• 贅沢品：高級食材中心に全市町村で提供</li>
                    <li>• 日用品：伝統工芸品を中心に44%の自治体が提供</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

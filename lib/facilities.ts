// Commore - 厳選施設データ(Phase 1: テキストのみ)
// 公式写真の使用許諾は施設交渉(11月以降)で実施

export type Facility = {
  id: string;
  name: string;
  nameEn: string;
  area: string;
  station: string;
  tier: "S" | "A" | "B";
  category: "都心ラグジュアリー" | "和モダン" | "隠れ家" | "1日1組宿";
  tagline: string;
  features: string[];
};

export const facilities: Facility[] = [
  {
    id: "kudochi-roppongi",
    name: "KUDOCHI 六本木",
    nameEn: "Kudochi Roppongi",
    area: "東京 / 港区",
    station: "六本木駅 徒歩2分",
    tier: "S",
    category: "都心ラグジュアリー",
    tagline: "海底に潜む、ふたりだけの世界。",
    features: ["完全個室", "男女利用可", "24時間営業", "QR入室・無人"],
  },
  {
    id: "kudochi-ginza",
    name: "KUDOCHI 銀座",
    nameEn: "Kudochi Ginza",
    area: "東京 / 中央区",
    station: "銀座駅 徒歩3分",
    tier: "S",
    category: "都心ラグジュアリー",
    tagline: "6つの世界から選ぶ、深夜の静寂。",
    features: ["6部屋コンセプト別", "24時間営業", "完全個室", "深夜利用可"],
  },
  {
    id: "azabu-tenqoo",
    name: "AZABU SAUNA TENQOO",
    nameEn: "Azabu Sauna Tenqoo",
    area: "東京 / 港区",
    station: "麻布十番駅 徒歩4分",
    tier: "S",
    category: "都心ラグジュアリー",
    tagline: "顔を、合わせない。",
    features: ["顔認証入室", "完全非対面", "4K TV完備", "オーガニックアメニティ"],
  },
  {
    id: "arch-kagurazaka",
    name: "ARCH 神楽坂",
    nameEn: "Arch Kagurazaka",
    area: "東京 / 新宿区",
    station: "神楽坂駅 徒歩5分",
    tier: "S",
    category: "都心ラグジュアリー",
    tagline: "シャンパンと、サウナと、君。",
    features: ["会員制", "ブティックホテル型", "1℃単位温度調整", "音楽家プレイリスト"],
  },
  {
    id: "loca-aoyama",
    name: "LOCA THA CLASS. AOYAMA",
    nameEn: "Loca Tha Class. Aoyama",
    area: "東京 / 港区",
    station: "外苑前駅 徒歩6分",
    tier: "S",
    category: "都心ラグジュアリー",
    tagline: "汗じゃない、ミネラルだ。",
    features: ["富士山溶岩マグマスパ", "遠赤外線", "サマーベッド完備", "ウェルネス特化"],
  },
  {
    id: "akasaka-sauna",
    name: "アカサカサウナ",
    nameEn: "Akasaka Sauna",
    area: "東京 / 港区",
    station: "赤坂見附駅 徒歩2分",
    tier: "S",
    category: "隠れ家",
    tagline: "赤坂見附で、消える90分。",
    features: ["セルフロウリュ", "完全予約制", "氷投入可", "雑居ビル4階の隠れ家"],
  },
  {
    id: "saunea-urawa",
    name: "SAUNEA 浦和",
    nameEn: "Saunea Urawa",
    area: "埼玉 / さいたま市",
    station: "浦和駅 徒歩7分",
    tier: "S",
    category: "和モダン",
    tagline: "都心を離れた、静寂のスパ。",
    features: ["和モダン空間", "完全個室", "ロウリュ可", "アメニティ充実"],
  },
  {
    id: "moksa-kyoto",
    name: "moksa 京都",
    nameEn: "Moksa Kyoto",
    area: "京都 / 左京区",
    station: "出町柳駅 徒歩10分",
    tier: "S",
    category: "和モダン",
    tagline: "京の町家、奥の隠れ家。",
    features: ["町家リノベーション", "和の美意識", "完全個室", "茶道アメニティ"],
  },
  {
    id: "on-the-wave",
    name: "On the wave 館山",
    nameEn: "On the Wave Tateyama",
    area: "千葉 / 館山市",
    station: "館山駅 車20分",
    tier: "S",
    category: "1日1組宿",
    tagline: "海辺で、誰にも会わない一日を。",
    features: ["1日1組限定", "宿泊型", "オーシャンビュー", "貸切露天"],
  },
];

export const featuredFacilities = facilities.filter(f => f.tier === "S");

export const categoryLabel: Record<Facility["category"], string> = {
  "都心ラグジュアリー": "Luxury in the City",
  "和モダン": "Modern Wa",
  "隠れ家": "Hidden Retreat",
  "1日1組宿": "Private Stay",
};

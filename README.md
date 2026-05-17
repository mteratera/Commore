# Commore — 公式サイト

> 木漏れ日のような、ふたりの時間。

完全個室サウナのキュレーション・サービス Commore の公式サイト(v0.2 マルチページ版)です。

---

## 🆕 v0.2 の更新内容

- ✅ マルチページ化(トップ / Concept / Facilities / About)
- ✅ 共通ヘッダー(ナビゲーション)
- ✅ 共通フッター
- ✅ モバイルメニュー対応(ハンバーガー)
- ✅ コンセプトセクション追加
- ✅ 施設プレビュー(Tier S 9施設、テキストのみ)
- ✅ About ページ作成
- ✅ レスポンシブ最適化

---

## 🚀 既存リポジトリへの更新手順

GitHubで commore リポジトリは既に存在しているので、ファイルを置き換えます。

### Step 1: 既存ファイル全削除(オプション・推奨)

ローカルで作業するなら git で簡単ですが、Web画面なら以下:

実は **「全部置き換え」ではなく「追加・更新」する形** が簡単です。

### Step 2: 全ファイルをアップロード

1. GitHub の commore リポジトリトップ
2. **Add file** → **Upload files**
3. このフォルダの中身をすべてドラッグ&ドロップ
4. 同名ファイルは上書きされる(自動)
5. 新規ファイル(`app/about/page.tsx` 等)は新たに追加される
6. **「Commit changes」**

### 注意: 新規フォルダ構造

このv0.2では以下が新規追加されます:

```
app/
├── about/page.tsx       ← 新規
├── concept/page.tsx     ← 新規
├── facilities/page.tsx  ← 新規
components/              ← 新規フォルダ
├── Header.tsx
├── Footer.tsx
└── KomorebiBackground.tsx
lib/                     ← 新規フォルダ
└── facilities.ts
.npmrc                   ← 新規(セキュリティ対策)
```

Web画面からの一括アップロードでも問題なく構造が反映されます。

---

## 🔄 Vercel 自動デプロイ

GitHubに Push した瞬間、Vercelが自動的に再ビルド・再デプロイします。1-3分待つだけ。

---

## 📁 全ファイル構成

```
commore/
├── app/
│   ├── layout.tsx              # 全ページ共通レイアウト
│   ├── page.tsx                # トップ(/)
│   ├── about/
│   │   └── page.tsx           # About(/about)
│   ├── concept/
│   │   └── page.tsx           # Concept(/concept)
│   ├── facilities/
│   │   └── page.tsx           # Facilities(/facilities)
│   └── globals.css            # グローバルCSS
├── components/
│   ├── Header.tsx              # 共通ヘッダー
│   ├── Footer.tsx              # 共通フッター
│   └── KomorebiBackground.tsx  # 木漏れ日演出
├── lib/
│   └── facilities.ts           # 施設データ(テキスト)
├── public/
│   ├── favicon.png
│   └── og-image.png
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── .npmrc
├── .gitignore
└── README.md
```

---

## 🎨 ブランドガイド

### カラーパレット
- **Forest** `#2D3A2E` — 静寂・木陰
- **Cream** `#F5E6C8` — 光・温もり
- **Sunlight** `#C8A77B` — 木漏れ日のアクセント

### タグライン
- 日本語: 木漏れ日のような、ふたりの時間。
- 英語: A quiet kind of together.

### フォント
- 英語見出し: Cormorant Garamond
- 日本語見出し: Noto Serif JP
- 本文: Noto Sans JP

---

## 📌 今後の予定

- [ ] 事前登録メールフォーム
- [ ] お問い合わせフォーム
- [ ] 施設詳細ページ(写真・予約導線あり)
- [ ] 料金ページ(¥500/月プラン)
- [ ] AI相性診断
- [ ] ユーザー認証(Supabase)
- [ ] Stripe決済連携
- [ ] commore.app DNS接続

正式ローンチ: 2026年12月

---

**運営**: 株式会社 Seven MarKs / Commore事業部

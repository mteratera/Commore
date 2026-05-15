# Commore — 公式サイト

> 木漏れ日のような、ふたりの時間。

完全個室サウナのキュレーション・サービス Commore の公式サイト(Coming Soon版)です。

---

## 🚀 公開手順(初回のみ)

### Step 1: GitHubに新規リポジトリを作る

1. https://github.com/new にアクセス
2. **Repository name**: `commore` と入力
3. **Description**: `Commore official website` と入力
4. **Public** を選択(Vercel無料プランで使うため。privateだとPro必要)
5. **Create repository** をクリック

### Step 2: ファイルをアップロード

1. 作成されたリポジトリ画面で **"uploading an existing file"** のリンクをクリック
2. このフォルダの中身を **全部選択** してドラッグ&ドロップ
   - 重要: `node_modules` フォルダはアップロード対象外(`.gitignore`で除外済み)
3. 下にスクロール → **Commit changes** をクリック

### Step 3: VercelからImport

1. https://vercel.com/new にアクセス
2. **Import Git Repository** セクションで `commore` を選択
3. プロジェクト設定はデフォルトのまま **Deploy** をクリック
4. 1-2分待つ → デプロイ完了
5. `https://commore-xxx.vercel.app` のような仮URLでサイトが見れる

### Step 4: commore.app と接続(後日でOK)

1. Vercelのプロジェクト → **Settings** → **Domains**
2. `commore.app` を入力 → **Add**
3. Vercelが表示する DNS設定値(Aレコード or CNAME)を確認
4. ConoHa の DNS管理画面で設定追加
5. 数分〜数時間で `commore.app` がVercelのサイトに繋がる

---

## 🛠 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **ホスティング**: Vercel
- **デザイン**: Cormorant Garamond + Noto Serif JP + Noto Sans JP

---

## 🎨 ブランドガイド

### カラーパレット
- **Forest** (深緑) `#2D3A2E` — 静寂・木陰
- **Cream** (アイボリー) `#F5E6C8` — 光・温もり
- **Sunlight** (ゴールド) `#C8A77B` — 木漏れ日

### タグライン
- 日本語: 木漏れ日のような、ふたりの時間。
- 英語: Finding the silence, for the two of you.

---

## 📁 ファイル構成

```
commore/
├── app/
│   ├── layout.tsx          # 全ページ共通レイアウト
│   ├── page.tsx            # トップページ(Coming Soon)
│   └── globals.css         # グローバルCSS
├── public/
│   ├── favicon.png         # ブラウザタブのアイコン
│   └── og-image.png        # SNSシェア時の画像
├── package.json            # 依存パッケージ
├── next.config.mjs         # Next.js設定
├── tsconfig.json           # TypeScript設定
├── tailwind.config.ts      # Tailwind設定(Commoreカラー定義)
├── postcss.config.mjs      # PostCSS設定
└── .gitignore              # Git除外設定
```

---

## ✏️ 修正したい時

1. Claude.ai で「ここをこう変えて」と依頼
2. Claudeが修正済みファイルを提供
3. GitHubのリポジトリ画面で該当ファイルを開く → 編集ボタン → ペースト
4. **Commit changes** で保存
5. Vercelが自動検知して再デプロイ(1-2分)

---

## 📌 今後の予定

- [ ] 施設一覧ページ
- [ ] 施設詳細ページ
- [ ] 料金ページ
- [ ] AI相性診断
- [ ] ユーザー認証
- [ ] Stripe決済連携
- [ ] commore.app DNS接続

正式ローンチ: 2026年12月

---

**運営**: 株式会社 Seven MarKs / Commore事業部

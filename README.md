# 📊 React Likert Question

React Likert Question は、Likert形式（例: 「全く当てはまらない」〜「とても当てはまる」）の質問コンポーネントを提供する **React 19 専用**ライブラリです。

質問文や背景色、ボタンタイプを `props` で指定でき、回答結果をコールバックで受け取れるため、アンケートや心理テスト、ユーザー満足度調査などに利用できます。

---

## 🚀 インストール

```bash
npm install react-likert-question
```

---

## 📖 使い方

```tsx
import { LikertQuestion } from "react-likert-question";

export default function Example() {
  return (
    <LikertQuestion
      question="このサービスに満足していますか？"
      backgroundColor="bg-gray-50"
      buttonType="outline"
      onChange={(value) => console.log("回答:", value)}
    />
  );
}
```

---

## ⚙️ Props

| Prop            | 型                                | 説明                                     |
|-----------------|----------------------------------|------------------------------------------|
| `question`      | `string`                         | 表示する質問文                           |
| `options`       | `{value:number,label:string}[]`  | カスタムの選択肢（省略時は1〜5段階）     |
| `backgroundColor` | `string`                       | 背景色の Tailwind クラス                 |
| `buttonType`    | `"solid" \| "outline"`           | ボタンのスタイル                         |
| `onChange`      | `(value:number) => void`         | 選択肢クリック時に呼ばれるコールバック   |

---

## 📦 ライセンス

MIT License

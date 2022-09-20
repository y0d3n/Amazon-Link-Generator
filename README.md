# Amazon Link Generator

amazonのリンクが長すぎたり、日本語でURLパース失敗されたりが面倒なので、リンク生成拡張機能を作成。

## ASIN

amazonは商品ごとにASINという番号が割り振られていて、以下のようにURLを組み立てれば商品ページのURLになる。

```txt
https://amazon.co.jp/dp/{{ASIN}}
```

これで長すぎるリンクとはおさらば。

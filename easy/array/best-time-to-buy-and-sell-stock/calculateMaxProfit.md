# Best Time to Buy and Sell Stock

## Đề bài

Cho một mảng `prices`, trong đó:

- `prices[i]` là giá cổ phiếu ở ngày thứ `i`.

Hãy tìm lợi nhuận lớn nhất có thể đạt được bằng cách:

1. Chọn **một ngày mua**
2. Chọn **một ngày bán sau ngày mua**

Trả về lợi nhuận lớn nhất có thể nhận được.

Nếu không thể có lợi nhuận, trả về `0`.

---

## Ví dụ

### Input

```js
prices = [7,1,5,3,6,4]
```

### Output

```js
5
```

### Giải thích

- Mua ở giá `1`
- Bán ở giá `6`
- Lợi nhuận:

```txt
6 - 1 = 5
```

---

## Phân tích bài toán

### Mục tiêu

Tìm:

```txt
giá bán - giá mua = lợi nhuận lớn nhất
```

Điều kiện:

- Phải mua trước rồi mới được bán
- Không được bán trước khi mua

---

## Ý tưởng giải quyết

Trong quá trình duyệt mảng:

1. Luôn lưu giá thấp nhất từng gặp
2. Với mỗi ngày:
   - Tính lợi nhuận nếu bán ở ngày hiện tại
   - Cập nhật lợi nhuận lớn nhất

---

## Minh họa

Ví dụ:

```js
[7,1,5,3,6,4]
```

| Ngày | Giá | Giá thấp nhất | Profit hiện tại | Max Profit |
|------|------|----------------|-----------------|-------------|
| 0 | 7 | 7 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |
| 2 | 5 | 1 | 4 | 4 |
| 3 | 3 | 1 | 2 | 4 |
| 4 | 6 | 1 | 5 | 5 |
| 5 | 4 | 1 | 3 | 5 |



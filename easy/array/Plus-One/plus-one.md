## Đề bài (viết lại dễ hiểu)

Bạn được cho một mảng số nguyên `digits`, trong đó mỗi phần tử là **một chữ số** của một số rất lớn.

Ví dụ:

```js
digits = [1,2,3]
```

đại diện cho số:

```txt
123
```

Yêu cầu:

* Cộng thêm `1` vào số đó.
* Trả về kết quả dưới dạng mảng.

Ví dụ:

```js
[1,2,3] -> [1,2,4]
```

vì:

```txt
123 + 1 = 124
```

---

## Điều quan trọng của bài

Ta không được biến mảng thành số rồi cộng trực tiếp kiểu:

```js
Number(digits.join("")) + 1
```

vì số có thể rất lớn vượt giới hạn của JavaScript.

Nên phải xử lý theo cách cộng tay như toán tiểu học.

---

# Phân tích bài toán

Ta cộng từ phải sang trái.

Ví dụ:

```txt
129 + 1
```

Ta cộng từ cuối:

```txt
9 + 1 = 10
```

* ghi `0`
* nhớ `1`

Tiếp tục:

```txt
2 + 1 = 3
```

Kết quả:

```txt
130
```

---

## Các trường hợp xảy ra

### Trường hợp 1: Không phát sinh số nhớ

Ví dụ:

```js
[1,2,3]
```

* tăng phần tử cuối:

```txt
3 -> 4
```

Kết quả:

```js
[1,2,4]
```

Xong ngay.

---

### Trường hợp 2: Có số nhớ

Ví dụ:

```js
[1,2,9]
```

* `9 + 1 = 10`
* đặt `0`
* nhớ `1`

Tiếp tục:

```txt
2 + 1 = 3
```

Kết quả:

```js
[1,3,0]
```

---

### Trường hợp 3: Tất cả đều là 9

Ví dụ:

```js
[9,9,9]
```

Ta sẽ có:

```txt
999 + 1 = 1000
```

Kết quả:

```js
[1,0,0,0]
```

Lúc này mảng phải dài thêm 1 phần tử.

---

# Ý tưởng giải

## Cách suy nghĩ đơn giản nhất

Duyệt từ cuối mảng về đầu:

### Nếu phần tử hiện tại nhỏ hơn 9

Ví dụ:

```txt
3, 5, 7
```

* chỉ cần tăng lên 1
* trả về luôn

```js
digits[i]++
return digits
```

---

### Nếu phần tử hiện tại bằng 9

Ví dụ:

```txt
...9
```

Thì:

```txt
9 + 1 = 10
```

* đổi thành `0`
* tiếp tục cộng sang bên trái

```js
digits[i] = 0
```

---

## Nếu duyệt hết mà toàn là 9

Ví dụ:

```js
[9,9,9]
```

Sau vòng lặp:

```js
[0,0,0]
```

Lúc này cần thêm `1` vào đầu mảng:

```js
digits.unshift(1)
```

Kết quả:

```js
[1,0,0,0]
```

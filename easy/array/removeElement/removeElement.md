# Remove Element

## Đề bài

Cho một mảng số nguyên `nums` và một giá trị `val`.

Yêu cầu:

- Xóa tất cả phần tử có giá trị bằng `val`
- Thực hiện trực tiếp trên mảng gốc (`in-place`)
- Không tạo mảng mới
- Trả về số lượng phần tử còn lại sau khi xóa

---

## Ví dụ

### Input

```js
nums = [3,2,2,3]
val = 3
```

### Output

```js
2
```

### Sau khi xử lý

```js
[2,2,_,_]
```

Dấu `_` nghĩa là giá trị gì cũng được vì hệ thống không quan tâm phần phía sau.

---

# Phân tích yêu cầu bài toán

Bài này KHÔNG yêu cầu:

- xóa thật sự phần tử khỏi mảng
- thay đổi kích thước mảng

Thứ bài toán thực sự cần là:

## Đưa các phần tử KHÔNG bằng `val` lên đầu mảng

Ví dụ:

```js
nums = [0,1,2,2,3,0,4,2]
val = 2
```

Các phần tử cần giữ lại là:

```js
[0,1,3,0,4]
```

Sau khi xử lý:

```js
[0,1,3,0,4,_,_,_]
```

và trả về:

```js
5
```

---

# Ý tưởng giải quyết

Ta dùng kỹ thuật:

## Two Pointers (Hai con trỏ)

### Pointer 1: `currentIndex`

Dùng để:

```txt
duyệt toàn bộ mảng
```

---

### Pointer 2: `writeIndex`

Dùng để:

```txt
ghi các phần tử hợp lệ lên đầu mảng
```

---

# Cách hoạt động

## Khi gặp phần tử KHÔNG bằng `val`

```js
if (nums[currentIndex] !== val)
```

Ta:

1. đưa phần tử đó lên đầu mảng
2. tăng vị trí ghi
---

# Mô phỏng từng bước

## Input

```js
nums = [0,1,2,2,3,0,4,2]
val = 2
```

---

## Ban đầu

```txt
writeIndex = 0
```

---

## currentIndex = 0

```js
nums[0] = 0
```

Khác `2`

Ghi:

```js
nums[0] = 0
```

Tăng:

```txt
writeIndex = 1
```

---

## currentIndex = 1

```js
nums[1] = 1
```

Khác `2`

Ghi:

```js
nums[1] = 1
```

Tăng:

```txt
writeIndex = 2
```

---

## currentIndex = 2

```js
nums[2] = 2
```

Bằng `val`

→ bỏ qua

---

## currentIndex = 4

```js
nums[4] = 3
```

Khác `2`

Ghi:

```js
nums[2] = 3
```

Mảng thành:

```js
[0,1,3,2,3,0,4,2]
```

---

# Kết quả cuối

```js
[0,1,3,0,4,_,_,_]
```

Trả về:

```js
5
```

---

# Tư duy cốt lõi của bài toán

Bài này không phải:

```txt
xóa phần tử
```

Mà thực chất là:

```txt
lọc các phần tử hợp lệ và dồn chúng lên đầu mảng
```

---

# Tư duy quan trọng cần nhớ

| Biến | Vai trò |
|---|---|
| `currentIndex` | đọc dữ liệu |
| `writeIndex` | ghi dữ liệu |

---

## `currentIndex`

```txt
đi tìm phần tử hợp lệ
```

---

## `writeIndex`

```txt
đánh dấu nơi cần ghi phần tử hợp lệ tiếp theo
```

---


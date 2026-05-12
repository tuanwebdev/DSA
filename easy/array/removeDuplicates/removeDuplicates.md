## 1. Yêu cầu bài toán

Cho một mảng số nguyên `nums` đã được sắp xếp theo thứ tự tăng dần.

Nhiệm vụ:

- Xóa các phần tử trùng nhau ngay trên mảng gốc (`in-place`)
- Mỗi phần tử chỉ xuất hiện một lần
- Giữ nguyên thứ tự ban đầu
- Trả về số lượng phần tử khác nhau `k`

Sau khi xử lý:

- `k` phần tử đầu tiên của mảng phải là các giá trị unique
- Các phần còn lại không quan trọng

---

# Ví dụ

## Input

```js
nums = [0,0,1,1,1,2,2,3,3,4]
```

## Sau xử lý

```js
nums = [0,1,2,3,4,_,_,_,_,_]
```

## Return

```js
5
```

---

# 2. Điều quan trọng nhất của đề

## Mảng đã được sort

```js
[0,0,1,1,1,2,2]
```

Các số giống nhau luôn đứng cạnh nhau.

Đây chính là chìa khóa của bài toán.

---

# 3. Phân tích bài toán

## Mục tiêu thật sự

Ta cần:

```js
đưa các số unique lên đầu mảng
```

Ví dụ:

```js
[1,1,2,2,3]
```

Sau xử lý:

```js
[1,2,3,?,?]
```

---

# 4. Tư duy cốt lõi của bài toán

## Vì mảng đã sort nên:

Nếu:

```js
nums[i] !== nums[i - 1]
```

thì chắc chắn:

```js
nums[i] là một số mới
```

---

# Ý tưởng chính

Ta duyệt mảng từ trái sang phải:

- Nếu gặp số trùng → bỏ qua
- Nếu gặp số mới → ghi nó vào vùng unique phía trước

---

# 5. Kỹ thuật sử dụng

## Two Pointers

Dùng 2 con trỏ:

| Con trỏ | Vai trò |
|---|---|
| `i` | đọc dữ liệu |
| `k` | vị trí ghi số unique tiếp theo |

---

# 6. Cách hoạt động

## Ví dụ

```js
nums = [0,0,1,1,2,2,3]
```

---

## Ban đầu

```js
k = 1
```

Vì:

```js
phần tử đầu tiên luôn unique
```

---

## Duyệt mảng

### i = 1

```js
nums[1] = 0
nums[0] = 0
```

Trùng nhau → bỏ qua

---

### i = 2

```js
nums[2] = 1
nums[1] = 0
```

Khác nhau → tìm thấy số mới

Ghi vào vị trí `k`

```js
nums[k] = nums[i]
```

Mảng thành:

```js
[0,1,1,1,2,2,3]
```

Tăng:

```js
k++
```

---

### i = 4

```js
2 != 1
```

Ghi tiếp:

```js
nums[2] = 2
```

Mảng:

```js
[0,1,2,1,2,2,3]
```

---

# 7. Công thức tổng quát

## Nếu gặp số mới

```js
nums[i] !== nums[i - 1]
```

thì:

```js
nums[k] = nums[i]
k++
```

---

# 8. Tại sao bài này dùng Two Pointers?

Vì ta cần:

- Một con trỏ để đọc dữ liệu
- Một con trỏ để ghi dữ liệu

Đây là pattern cực kỳ phổ biến trong:

- Remove Element
- Move Zeroes
- Sliding Window
- Partition Array
- Fast & Slow Pointer

---

# 9. Điều bài toán thật sự muốn kiểm tra

## Không phải việc "xóa phần tử"

Mà là kiểm tra bạn có biết:

- Xử lý mảng sorted
- Ghi đè dữ liệu trong mảng
- Tư duy in-place
- Two pointers
- Tối ưu bộ nhớ

---

# 10. Tóm tắt tư duy cốt lõi

## Core Idea

```js
Mảng đã sort
→ số trùng nằm cạnh nhau
→ chỉ cần kiểm tra nums[i] với nums[i - 1]
```

Nếu khác nhau:

```js
đây là phần tử unique mới
```

thì:

```js
ghi nó vào vùng phía trước của mảng
```

---

# 11. Tư duy hình ảnh

```js
Đọc dữ liệu bằng i
↓
[0,0,1,1,2,2,3]

Ghi dữ liệu bằng k
↓
[0,1,2,3,?, ?, ?]
```

- `i` chạy tìm số mới
- `k` xây dựng vùng unique

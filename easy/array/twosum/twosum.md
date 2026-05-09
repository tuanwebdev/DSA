# Tư Duy Cốt Lõi Của Bài Two Sum

## Ý tưởng chính

```txt
Đừng tìm lại thứ đã tìm rồi.
```

Thay vì mỗi lần lại duyệt toàn bộ mảng để tìm số còn thiếu, ta:

```txt
Vừa duyệt mảng vừa lưu dữ liệu để tra cứu nhanh.
```

---

# Flow Tư Duy

```txt
current number
↓
target - current
↓
kiểm tra xem số cần tìm đã xuất hiện chưa
↓
nếu có → return
↓
nếu chưa → lưu current vào map
```

---

# Tư Duy Quan Trọng

## 1. Tìm phần còn thiếu

```js
rest = target - current
```

Ví dụ:

```js
target = 9
current = 2
rest = 7
```

Ta chỉ cần kiểm tra:

```txt
7 đã xuất hiện chưa?
```

---

## 2. Dùng Hash Map để tra cứu nhanh

Thay vì:

```txt
duyệt toàn bộ mảng
```

ta dùng:

```js
map[rest]
```

Để kiểm tra gần như ngay lập tức.

---

# Tối Ưu Độ Phức Tạp

## Cách thường

```txt
2 vòng lặp
```

Độ phức tạp:

```txt
O(n²)
```

---

## Cách tối ưu bằng Hash Map

```txt
1 vòng lặp + tra cứu nhanh
```

Độ phức tạp:

```txt
O(n)
```

---

# Cốt Lõi Của Bài

```txt
Dùng Hash Map để đổi việc tìm kiếm từ O(n) xuống O(1).
```
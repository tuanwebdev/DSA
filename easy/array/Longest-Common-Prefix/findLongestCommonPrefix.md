# Longest Common Prefix

## Đề bài

Cho một mảng chuỗi:

```js
["flower", "flow", "flight"]
```

Hãy tìm tiền tố chung dài nhất của tất cả các chuỗi.

Kết quả:

```js
"fl"
```

---

# Tư duy bài toán

## Ý tưởng chính

Ta sẽ:

1. Lấy chuỗi đầu tiên làm tiền tố ban đầu.
2. So sánh tiền tố này với từng chuỗi còn lại.
3. Nếu chuỗi hiện tại không bắt đầu bằng tiền tố đó:
   - cắt bớt 1 ký tự cuối của tiền tố
   - kiểm tra lại
4. Lặp cho đến khi tìm được tiền tố chung.

---

# Minh họa từng bước

Ví dụ:

```js
["flower", "flow", "flight"]
```

---

## Bước 1 — Chọn prefix ban đầu

```js
prefix = "flower"
```

---

## Bước 2 — So sánh với `"flow"`

Kiểm tra:

```js
"flow".indexOf("flower")
```

Kết quả:

```js
-1
```

=> `"flow"` không bắt đầu bằng `"flower"`.

Cắt bớt prefix:

```js
"flowe"
```

vẫn sai.

Cắt tiếp:

```js
"flow"
```

Lúc này:

```js
"flow".indexOf("flow") === 0
```

=> đúng.

---

## Bước 3 — So sánh với `"flight"`

Hiện tại:

```js
prefix = "flow"
```

Kiểm tra:

```js
"flight".indexOf("flow")
```

Sai.

Cắt dần:

```js
"flo"
```

Sai.

```js
"fl"
```

Đúng.

---

# Kết quả cuối

```js
"fl"
```

---

# Ý nghĩa đoạn code quan trọng

```js
strs[i].indexOf(prefix) !== 0
```

Ý nghĩa:

- `indexOf(prefix)` tìm vị trí xuất hiện của `prefix`
- Nếu kết quả là `0`
  => nghĩa là chuỗi bắt đầu bằng `prefix`

Ví dụ:

```js
"flower".indexOf("flo")
```

Kết quả:

```js
0
```

Vì `"flo"` nằm ở đầu chuỗi.

---

# Cách cắt prefix

```js
prefix = prefix.slice(0, -1);
```

Ý nghĩa:

- lấy chuỗi từ đầu đến trước ký tự cuối cùng

Ví dụ:

```js
"flower".slice(0, -1)
```

Kết quả:

```js
"flowe"
```

---



---

# Độ phức tạp

Giả sử:

- `n` = số lượng chuỗi
- `m` = độ dài tiền tố

Độ phức tạp:

```txt
O(n * m)
```

---

# Tổng kết tư duy

## Bản chất bài toán

Ta liên tục:

- giữ một tiền tố chung hiện tại
- kiểm tra xem các chuỗi khác có bắt đầu bằng tiền tố đó không
- nếu không:
  - rút ngắn tiền tố
  - kiểm tra lại

Cho đến khi tìm được tiền tố chung dài nhất.

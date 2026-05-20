# Pascal Triangle II

## Đề bài

Cho một số nguyên không âm `rowIndex`.

Hãy trả về hàng thứ `rowIndex` của tam giác Pascal.

Trong tam giác Pascal:

* Phần tử đầu tiên và cuối cùng luôn bằng `1`
* Mỗi phần tử ở giữa bằng tổng của hai phần tử phía trên nó

Ví dụ:

```text id="a7p4f1"
Input: rowIndex = 3
Output: [1,3,3,1]
```

---

# Phân tích bài toán

Nếu xây dựng toàn bộ tam giác Pascal thì sẽ tốn nhiều bộ nhớ không cần thiết.

Ví dụ:

```text id="j5r0u2"
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1]
]
```

Trong khi đề bài chỉ yêu cầu:

```text id="l8m1z3"
một hàng duy nhất
```

Ta cần tìm cách:

* chỉ dùng một mảng
* cập nhật trực tiếp trên mảng đó

---

# Nhận xét quan trọng

Trong tam giác Pascal:

* phần tử đầu và cuối luôn là `1`
* phần tử ở giữa được tính theo công thức:

a_j = a_j + a_{j-1}

---

# Vấn đề cần giải quyết

Nếu cập nhật từ trái sang phải:

```text id="h2x9k7"
row[j] = row[j] + row[j - 1]
```

thì giá trị cũ sẽ bị ghi đè trước khi sử dụng tiếp.

Ví dụ:

```text id="o9s2w4"
[1,2,1]
```

Nếu cập nhật từ trái sang phải:

```text id="s4q7n1"
row[1] = 2 + 1 = 3
```

Mảng trở thành:

```text id="c7v3m8"
[1,3,1]
```

Lúc này:

```text id="z5b2e9"
row[2] = 1 + 3
```

=> sai kết quả.

---

# Cách giải quyết

Ta sẽ:

* duyệt từ phải sang trái
* để giá trị cũ chưa bị thay đổi

Ví dụ:

```text id="n6d8p2"
[1,2,1]
```

Cập nhật:

```text id="v3t1k5"
row[2] = 1 + 2 = 3
row[1] = 2 + 1 = 3
```

Kết quả:

```text id="r4m9x7"
[1,3,3,1]
```


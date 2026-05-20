
## 📘 Đề bài

Cho một mảng số nguyên `nums` có kích thước `n`.

Hãy trả về **phần tử xuất hiện nhiều hơn ⌊n / 2⌋ lần** trong mảng.

Ta gọi phần tử đó là **majority element**.

> Đề bài đảm bảo rằng majority element luôn tồn tại.

---

## 📌 Ví dụ

### Example 1

```txt
Input: nums = [3,2,3]
Output: 3
```

Giải thích:

* `3` xuất hiện 2 lần
* `n = 3`
* `⌊3 / 2⌋ = 1`
* `3` xuất hiện nhiều hơn 1 lần ⇒ majority element là `3`

---

### Example 2

```txt
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

Giải thích:

* `2` xuất hiện 4 lần
* `n = 7`
* `⌊7 / 2⌋ = 3`
* `2` xuất hiện nhiều hơn 3 lần ⇒ majority element là `2`

---

# 🔍 Phân tích bài toán

## Điều kiện quan trọng

Majority element luôn:

```txt
số lần xuất hiện > n / 2
```

Điều này có nghĩa:

```txt
majority element chiếm hơn 50% mảng
```

---

## Ý tưởng trực giác

Nếu ta:

* ghép một majority element với một phần tử khác
* rồi “triệt tiêu” cả hai

thì majority element vẫn sẽ còn dư.

Ví dụ:

```txt
[2,2,1,1,1,2,2]
```

Triệt tiêu từng cặp khác nhau:

```txt
2 với 1
2 với 1
2 với 1
```

vẫn còn:

```txt
2
```

Vì số lượng `2` nhiều hơn tổng tất cả phần tử khác.

---

# 💡 Hướng giải quyết

## Cách 1 — Dùng Hash Map

### Ý tưởng

* Đếm số lần xuất hiện của từng phần tử
* Tìm phần tử có count > n/2

---

### Độ phức tạp

| Thành phần | Độ phức tạp |
| ---------- | ----------- |
| Time       | O(n)        |
| Space      | O(n)        |

---

# 🚀 Cách tối ưu — Boyer Moore Voting Algorithm

## Ý tưởng cốt lõi

Ta không cần lưu toàn bộ số lần xuất hiện.

Chỉ cần:

* một `candidate`
* một `count`

---

## Quy tắc hoạt động

### Nếu `count == 0`

Chọn phần tử hiện tại làm ứng viên mới.

---

### Nếu số hiện tại giống `candidate`

```txt
count++
```

---

### Nếu khác `candidate`

```txt
count--
```

---

## Vì sao đúng?

Majority element:

* xuất hiện nhiều hơn tất cả phần tử khác cộng lại
* nên sau quá trình “triệt tiêu”
* nó vẫn là phần tử còn lại cuối cùng.

---


# ⏱ Độ phức tạp

| Thành phần | Độ phức tạp |
| ---------- | ----------- |
| Time       | O(n)        |
| Space      | O(1)        |

---

# 🧠 Điều quan trọng cần nhớ

Thuật toán này:

* không thực sự “đếm”
* mà mô phỏng quá trình:

```txt
triệt tiêu giữa các phần tử khác nhau
```

Và vì majority element luôn chiếm hơn 50%:

* nó sẽ luôn sống sót cuối cùng.

## 🧩 Bài toán: Single Number 

### 📌 Mô tả bài toán

Cho một mảng số nguyên `nums` không rỗng. Trong đó:

* Mỗi phần tử xuất hiện **đúng 2 lần**, ngoại trừ **một phần tử duy nhất** chỉ xuất hiện **1 lần**.

👉 Nhiệm vụ: Tìm ra phần tử xuất hiện một lần đó.

---

### 📥 Input

* Một mảng số nguyên `nums`

### 📤 Output

* Một số nguyên duy nhất xuất hiện 1 lần

---

### 📌 Ví dụ

**Ví dụ 1:**

```
Input: nums = [2,2,1]
Output: 1
```

**Ví dụ 2:**

```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Ví dụ 3:**

```
Input: nums = [1]
Output: 1
```

---

### ⚠️ Ràng buộc

* `1 <= nums.length <= 3 * 10^4`
* `-3 * 10^4 <= nums[i] <= 3 * 10^4`
* Mọi phần tử xuất hiện đúng 2 lần, chỉ 1 phần tử xuất hiện 1 lần

---

## 🧠 Phân tích bài toán

### ❌ Hướng tiếp cận đơn giản (không tối ưu)

* Dùng hash map để đếm số lần xuất hiện
* Độ phức tạp:

  * Time: O(n)
  * Space: O(n)

👉 Không đạt yêu cầu "constant extra space"

---

## 🚀 Ý tưởng tối ưu: XOR

### 🔑 Tính chất quan trọng của XOR:

* `a ^ a = 0`
* `a ^ 0 = a`
* XOR giao hoán và kết hợp:

  * `a ^ b ^ a = b`

---

### 💡 Ý tưởng:

Nếu XOR tất cả phần tử trong mảng:

* Các số xuất hiện 2 lần sẽ triệt tiêu nhau về 0
* Chỉ còn lại số xuất hiện 1 lần





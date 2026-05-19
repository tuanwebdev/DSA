## 📋 Đề bài

**Yêu cầu:** Cho một số nguyên `numRows`, hãy trả về `numRows` dòng đầu tiên của Tam giác Pascal.

**Định nghĩa:** Trong Tam giác Pascal, mỗi số là tổng của hai số trực tiếp phía trên nó.

**Ràng buộc:** `1 <= numRows <= 30`

---

### Ví dụ

**Ví dụ 1:**
```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**Ví dụ 2:**
```
Input: numRows = 1
Output: [[1]]
```

---

## 🔍 Phân tích bài toán

### Tam giác Pascal trông như thế nào?

```
Dòng 1:        1
Dòng 2:       1 1
Dòng 3:      1 2 1
Dòng 4:     1 3 3 1
Dòng 5:    1 4 6 4 1
```

### Quy luật xây dựng

1. **Dòng 1:** Luôn là `[1]`
2. **Các dòng tiếp theo:**
   - Số đầu tiên và số cuối cùng **luôn là 1**
   - Mỗi số ở giữa = **số bên trái phía trên + số bên phải phía trên**

### Minh họa cách tạo dòng mới

Giả sử đã có dòng 3 là `[1, 2, 1]`, muốn tạo dòng 4:

```
Dòng 3:   1    2    1
           \  / \  /
            \/   \/
Dòng 4:  1   3    3   1
```

- Số thứ 2 của dòng 4: `1 + 2 = 3`
- Số thứ 3 của dòng 4: `2 + 1 = 3`
- Thêm số 1 ở đầu và cuối

---

## 💡 Hướng giải quyết

### Ý tưởng chính

> **Dùng dòng trước để tạo dòng sau**, lặp cho đến khi đủ số dòng yêu cầu.

### Các bước thực hiện

1. **Khởi tạo** mảng kết quả chứa sẵn dòng đầu tiên: `[[1]]`
2. **Lặp** trong khi số dòng hiện có ít hơn `numRows`:
   - Lấy **dòng cuối cùng** hiện tại
   - Tạo **dòng mới** bắt đầu bằng `[1]`
   - Duyệt qua dòng cuối, cộng từng cặp số đứng cạnh nhau, thêm vào dòng mới
   - Thêm số `1` vào cuối dòng mới
   - Thêm dòng mới vào mảng kết quả
3. **Trả về** mảng kết quả

---

### Sơ đồ các bước với numRows = 4

```
Bắt đầu:      [[1]]                          ← đã có dòng 1
                                            
Lần lặp 1:    Lấy dòng cuối [1]
              Tạo dòng mới [1, 1]
              Kết quả: [[1], [1,1]]          ← đã có 2 dòng

Lần lặp 2:    Lấy dòng cuối [1, 1]
              Cặp (1,1) → 2
              Tạo dòng mới [1, 2, 1]
              Kết quả: [[1],[1,1],[1,2,1]]   ← đã có 3 dòng

Lần lặp 3:    Lấy dòng cuối [1, 2, 1]
              Cặp (1,2) → 3, (2,1) → 3
              Tạo dòng mới [1, 3, 3, 1]
              Kết quả: [[1],[1,1],[1,2,1],[1,3,3,1]] ← đủ 4 dòng
```

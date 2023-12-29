## Mô tả

Là một ứng dụng Mua sắm online, phát triển bằng: React, Redux, TypeScript, SCSS và HTML

## Công nghệ và công cụ

- **Frontend:**
    React, Redux, TypeScript, SCSS, HTML

- **Backend:**
    Javascript (Node.js), Express, Sequelize, MySQL

## Triển Khai Cơ Sở Dữ Liệu

Ứng dụng của chúng tôi sử dụng MySQL làm cơ sở dữ liệu. Để triển khai cơ sở dữ liệu, bạn cần cài đặt XAMPP và khởi động MySQL server. Bạn có thể tải XAMPP từ [trang chính thức của XAMPP](https://www.apachefriends.org/index.html).

### Hướng Dẫn Cài Đặt XAMPP:

1. **Tải XAMPP:**
   - Truy cập [trang tải XAMPP](https://www.apachefriends.org/index.html).
   - Tải phiên bản XAMPP phù hợp với hệ điều hành của bạn.

2. **Cài Đặt XAMPP:**
   - Mở tệp cài đặt và làm theo hướng dẫn trên màn hình để cài đặt XAMPP.
   - Chọn cài đặt MySQL khi được yêu cầu.

3. **Khởi Động MySQL Server:**
   - Mở XAMPP Control Panel sau khi cài đặt.
   - Khởi động MySQL server từ danh sách các modules.

Bây giờ, cơ sở dữ liệu MySQL của bạn đã sẵn sàng để sử dụng với ứng dụng của chúng tôi.

## Hướng Dẫn Cài Đặt Ứng dụng web

### 1. **Clone dự án:**
    
#### Sử dụng git: 

    ```bash
    git clone https://github.com/truonghoan09/Shoping_Store.git
    
    ```

#### Sử dụng svn

    ```bash
    svn checkout https://github.com/truonghoan09/Shoping_Store.git
    
    ```

### 2. **Cài đặt dependencies:**

#### Sử dụng npm: 

    ```bash
    cd Shoping_Store/client
    npm install

    cd ../server
    npm install
    ```

#### Sử dụng yarn: 

    ```bash
    cd Shoping_Store/client
    yarn install

    cd ../server
    yarn install
    ```

### 3. **Tạo Migrations cho database:**

```bash
    cd Shoping_Store/server
    npx sequelize-cli db:migrate
```

### 4. **Bắt Đầu Ứng Dụng:**

#### Sử dụng npm: 

    ```bash
    cd Shoping_Store/client
    npm run dev

    cd ../server
    npm start
    ```

#### Sử dụng yarn: 

    ```bash
    cd Shoping_Store/client
    yarn run dev

    cd ../server
    yarn run start
    ```
Bây giờ, ứng dụng của bạn sẵn sàng để sử dụng!
/* 

    ? Bài 5 : Real Object

    *2 chuẩn bị file , setup config webpack , babel
        Todo : require('webpack') 
                module.export{}

        trong webpack cofig 
            entry:
            output: {}
                path(dirname và foler), filename
            module{}
                rules[]
                    use,test,excludes (babel)

        Tạo .babelrc 
            tạo object chứa presets là 1 array 
                2 phần tử là babel preset env và react 

        Trong rules []
            obj use là array chứa
                style-loader, css-loader 
            test .css 
        !(bundle nhiều file index.js trong cùng 1 thư mục src )
    
    *6 vendor 
        tại entry 
            thay bằng object 
            prop là bundle trỏ đến file index.js 
            vendor trỏ đến biến VENDOR_LIBS 

        tạo biến VENDOR_LIBS ở ngoài module là 1 array chửa các thư viện

        tại output 
            thay đổi trỏ file name thành 1 string array
                '[name].js'

    *7 nén code đã có
        (ví dụ tại index,js có 2 thư viện react redux , mà vendor cũng có react redux thì chỉ cần 1 bên có là đủ )

        tạo plugins là 1 array 
            tạo MỚI phương thức CommonsChunkPlugin(là 1 function object) của webpack.optimize 
                name là 'vendor'

    *8 install html vào trong dist/
        todo: npm install --save-dev html-webpack-plugin

        require plugin vói biến HtmlWebpackPlugin
        trong plugins[]
            tạo mới nó là functon object 
                có props là template và giá trị là trỏ đến thư mục có index.html 
                    (src/)

    *9 Lưu hasing cache
        (Trình duyệt lưu cache , nếu tên file abc.js không thay đổi thì nó sẽ lưu lại cache , tên file thay đổi thì nó chạy lại file )
        thêm [chunkhash] tại filename 

        tại plugins[]
            CommonChunkPlugin 
                thêm 1 file khác là manifest 
                (names thành array)

    *10 test 
        build file ra xem 
        vào trong index.js  log thử ra text 
        sau đó build file xem file có thay dooi khong 

    *11 clear project 
        Todo : npm install --save-dev rimraf 
        config lại packer.json
        "clean": "rimraf dist"
        "build": "npm run clean && webpack"

    ? Bài 6 webpack dev sever 
       Todo:  npm install --save-dev webpack-dev-server@2.2.0-rc.0

       cài đặt và chỉnh packer json và chạy

    ? Bài 7 React
        (file router.js trong react khi build ra sẽ là full code , ta sẽ chia nhỏ code ra từng trang khi load)
        
        Tại router.js 
            <Router ta sẽ xóa các route con
                truyền vào props routes với biến là componentRoutes

            Tạo biến componentRoutes là object
                propr là 
                component: Home (như route cũ)
                path: '/' (trỏ đên trang chủ)
                indexRoute : {component:ArtistMain}
                childRoutes : là 1 array chứa các route con là các object
                    path : 'artists/new'
                    getComponent(location, cb){
                        chạy hàm webpack System.import('Trỏ đến đường link').then(module => cb(null. module.default))
                    }
                    Todo: Bài tập , vào trang đăng ký (ko phải trnag chủ , nó load luôn trang edit)

    

    ? Bài 8  Deloy static site


        *2 NODE_ENV

        * "https://stackjava.com/nodejs/thiet-lap-node-env-cho-node-js-moi-truong-product-dev-test.html"

        *https://viblo.asia/p/lam-viec-voi-environment-variables-trong-nodejs-maGK7ONeKj2

        "NODE_ENV là một biến môi trường giúp xác định môi trường chạy của ứng dụng Node.js từ đó giúp lựa chọn các cấu hình khác nhau của ứng dụng tùy theo môi trường."

        Thiết lập node-env cho Node.js (Môi trường Product, Dev, Test).

        Vấn đề đặt ra là mỗi lần deploy ứng dụng node.js trên các môi trường khác nhau (Product, dev, test). Bạn lại phải sửa lại code để nó kết nối tới 1 một database khác nhau. Nhất là trong trường hợp việc deploy ứng dụng tự động thì việc sửa code đó lại phức tạp hơn.

        Giải pháp là khi deploy ứng dụng ta sẽ kiểm tra đó là môi trường nào để tạo kết nối tới database đó. Và biến node_env chính là biến để kiểm tra môi trường chạy ứng dụng node.js.

        *
        Todo: (npm install -g win-node-env)

        Tại plugins của webpack
            Tạo mới webpack.DefinePlugin({})
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            
        Trong packet.json
            tại build
                NODE_ENV=production 
                -p (minifine code)
                        
    *3 Làm việc trên web tĩnh
    Todo : npm install -g surge 
    npm run build
    surge -p dist 

    Todo : npm list -g --depth 0
    npm uninstall -g <name> --save

*/
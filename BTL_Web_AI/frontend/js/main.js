// 1. KHO DỮ LIỆU SẢN PHẨM (Đã tăng lên 8 sản phẩm đa dạng danh mục)
const products = [
    {
        "id": "phone-001",
        "category": "Điện Thoại",
        "brand": "Apple",
        "name": "iPhone 15 Pro Max 256GB - Titan Tự Nhiên",
        "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        "our_price": 29490000,
        "old_price": 34990000,
        "specs": { "Màn hình": "6.7 inch, Super Retina", "Chipset": "Apple A17 Pro 3nm", "RAM": "8 GB", "Bộ nhớ": "256 GB" },
        "competitors": { "thegioididong": 29990000, "fptshop": 29790000 }
    },
    {
        "id": "laptop-001",
        "category": "Laptop / Máy Tính",
        "brand": "Apple",
        "name": "MacBook Air M3 13 inch 2024 (8GB/256GB)",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        "our_price": 27490000,
        "old_price": 29990000,
        "specs": { "Màn hình": "13.6 inch Liquid Retina", "Chipset": "Apple M3", "RAM": "8 GB", "Bộ nhớ": "256 GB" },
        "competitors": { "thegioididong": 27990000, "fptshop": 27890000 }
    },
    {
        "id": "phone-002",
        "category": "Điện Thoại",
        "brand": "Samsung",
        "name": "Samsung Galaxy S24 Ultra 256GB",
        "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        "our_price": 25990000,
        "old_price": 31990000,
        "specs": { "Màn hình": "6.8 inch, Dynamic AMOLED", "Chipset": "Snapdragon 8 Gen 3", "RAM": "12 GB", "Bộ nhớ": "256 GB" },
        "competitors": { "thegioididong": 26990000, "fptshop": 26490000 }
    },
    {
        "id": "laptop-002",
        "category": "Laptop / Máy Tính",
        "brand": "Dell",
        "name": "Dell XPS 13 Plus 9320 Core i7",
        "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
        "our_price": 38990000,
        "old_price": 44000000,
        "specs": { "Màn hình": "13.4 inch OLED 3.5K", "Chipset": "Intel Core i7 1360P", "RAM": "16 GB", "Bộ nhớ": "512 GB" },
        "competitors": { "thegioididong": 39990000, "fptshop": 39490000 }
    },
    {
        "id": "accessory-001",
        "category": "Phụ Kiện",
        "brand": "Sony",
        "name": "Tai nghe Chụp Tai Chống Ồn Sony WH-1000XM5",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        "our_price": 6490000,
        "old_price": 8490000,
        "specs": { "Kết nối": "Bluetooth 5.2, Type-C", "Pin": "Up to 30 giờ sử dụng", "Công nghệ": "Chống ồn ANC đỉnh cao", "Trọng lượng": "250g" },
        "competitors": { "thegioididong": 6990000, "fptshop": 6790000 }
    },
    {
        "id": "accessory-002",
        "category": "Phụ Kiện",
        "brand": "Apple",
        "name": "Tai nghe Apple AirPods Pro Gen 2 USB-C",
        // Đã cập nhật lại link ảnh tai nghe AirPods Pro chuẩn đét ở dưới này:
        "image": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500", 
        "our_price": 5590000,
        "old_price": 6190000,
        "specs": { "Chipset": "Apple H2 mạnh mẽ", "Chống nước": "IP54 chống bụi bẩn", "Sạc": "Hỗ trợ sạc MagSafe", "Thời lượng pin": "6 giờ liên tục" },
        "competitors": { "thegioididong": 5790000, "fptshop": 5690000 }
    },
    {
        "id": "phone-003",
        "category": "Điện Thoại",
        "brand": "Xiaomi",
        "name": "Xiaomi 14 Ultra 5G (16GB/512GB)",
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        "our_price": 27990000,
        "old_price": 32990000,
        "specs": { "Màn hình": "6.73 inch WQHD+", "Chipset": "Snapdragon 8 Gen 3", "RAM": "16 GB", "Bộ nhớ": "512 GB" },
        "competitors": { "thegioididong": 29990000, "fptshop": 28990000 }
    },
    {
        "id": "laptop-003",
        "category": "Laptop / Máy Tính",
        "brand": "Asus",
        "name": "Laptop Gaming ASUS ROG Strix G16",
        "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
        "our_price": 34490000,
        "old_price": 38990000,
        "specs": { "Màn hình": "16 inch 165Hz mượt mà", "Chipset": "Intel Core i7 13650HX", "Card đồ họa": "RTX 4060 8GB", "RAM": "16 GB" },
        "competitors": { "thegioididong": 35990000, "fptshop": 34990000 }
    },
    { id: "sp-04", category: "Điện Thoại", brand: "Samsung", name: "Samsung Galaxy S24 Ultra", image: "https://images.unsplash.com/photo-1706173002235-e6308466e3b5?w=500", our_price: 26990000, old_price: 31990000, specs: { "Màn hình": "6.8 inch", "Chipset": "Snapdragon 8 Gen 3" }, competitors: { thegioididong: 29990000, fptshop: 28990000 } },
    { id: "sp-05", category: "Laptop / Máy Tính", brand: "Apple", name: "MacBook Air M3 13 inch", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500", our_price: 27990000, old_price: 29990000, specs: { "Chipset": "Apple M3", "RAM": "8GB" }, competitors: { thegioididong: 29990000, fptshop: 29500000 } },
    { id: "sp-06", category: "Điện Thoại", brand: "Oppo", name: "Oppo Find X7 Ultra", image: "https://images.unsplash.com/photo-1678911820864-8457e5e32435?w=500", our_price: 22990000, old_price: 25990000, specs: { "Màn hình": "6.8 inch", "RAM": "16GB" }, competitors: { thegioididong: 24990000, fptshop: 24500000 } },
    { id: "sp-07", category: "Laptop / Máy Tính", brand: "Lenovo", name: "Lenovo Yoga Slim 7i", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500", our_price: 21500000, old_price: 24990000, specs: { "CPU": "Core i5", "RAM": "16GB" }, competitors: { thegioididong: 23500000, fptshop: 23000000 } },
    { id: "sp-08", category: "Điện Thoại", brand: "Xiaomi", name: "Xiaomi 13T Pro", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500", our_price: 13990000, old_price: 16990000, specs: { "Màn hình": "6.6 inch", "RAM": "12GB" }, competitors: { thegioididong: 15990000, fptshop: 15500000 } },
    { id: "sp-09", category: "Laptop / Máy Tính", brand: "Dell", name: "Dell Inspiron 15 3530", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500", our_price: 17990000, old_price: 20990000, specs: { "CPU": "Core i5", "RAM": "8GB" }, competitors: { thegioididong: 19990000, fptshop: 19500000 } },
    { id: "sp-10", category: "Điện Thoại", brand: "Samsung", name: "Galaxy A55 5G", image: "https://images.unsplash.com/photo-1710534237731-50e50257245d?w=500", our_price: 8990000, old_price: 10990000, specs: { "Màn hình": "6.6 inch", "RAM": "8GB" }, competitors: { thegioididong: 9990000, fptshop: 9500000 } },
    { id: "sp-11", category: "Laptop / Máy Tính", brand: "HP", name: "HP Pavilion 15", image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=500", our_price: 15990000, old_price: 18990000, specs: { "CPU": "Core i5", "RAM": "8GB" }, competitors: { thegioididong: 17990000, fptshop: 17500000 } },
    { id: "sp-12", category: "Điện Thoại", brand: "Apple", name: "iPhone 15", image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500", our_price: 19990000, old_price: 22990000, specs: { "Màn hình": "6.1 inch", "RAM": "6GB" }, competitors: { thegioididong: 22990000, fptshop: 22500000 } },
    { id: "sp-13", category: "Laptop / Máy Tính", brand: "Acer", name: "Acer Aspire 5", image: "https://images.unsplash.com/photo-1544731612-de7f96ffe55f?w=500", our_price: 12990000, old_price: 15990000, specs: { "CPU": "Core i3", "RAM": "8GB" }, competitors: { thegioididong: 14990000, fptshop: 14500000 } },
    { id: "sp-14", category: "Điện Thoại", brand: "Realme", name: "Realme GT5 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500", our_price: 14990000, old_price: 17990000, specs: { "Màn hình": "6.7 inch", "RAM": "12GB" }, competitors: { thegioididong: 16990000, fptshop: 16500000 } },
    { id: "sp-15", category: "Laptop / Máy Tính", brand: "MSI", name: "MSI Bravo 15", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500", our_price: 19990000, old_price: 23990000, specs: { "CPU": "Ryzen 5", "GPU": "RTX 3050" }, competitors: { thegioididong: 21990000, fptshop: 21500000 } },
    { id: "sp-16", category: "Điện Thoại", brand: "Vivo", name: "Vivo X100 Pro", image: "https://images.unsplash.com/photo-1647466580977-2f63884849a9?w=500", our_price: 23990000, old_price: 26990000, specs: { "Màn hình": "6.7 inch", "RAM": "16GB" }, competitors: { thegioididong: 25990000, fptshop: 25500000 } },
    { id: "sp-17", category: "Laptop / Máy Tính", brand: "Microsoft", name: "Surface Laptop 5", image: "https://images.unsplash.com/photo-1593642634367-d981316b2518?w=500", our_price: 25990000, old_price: 29990000, specs: { "CPU": "Core i5", "RAM": "8GB" }, competitors: { thegioididong: 28990000, fptshop: 28500000 } },
    { id: "sp-18", category: "Điện Thoại", brand: "Google", name: "Google Pixel 8 Pro", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500", our_price: 21990000, old_price: 25990000, specs: { "Màn hình": "6.7 inch", "Chip": "Tensor G3" }, competitors: { thegioididong: 24990000, fptshop: 24500000 } },
    { id: "sp-19", category: "Laptop / Máy Tính", brand: "Asus", name: "Asus Vivobook 14", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", our_price: 11990000, old_price: 14990000, specs: { "CPU": "Core i3", "RAM": "8GB" }, competitors: { thegioididong: 13990000, fptshop: 13500000 } },
    { id: "sp-20", category: "Phụ Kiện", brand: "Anker", name: "Sạc Anker 735 (GaNPrime)", image: "https://images.unsplash.com/photo-1583863788434-e59a3c306da5?w=500", our_price: 1290000, old_price: 1590000, specs: { "Công suất": "65W", "Cổng": "3 cổng" }, competitors: { thegioididong: 1490000, fptshop: 1450000 } },
    { id: "sp-21", category: "Phụ Kiện", brand: "Logitech", name: "Chuột MX Master 3S", image: "https://images.unsplash.com/photo-1527864550417-7fd91051a365?w=500", our_price: 2490000, old_price: 2990000, specs: { "DPI": "8000", "Kết nối": "Bluetooth" }, competitors: { thegioididong: 2790000, fptshop: 2750000 } },
    { id: "sp-22", category: "Phụ Kiện", brand: "JBL", name: "Loa JBL Flip 6", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500", our_price: 2290000, old_price: 2790000, specs: { "Công suất": "30W", "Chống nước": "IP67" }, competitors: { thegioididong: 2590000, fptshop: 2550000 } },
    { id: "sp-23", category: "Điện Thoại", brand: "Samsung", name: "Galaxy Z Fold 5", image: "https://images.unsplash.com/photo-1691244438343-41c305c48b26?w=500", our_price: 33990000, old_price: 40990000, specs: { "Màn hình": "7.6 inch", "RAM": "12GB" }, competitors: { thegioididong: 38990000, fptshop: 38500000 } },
    { id: "sp-24", category: "Laptop / Máy Tính", brand: "Dell", name: "Dell XPS 13 Plus", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500", our_price: 35990000, old_price: 42990000, specs: { "CPU": "Core i7", "RAM": "16GB" }, competitors: { thegioididong: 40990000, fptshop: 40500000 } },
    { id: "sp-25", category: "Điện Thoại", brand: "Apple", name: "iPhone 14 Pro", image: "https://images.unsplash.com/photo-1663461282200-e7f300c14902?w=500", our_price: 22990000, old_price: 26990000, specs: { "Màn hình": "6.1 inch", "RAM": "6GB" }, competitors: { thegioididong: 25990000, fptshop: 25500000 } },
    { id: "sp-26", category: "Laptop / Máy Tính", brand: "Apple", name: "MacBook Pro M3 Max", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", our_price: 79990000, old_price: 89990000, specs: { "Chip": "M3 Max", "RAM": "36GB" }, competitors: { thegioididong: 85990000, fptshop: 85500000 } },
    { id: "sp-27", category: "Phụ Kiện", brand: "Apple", name: "AirPods Max", image: "https://images.unsplash.com/photo-1613141411246-3d88ee325565?w=500", our_price: 12490000, old_price: 14990000, specs: { "Chống ồn": "Chủ động", "Pin": "20 giờ" }, competitors: { thegioididong: 13990000, fptshop: 13500000 } },
    { id: "sp-28", category: "Điện Thoại", brand: "Xiaomi", name: "Xiaomi 14", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500", our_price: 18990000, old_price: 21990000, specs: { "Màn hình": "6.36 inch", "RAM": "12GB" }, competitors: { thegioididong: 20990000, fptshop: 20500000 } },
    { id: "sp-29", category: "Laptop / Máy Tính", brand: "Lenovo", name: "Lenovo ThinkPad X1", image: "https://images.unsplash.com/photo-1544731612-de7f96ffe55f?w=500", our_price: 32990000, old_price: 38990000, specs: { "CPU": "Core i7", "RAM": "16GB" }, competitors: { thegioididong: 36990000, fptshop: 36500000 } },
    { id: "sp-30", category: "Phụ Kiện", brand: "Sony", name: "Tai nghe WH-1000XM4", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", our_price: 5990000, old_price: 7990000, specs: { "Chống ồn": "Đỉnh cao", "Pin": "30 giờ" }, competitors: { thegioididong: 6990000, fptshop: 6500000 } },
    { id: "sp-31", category: "Điện Thoại", brand: "Samsung", name: "Galaxy S23 FE", image: "https://images.unsplash.com/photo-1698778573689-106579549929?w=500", our_price: 10990000, old_price: 13990000, specs: { "Màn hình": "6.4 inch", "RAM": "8GB" }, competitors: { thegioididong: 12990000, fptshop: 12500000 } },
    { id: "sp-32", category: "Laptop / Máy Tính", brand: "Asus", name: "Asus Zenbook 14 OLED", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500", our_price: 24990000, old_price: 28990000, specs: { "Màn hình": "OLED 14 inch", "RAM": "16GB" }, competitors: { thegioididong: 27990000, fptshop: 27500000 } },
    { id: "sp-33", category: "Điện Thoại", brand: "Xiaomi", name: "Redmi Note 13 Pro", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500", our_price: 7990000, old_price: 9990000, specs: { "Màn hình": "6.67 inch", "RAM": "8GB" }, competitors: { thegioididong: 8990000, fptshop: 8500000 } },
    { id: "sp-34", category: "Laptop / Máy Tính", brand: "Dell", name: "Dell Gaming G15", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500", our_price: 22990000, old_price: 26990000, specs: { "CPU": "Core i7", "GPU": "RTX 4050" }, competitors: { thegioididong: 25990000, fptshop: 25500000 } },
    { id: "sp-35", category: "Điện Thoại", brand: "Oppo", name: "Oppo Reno11 F", image: "https://images.unsplash.com/photo-1678911820864-8457e5e32435?w=500", our_price: 8490000, old_price: 9990000, specs: { "Màn hình": "6.7 inch", "RAM": "8GB" }, competitors: { thegioididong: 9490000, fptshop: 9000000 } },
    { id: "sp-36", category: "Phụ Kiện", brand: "Apple", name: "Apple Watch Series 9", image: "https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?w=500", our_price: 9990000, old_price: 11990000, specs: { "Kích thước": "41mm", "Tính năng": "GPS" }, competitors: { thegioididong: 10990000, fptshop: 10500000 } },
    { id: "sp-37", category: "Laptop / Máy Tính", brand: "HP", name: "HP Envy x360", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500", our_price: 23990000, old_price: 27990000, specs: { "Màn hình": "Cảm ứng", "RAM": "16GB" }, competitors: { thegioididong: 26990000, fptshop: 26500000 } },
    { id: "sp-38", category: "Điện Thoại", brand: "Vivo", name: "Vivo V30", image: "https://images.unsplash.com/photo-1647466580977-2f63884849a9?w=500", our_price: 11990000, old_price: 13990000, specs: { "Màn hình": "6.78 inch", "RAM": "12GB" }, competitors: { thegioididong: 12990000, fptshop: 12500000 } },
    { id: "sp-39", category: "Phụ Kiện", brand: "Logitech", name: "Bàn phím MX Keys S", image: "https://images.unsplash.com/photo-1618384887929-16d33fab4e59?w=500", our_price: 2590000, old_price: 3190000, specs: { "Kết nối": "Không dây", "Đèn nền": "Có" }, competitors: { thegioididong: 2990000, fptshop: 2850000 } },
    { id: "sp-40", category: "Laptop / Máy Tính", brand: "Acer", name: "Acer Predator Helios Neo", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500", our_price: 28990000, old_price: 33990000, specs: { "CPU": "Core i7", "GPU": "RTX 4060" }, competitors: { thegioididong: 32990000, fptshop: 32500000 } }
];


function formatMoney(num) {
    return num.toLocaleString('vi-VN') + 'đ';
}

// 2. LOGIC GIỎ HÀNG (LocalStorage)
function getCart() {
    return JSON.parse(localStorage.getItem('techstore_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('techstore_cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId) {
    let cart = getCart();
    let item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    saveCart(cart);
    alert('🎉 Đã thêm sản phẩm vào giỏ hàng thành công! Hãy vào trang Giỏ Hàng để kiểm tra nhé.');
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        let totalQty = getCart().reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = totalQty;
    }
}

// 3. XỬ LÝ TRANG CHỦ (index.html)
function initIndexPage() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    function renderProducts(filteredProducts) {
        grid.innerHTML = '';
        filteredProducts.forEach(p => {
            grid.innerHTML += `
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-4 flex flex-col group relative">
                    <span class="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10">RẺ HƠN ĐỐI THỦ</span>
                    <div class="aspect-square w-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                        <img src="${p.image}" alt="${p.name}" class="object-contain h-40 w-40 group-hover:scale-105 transition-transform">
                    </div>
                    <div class="mt-4 flex-1 flex flex-col">
                        <span class="text-xs text-gray-400 font-semibold uppercase">${p.brand}</span>
                        <h3 class="text-sm font-bold text-gray-800 line-clamp-2 mt-1 hover:text-blue-600 cursor-pointer" onclick="location.href='detail.html?id=${p.id}'">${p.name}</h3>
                        <div class="mt-2 flex items-baseline gap-2">
                            <span class="text-base font-black text-blue-600">${formatMoney(p.our_price)}</span>
                            <span class="text-xs text-gray-400 line-through">${formatMoney(p.old_price)}</span>
                        </div>
                        <a href="detail.html?id=${p.id}" class="mt-4 block text-center bg-gray-900 text-white text-xs font-bold py-2.5 rounded-xl hover:bg-blue-600 transition-colors">
                            Xem Chi Tiết & So Sánh Giá
                        </a>
                    </div>
                </div>
            `;
        });
    }

    renderProducts(products);

    const filterButtons = document.querySelectorAll('section button');
    filterButtons.forEach(btn => {
        btn.onclick = function() {
            filterButtons.forEach(b => b.className = "bg-white text-gray-600 hover:bg-gray-100 px-5 py-2 rounded-xl text-sm font-medium border border-gray-200 whitespace-nowrap transition-colors");
            this.className = "bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-medium shadow-sm whitespace-nowrap";
            
            const category = this.innerText;
            if (category === "Tất Cả Đồ Điện Tử") {
                renderProducts(products);
            } else {
                renderProducts(products.filter(p => p.category === category));
            }
        };
    });
}

// 4. XỬ LÝ TRANG CHI TIẾT (detail.html)
let currentProduct = null;
function initDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Nếu không truyền ID sản phẩm thì tìm sản phẩm đầu tiên làm mẫu
    currentProduct = products.find(p => p.id === productId) || products[0];
    if (!currentProduct) return;

    // Đổ dữ liệu sản phẩm thật vào HTML
    document.title = currentProduct.name;
    const titleHeader = document.querySelector('main h1');
    if (titleHeader) titleHeader.innerText = currentProduct.name;
    // --- ĐOẠN CODE FIX LỖI ĐƯỜNG DẪN BẠN CHÈN VÀO ĐÂY ---
        const bcCategory = document.getElementById('detail-bc-category');
        const bcName = document.getElementById('detail-bc-name');
        if (bcCategory) bcCategory.innerText = currentProduct.category;
        if (bcName) bcName.innerText = currentProduct.name;
        // --- END ĐOẠN CHÈN ---
    const imgElement = document.querySelector('main img');
    if (imgElement) imgElement.src = currentProduct.image;
    
    const priceElement = document.querySelector('.text-2xl.font-black.text-blue-600');
    if (priceElement) priceElement.innerText = formatMoney(currentProduct.our_price);
    
    // Đổ thông số kỹ thuật
    const specsGrid = document.querySelector('main .grid-cols-2');
    if (specsGrid) {
        specsGrid.innerHTML = '';
        for (const [key, value] of Object.entries(currentProduct.specs)) {
            specsGrid.innerHTML += `<div class="bg-gray-50 p-2.5 rounded-xl"><span class="text-gray-400">${key}:</span> <strong class="text-gray-700 block">${value}</strong></div>`;
        }
    }

    // Đổ bảng so sánh giá
    const tbody = document.querySelector('table tbody');
    if (tbody) {
        let diffTGDD = currentProduct.competitors.thegioididong - currentProduct.our_price;
        let diffFPT = currentProduct.competitors.fptshop - currentProduct.our_price;
        tbody.innerHTML = `
            <tr class="bg-blue-50/50 font-bold text-blue-600">
                <td class="p-4 flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> TechStore (Của bạn)</td>
                <td class="p-4">${formatMoney(currentProduct.our_price)}</td>
                <td class="p-4 text-emerald-600">Giá gốc tốt nhất</td>
                <td class="p-4 text-xs text-gray-600">Bảo hành 24 tháng lỗi 1 đổi 1, Hỗ trợ AI trọn đời</td>
            </tr>
            <tr class="text-gray-600">
                <td class="p-4">Thế Giới Di Động</td>
                <td class="p-4 line-through text-gray-400">${formatMoney(currentProduct.competitors.thegioididong)}</td>
                <td class="p-4 text-red-500">Đắt hơn ${formatMoney(diffTGDD)}</td>
                <td class="p-4 text-xs">Bảo hành 12 tháng tại hãng</td>
            </tr>
            <tr class="text-gray-600">
                <td class="p-4">FPT Shop</td>
                <td class="p-4 line-through text-gray-400">${formatMoney(currentProduct.competitors.fptshop)}</td>
                <td class="p-4 text-red-500">Đắt hơn ${formatMoney(diffFPT)}</td>
                <td class="p-4 text-xs">Bảo hành 12 tháng tại hãng</td>
            </tr>
        `;
    }
    // --- ĐOẠN CODE TỰ ĐỘNG ĐỔ LỜI CHÀO CHATBOX ---
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages && currentProduct) {
        // Tính chênh lệch giá so với Thế Giới Di Động
        const priceDiff = currentProduct.competitors.thegioididong - currentProduct.our_price;
        const formattedDiff = new Intl.NumberFormat('vi-VN').format(priceDiff) + 'đ';

        // Đổ lời chào động vào khung chat
        chatMessages.innerHTML = `
            <div class="flex items-start gap-2 max-w-[85%]">
                <div class="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 text-xs font-bold">AI</div>
                <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-xs leading-relaxed text-gray-700">
                    Xin chào anh <strong>Nguyễn Văn A</strong>! Em thấy anh đang xem sản phẩm <strong>${currentProduct.name}</strong>. Sản phẩm này bên em đang có giá ưu đãi cực tốt, rẻ hơn Thế Giới Di Động tận <strong>${formattedDiff}</strong> đó ạ! Anh cần em tư vấn gì thêm về cấu hình hay các chương trình khuyến mãi không ạ? 🌟
                </div>
            </div>
        `;
    }
    // --- HẾT ĐOẠN CHÈN ---

    // VÁ LỖI: Gọi chính xác bằng ID bảo đảm kích hoạt đúng nút thêm vào giỏ
    const btnAdd = document.getElementById('btn-add-to-cart');
    if (btnAdd) {
        btnAdd.onclick = () => addToCart(currentProduct.id);
    }
}

// 5. XỬ LÝ TRANG GIỎ HÀNG (cart.html)
function initCartPage() {
    const cartQtySpan = document.getElementById('cart-qty');
    const container = document.getElementById('cart-items-list');
    const btnCheckout = document.getElementById('btn-checkout');

    let cart = getCart();
    // --- ĐOẠN CODE KÍCH HOẠT NÚT PHƯƠNG THỨC THANH TOÁN ---
    const radCod = document.querySelector('input[value="COD"]');
    const radQr = document.querySelector('input[value="QR"]');
    const lblCod = document.getElementById('label-pay-cod');
    const lblQr = document.getElementById('label-pay-qr');

    if (radCod && radQr && lblCod && lblQr) {
        const togglePaymentStyle = () => {
            if (radCod.checked) {
                // Bật COD, tắt QR
                lblCod.className = "flex items-center justify-between p-4 border-2 border-blue-600 bg-blue-50/30 rounded-xl cursor-pointer transition-all select-none";
                lblQr.className = "flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer transition-all select-none";
            } else if (radQr.checked) {
                // Bật QR, tắt COD
                lblCod.className = "flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer transition-all select-none";
                lblQr.className = "flex items-center justify-between p-4 border-2 border-blue-600 bg-blue-50/30 rounded-xl cursor-pointer transition-all select-none";
            }
        };
        // Lắng nghe sự kiện thay đổi của 2 nút radio
        radCod.onchange = togglePaymentStyle;
        radQr.onchange = togglePaymentStyle;
    }
    // ------------------------------------------------------

    if (btnCheckout) {
        btnCheckout.onclick = function() {
            if (cart.length === 0) {
                alert('🛒 Giỏ hàng của bạn đang trống, hãy thêm sản phẩm trước khi đặt hàng nhé!');
                return;
            }
            alert('🚀 Chúc mừng bạn đã đặt hàng thành công! Đơn hàng đã được ghi nhận trên hệ thống.');
            localStorage.removeItem('techstore_cart');
            location.href = 'index.html';
        };
    }

    if (!container) return;

    if (cartQtySpan) {
        cartQtySpan.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    }

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <h2 class="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <i class="fa-solid fa-basket-shopping text-blue-600"></i> Sản phẩm trong giỏ hàng (0)
            </h2>
            <p class="text-center text-gray-400 py-8 text-sm">Giỏ hàng trống trơn à bạn ơi! Vui lòng quay lại trang chủ chọn đồ nhé. 🛒</p>
        `;
        updatePrices(0);
        return;
    }

    let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    container.innerHTML = `
        <h2 class="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
            <i class="fa-solid fa-basket-shopping text-blue-600"></i> Sản phẩm trong giỏ hàng (${totalQty})
        </h2>
    `;

    let subtotal = 0;

    cart.forEach(cartItem => {
        let p = products.find(prod => prod.id === cartItem.id);
        if (!p) return;
        subtotal += p.our_price * cartItem.qty;

        let row = document.createElement('div');
        row.className = "flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-gray-100 last:border-0 group";
        row.innerHTML = `
            <div class="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-100">
                <img src="${p.image}" alt="${p.name}" class="object-contain max-h-16">
            </div>
            <div class="flex-1 text-center sm:text-left">
                <h3 class="text-sm font-bold text-gray-800 hover:text-blue-600 cursor-pointer" onclick="location.href='detail.html?id=${p.id}'">${p.name}</h3>
                <span class="text-xs text-gray-400 block mt-0.5">Mã: ${p.id} | Bảo hành 24 tháng</span>
            </div>
            <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button class="px-2.5 py-1 text-gray-500 hover:bg-gray-100 text-xs font-bold btn-minus" data-id="${p.id}">-</button>
                <span class="px-3 py-1 text-xs font-bold bg-white text-gray-800">${cartItem.qty}</span>
                <button class="px-2.5 py-1 text-gray-500 hover:bg-gray-100 text-xs font-bold btn-plus" data-id="${p.id}">+</button>
            </div>
            <div class="text-right">
                <span class="text-sm font-black text-blue-600 block">${formatMoney(p.our_price * cartItem.qty)}</span>
                <button class="text-[11px] text-red-400 hover:text-red-600 font-medium mt-1 btn-del" data-id="${p.id}"><i class="fa-solid fa-trash-can mr-1"></i>Xóa</button>
            </div>
        `;
        container.appendChild(row);
    });

    updatePrices(subtotal);

    container.onclick = function(e) {
        let target = e.target;
        let id = target.getAttribute('data-id') || target.closest('button')?.getAttribute('data-id');
        if (!id) return;

        let cart = getCart();
        let item = cart.find(i => i.id === id);

        if (target.classList.contains('btn-plus')) {
            item.qty += 1;
        } else if (target.classList.contains('btn-minus')) {
            item.qty -= 1;
            if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
        } else if (target.classList.contains('btn-del') || target.closest('.btn-del')) {
            cart = cart.filter(i => i.id !== id);
        }

        saveCart(cart);
        initCartPage();
    };
}

function updatePrices(subtotal) {
    const totalBlocks = document.querySelectorAll('main .lg\\:col-span-1 .border-t span.font-bold, main .lg\\:col-span-1 .border-t span.text-xl');
    if (totalBlocks.length >= 2) {
        totalBlocks[0].innerText = formatMoney(subtotal);
        totalBlocks[1].innerText = formatMoney(subtotal);
    }
}

// 6. CHATBOX AI HOÀN CHỈNH (TỰ ĐỘNG NHẬN DIỆN TỪNG SẢN PHẨM)
function initChatbox() {
    // // A. LẤY CÁC PHẦN TỬ PHỤC VỤ ĐÓNG / MỞ CHATBOX
    const toggleBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeBtn = document.getElementById('close-chat');

    // // B. LẤY CÁC PHẦN TỬ PHỤC VỤ GỬI/NHẬN TIN NHẮN CHAT
    const btnSend = document.getElementById('send-chat');
    const input = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // =========================================================================
    // 1. LOGIC CHÀO TỰ ĐỘNG THEO TRANG
    // =========================================================================
    if (chatMessages) {
        chatMessages.innerHTML = ''; 
        const isDetailPage = window.location.pathname.includes('detail.html');

        if (isDetailPage && typeof currentProduct !== 'undefined' && currentProduct) {
            const priceDiff = (currentProduct.competitors?.thegioididong || 0) - currentProduct.our_price;
            chatMessages.innerHTML = `
                <div class="flex items-start gap-2">
                    <div class="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-gray-100 bg-pink-100 flex items-center justify-center">
                       <img src="https://ui-avatars.com/api/?name=AI&background=2563EB&color=fff&bold=true" class="w-full h-full object-cover">
                    </div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-xs text-gray-700 leading-relaxed">
                        Xin chào <strong>Quý khách</strong>! Em thấy mình đang xem sản phẩm <strong>${currentProduct.name}</strong>. Sản phẩm này bên em đang có giá ưu đãi cực tốt, rẻ hơn Thế Giới Di Động tận <strong>${typeof formatMoney === 'function' ? formatMoney(priceDiff) : priceDiff.toLocaleString() + 'đ'}</strong> đó ạ! 🌟
                    </div>
                </div>
            `;
        } else {
            chatMessages.innerHTML = `
                <div class="flex items-start gap-2">
                    <div class="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-gray-100 bg-pink-100 flex items-center justify-center">
                        <img src="https://ui-avatars.com/api/?name=AI&background=2563EB&color=fff&bold=true" class="w-full h-full object-cover">
                    </div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-xs text-gray-700 leading-relaxed">
                        Xin chào <strong>Quý khách</strong>! Chào mừng mình đến với TechStore. Quý khách đang tìm kiếm điện thoại hay laptop ạ? Em sẵn sàng tư vấn giá tốt nhất cho mình đây! 🌸
                    </div>
                </div>
            `;
        }
    }

    // =========================================================================
    // 2. LOGIC ĐÓNG MỞ CỬA SỔ CHAT
    // =========================================================================
    if (toggleBtn && chatWindow) {
        toggleBtn.onclick = function() {
            chatWindow.classList.toggle('hidden');
        };
    }
    if (closeBtn && chatWindow) {
        closeBtn.onclick = function() {
            chatWindow.classList.add('hidden');
        };
    }

    
    // =========================================================================
    // 3. HÀM GỬI TIN NHẮN (ĐÃ FIX LỖI MẤT TIN NHẮN CŨ)
    // =========================================================================
   async function sendMessage(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        if (!input || !chatMessages) return;
        
        let msg = input.value.trim();
        if (!msg) return;
        
        // 1. Hiển thị tin nhắn của khách lên màn hình
        chatMessages.insertAdjacentHTML('beforeend', `
            <div class="flex items-start gap-2 max-w-[85%] ml-auto justify-end">
                <div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs leading-relaxed">
                    ${msg}
                </div>
            </div>
        `);
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 2. Tạo hiệu ứng ba chấm loading
        const loadingId = "ai-loading-" + Date.now();
        chatMessages.insertAdjacentHTML('beforeend', `
            <div id="${loadingId}" class="flex items-start gap-2 max-w-[85%]">
                <div class="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 text-xs">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div class="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-400">
                    <i class="fa-solid fa-ellipsis fa-bounce"></i> Trợ lý đang xử lý dữ liệu...
                </div>
            </div>
        `);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        try {
            // Lấy thông tin sản phẩm hiện tại để gửi sang n8n làm ngữ cảnh (Context)
            const productName = (typeof currentProduct !== 'undefined' && currentProduct) ? currentProduct.name : "Trang chủ";
            const productPrice = (typeof currentProduct !== 'undefined' && currentProduct) ? currentProduct.our_price : 0;

            // ==========================================
            // ĐỔI LINK WEBHOOK N8N CỦA BẠN VÀO ĐÂY NHÉ
            // ==========================================
            const webhookURL = 'https://phamannn.app.n8n.cloud/webhook/076cead8-14be-4d20-a2bf-6c89fb8b2ffa'; 
            
            // Cấu hình bọc phá mọi loại tường lửa CORS
            const response = await fetch(webhookURL, {
                method: 'POST',
                mode: 'cors', // <--- ĐỔI LẠI THÀNH 'cors' ĐỂ ĐỌC ĐƯỢC CHỮ AI TRẢ VỀ
                headers: { 
                    'Content-Type': 'application/json' // Trả về dạng JSON chuẩn
                },
                body: JSON.stringify({
                    chat_message: msg,
                    current_page: window.location.pathname,
                    product_info: {
                        name: productName,
                        price: productPrice
                    }
                })
            });
            if (!response.ok) {
            throw new Error('Mạng lỗi hoặc không kết nối được n8n');
        }

            // Khi dùng 'no-cors', trình duyệt không cho phép đọc trực tiếp dữ liệu trả về kiểu response.json() công khai nữa
            // Để xử lý mượt mà, tụi mình sẽ tạm thời bỏ qua bước đợi AI rep, tập trung nhìn xem bên n8n đã "ĂN" được dữ liệu chưa.
            
            // Đọc response từ n8n
            const rawText = await response.text();
            const errorSms = document.getElementById('error-sms');
            if (errorSms) errorSms.style.display = 'none';

            // Xóa hiệu ứng loading
            const loadingEl = document.getElementById(loadingId);
            if (loadingEl) loadingEl.remove();

            // Parse JSON an toàn
            let aiReply = '';
            try {
                const data = JSON.parse(rawText);
                const item = Array.isArray(data) ? data[0] : data;
                aiReply = item.output || item.reply || item.text || rawText;
            } catch(e) {
                aiReply = rawText;
            }
            
            // 3. Hiển thị câu trả lời từ n8n
            chatMessages.insertAdjacentHTML('beforeend', `
                <div class="flex items-start gap-2 max-w-[85%]">
                    <div class="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-gray-100 bg-pink-100 flex items-center justify-center">
                        <img src="https://ui-avatars.com/api/?name=AI&background=FFD6E8&color=D946EF&bold=true" class="w-full h-full object-cover">
                    </div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-xs text-gray-700 leading-relaxed">
                        ${aiReply}
                    </div>
                </div>
            `);
        } catch (error) {
            console.error("Lỗi kết nối n8n:", error);
            const loadingEl = document.getElementById(loadingId);
            if (loadingEl) loadingEl.remove();
            
            chatMessages.insertAdjacentHTML('beforeend', `
                <div class="flex items-start gap-2 max-w-[85%]">
                    <div class="w-7 h-7 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 text-xs">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div class="bg-red-50 border border-red-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-red-700">
                        Không thể kết nối đến n8n Workflow. Bạn kiểm tra lại link Webhook nhé!
                    </div>
                </div>
            `);
        }
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // =========================================================================
    // 4. GẮN SỰ KIỆN TRUYỀN BIẾN (E) ĐỂ CHẶN SỰ KIỆN SUBMIT FORM
    // =========================================================================
    if (btnSend) {
        btnSend.onclick = function(e) {
            sendMessage(e);
        };
    }
    if (input) {
        input.onkeydown = function(e) {
            if (e.key === 'Enter') {
                sendMessage(e);
            }
        };
    }
    // =========================================================================
    // 4. GẮN SỰ KIỆN CLICK NÚT VÀ ENTER AN TOÀN TUYỆT ĐỐI
    // =========================================================================
    if (btnSend) {
        btnSend.onclick = sendMessage;
    }
    if (input) {
        input.onkeydown = function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        };
    }
}
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    initIndexPage();
    initDetailPage();
    initCartPage();
    initChatbox();
});
import React from 'react'
import Banner1 from './images/banner/banner-1.jpg';
import banner2 from './images/banner/banner-2.jpg';
import banner3 from './images/banner/banner-3.jpg';
import banner4 from './images/banner/banner-4.jpg';
import banner5 from './images/banner/banner-5.jpg';
import Product from './Product';

export default function Shop() {
 
  return (
    <>
  <div className="home_app">
    {/* Header */}
    <header className="header">
      <ul className="header-items">
        <li className="header-item">
          <a href="" className="header-item-link logo">
            Rikkei_Shop
          </a>
        </li>
        <li className="header-item">
          <input
            className="search-bar"
            type="search"
            placeholder="Nhập để tìm kiếm"
          />
          <button className="search-icon">
            <i className="fas fa-search" />
          </button>
        </li>
        <li className="header-item">
          <a href="" className="header-item-link header-cart">
            <i className="header-cart-icon fas fa-shopping-cart" />
            Giỏ hàng
          </a>
        </li>
        <li className="header-item">
          <a
            className="header-item-link header-login"
          >
            Đăng nhập
          </a>
        </li>
        <li className="header-item">
          <a
            className="header-item-link header-signup"
          >
            Đăng ký
          </a>
        </li>
      </ul>
    </header>
    {/* Banner */}
    <div className="banner">
      {/* Images */}
      <div className="slides fade">
        <img
        height={300}
        width={500}
          className="banner-images"
          src={Banner1}
          alt="Banner-1"
          // style={{ width: "60%", height: 300 }}
        />
      </div>
      {/* <div className="slides fade">
        <img
        height={300}
        width={500}
          className="banner-images"
          src={banner2}
          alt="Banner-2"
          style={{ width: "60%" }}
        />
      </div>
      <div className="slides fade">
        <img
        height={300}
        width={500}
          className="banner-images"
          src={banner3}
          alt="Banner-3"
          style={{ width: "60%" }}
        />
      </div>
      <div className="slides fade">
        <img
        height={300}
        width={500}
          className="banner-images"
          src={banner4}
          alt="Banner-4"
          style={{ width: "60%" }}
        />
      </div>
      <div className="slides fade">
        <img
        height={300}
        width={500}
          className="banner-images"
          src={banner5}
          alt="Banner-5"
          style={{ width: "60%" }}
        />
      </div>
      {/* Next and previous buttons */}
      
    </div>
    <br />
    {/* Dots */}
    <div className="slides-dot" style={{ textAlign: "center" }}>
      <span className="dot"  />
      <span className="dot"  />
      <span className="dot"  />
      <span className="dot"  />
      <span className="dot" />
    </div>
    {/* Phần thân */}
    <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="grid">
        <div className="grid__row">
          <div className="grid__column-2">
            <nav className="category">
              <h3 className="category_heading">
                <i className="category_heading-icon fas fa-list" />
                Danh mục sản phẩm
              </h3>
              <ul className="category-list">
                <li className="category-item category-item--active">
                  <a id="all" className="category-item__link">
                    Tất cả sản phẩm
                  </a>
                </li>
                <li className="category-item category-item">
                  <a id="thietBiDienTu" className="category-item__link">
                    Thiết bị điện tử
                  </a>
                </li>
                <li className="category-item">
                  <a id="sach" className="category-item__link">
                    Sách
                  </a>
                </li>
                <li className="category-item">
                  <a id="doTieuDung" className="category-item__link">
                    Đồ tiêu dùng
                  </a>
                </li>
                <li className="category-item">
                  <a id="thoiTrang" className="category-item__link">
                    Thời trang
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid__column-10">
            <div className="product">
              
                <Product />
                {/* Product item */}
                {/* <div class="grid__column-2-4">
                              <a class="product-item" href=#>
                                  <div class="product-item_img" style="background-image: url(https://www.viendongmobile.com/vnt_upload/product/07_2020/Untitled-1.png);"></div>
                                  <h4 class="product-item_name">Iphone 12 Pro Max</h4>
                                  <div class="product-item_price">30.000.000đ</div>
                                  <div class="product-item_action">
                                      <span class="product-item_like">
                                          <i class="far fa-heart"></i>
                                      </span>
                                      <div class="product-item_rating">
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                      </div>
                                      <span class="product-item_sold">50 đã bán</span>
                                  </div>
                                  <div class="product-item_origin">
                                      <span class="product-item_brand">Apple</span>
                                      <span class="product-item_place">Hà Nội</span>
                                  </div>
                              </a>
                          </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
    <footer className="footer">
      <div className="grid">
        <div className="grid__row">
          <div className="grid__column-2-4">
            <h3 className="footer_heading">Chăm sóc khách hàng</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Hướng dẫn mua hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer_heading">Giới thiệu</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Điều khoản
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Chính sách bảo mật
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer_heading">Danh mục sản phẩm </h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Thời trang
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Đồ tiêu dùng
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Thiết bị điện tử
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  Sách
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer_heading">Theo dõi chúng tôi</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  <i className="footer-item_icon fab fa-facebook" />
                  Facebook
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  <i className="footer-item_icon fab fa-instagram" />
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item_link">
                  <i className="footer-item_icon fab fa-twitter" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer_heading">Đội ngũ phát triển</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="footer-item_member">Trịnh Quốc Hai</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
  {/* Modal */}
  {/* Login */}
  <div id="login" className="modal">
    <form action="/action_page.php" method="POST" className="modal-content">
      <div className="login-container">
        <span
          className="close"
          title="Close"
        >
          x
        </span>
        <h2>Đăng nhập</h2>
        <input
          className="login-username"
          type="text"
          placeholder="Tên đăng nhập"
          name="username"
          required
        />
        <br />
        <br />
        <input
          className="login-password"
          type="password"
          placeholder="Mật khẩu"
          name="password"
          required
        />
        <br />
        <br />
        <button
          type="button"
          className="cancelbtn"
        >
          Thoát
        </button>
        <button type="submit" className="loginbtn">
          Đăng nhập
        </button>
        <div className="login-footer">
          <p>
            Bạn chưa là thành viên? <a href="#">Đăng ký</a>
          </p>
          <p>
            <a href="#">Quên mật khẩu/Tên đăng nhập</a>
          </p>
        </div>
      </div>
    </form>
  </div>
  {/* Signup */}
  <div id="signup" className="modal">
    <form action="/action_page/php" className="modal-content">
      <div className="signup-container">
        <span
          className="close"
          title="Close"
        >
          x
        </span>
        <h2>Đăng ký</h2>
        <p style={{ fontSize: "2rem" }}>
          Vui lòng điền đầy đủ các thông tin sau
        </p>
        <input
          type="text"
          className="signup-firstName"
          placeholder="Họ"
          name="firstname"
          required
        />
        <input
          type="text"
          className="signup-lastName"
          placeholder="Tên"
          name="lastname"
          required
        />
        <br />
        <br />
        <input
          type="text"
          className="signup-email"
          placeholder="Email"
          name="email"
          required
        />
        <br />
        <br />
        <input
          type="password"
          className="signup-password"
          placeholder="Mật khẩu"
          name="password"
          required
        />
        <br />
        <br />
        <input
          type="password"
          className="signup-cfpassword"
          placeholder="Xác nhận mật khẩu"
          name="cfpassword"
          required
        />
        <br />
        <br />
        <div className="signup-footer">
          <p>
            <input type="checkbox" className="signup-agree" /> Tôi chấp nhận với
            tất cả <a href="#">Điều khoản dịch vụ</a> &amp;{" "}
            <a href="">Chính sách bảo mật</a>
          </p>
          <button type="submit" className="signupbtn">
            Đăng ký
          </button>
          <p>
            Bạn đã có tài khoản? <a href="">Đăng nhập ở đây</a>
          </p>
        </div>
      </div>
    </form>
  </div>
</>

  )
}

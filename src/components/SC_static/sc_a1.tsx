"use client";
import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa";

interface SourceCode {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  imageUrl: string;
  additionalDescription: string;
  images: string[];
  demoLink: string;
}

const product: SourceCode = {
  title:
    "[SCA1] Full code dự án quản lý hệ sinh thái doanh nghiệp (Reactjs, nodejs, mysql, cloudinary) + Hướng dẫn cài đặt đầy đủ và chi tiết",
  description:
    "Dự án quản lý hệ sinh thái doanh nghiệp là giải pháp toàn diện giúp bạn quản lý tất cả các hoạt động kinh doanh của doanh nghiệp một cách hiệu quả. Dự án này giúp bạn quản lý tài liệu, nhân viên, dịch vụ, và tất cả các hoạt động kinh doanh khác một cách dễ dàng và tiện lợi.",
  price: "300.000đ",
  originalPrice: "2,000,000đ",
  discount: "-85%",
  imageUrl: "/images/sourcecode/eco/main-eco-2.png",
  additionalDescription:
    "Dự án được xây dựng hoàn chỉnh và đã được áp dụng tại doanh nghiệp. Dự án bao gồm các chức năng: quản lý tài khoản, quản lý tài liệu, các công cụ phục vụ cho công việc của doanh nghiệp, quản lý tăng ca và nghỉ phép, quản lý giao nhận hàng hóa",
  images: [
    "/images/sourcecode/eco/main-eco-2.png",
    "/images/sourcecode/eco/dashboard-eco.png",
    "/images/sourcecode/eco/doc-eco.png",
    "/images/sourcecode/eco/noti-eco.png",
    "/images/sourcecode/eco/leave-eco.png",
    "/images/sourcecode/eco/ot-eco.png",
    "/images/sourcecode/eco/ship-eco.png",
    "/images/sourcecode/eco/sign-eco.png",
  ],
  demoLink: "https://www.youtube.com/watch?v=example",
};

const sc_a1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="flex flex-col md:flex-row p-6 rounded-lg">
      {/* Product Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-auto h-auto object-fit rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col md:w-1/2 md:pl-6">
        <h2 className="text-xl font-bold text-black mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Price Section */}
        <div className="flex items-center mb-4">
          <span className="text-2xl font-semibold text-red-600">
            {product.price}
          </span>
          <span className="text-lg text-gray-500 line-through ml-2">
            {product.originalPrice}
          </span>
          <span className="text-xs text-white bg-green-500 rounded-full px-2 ml-2">
            {product.discount}
          </span>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className="w-1/2 mt-auto py-2 px-6 rounded-lg bg-buttonRoot"
        >
          Mua ngay
        </button>

        {/* Links */}
        {/* <div className="flex items-center mt-4">
          <FaYoutube className="text-red-600 mr-2" size={24} />
          <a
            href={product.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Xem demo source code
          </a>
        </div> */}

        <div className="flex items-center mt-4">
          <FaFileWord className="text-blue-600 mr-2" size={24} />
          <a
            href="https://docs.google.com/document/d/1g30tnfZwtQVgmA1Xv2jiMWLMNOcWHf0O_wX_ntYLZAw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Tổng quan dự án
          </a>
        </div>

        <div className="mt-6 text-gray-700">
          <h3 className="text-lg font-semibold mb-2">Mô tả thêm</h3>
          <p>{product.additionalDescription}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white p-4 rounded-lg">
            <span
              className="absolute top-2 right-2 text-black text-xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <img
              src={modalImage}
              alt="Modal Preview"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Modal for Payment Info */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg w-96 ">
            <h2 className="text-xl font-bold mb-4">Thông tin thanh toán</h2>
            <p>
              Vui lòng chuyển đúng số tiền <strong>300.000</strong> và nhập đúng
              nội dung chuyển khoản: email SCA1 (ví dụ: snakechain@gmail.com
              SCA1)
            </p>

            {/* QR Code */}
            <div className="flex justify-center mt-4">
              <a href="/images/qr_code_2.png" download="qr_code.png">
                <img
                  src="/images/qr_code_2.png"
                  alt="QR Code"
                  className="w-70 h-70 object-contain rounded-lg"
                />
              </a>
            </div>

            <p className="mt-4 text-gray-600 text-sm">
              Vui lòng chờ trong khoảng <strong>12h</strong> để chúng tôi chuyển
              source code + hướng dẫn cài đặt đến bạn qua email hoặc có thể liên
              hệ qua Zalo <strong>0911 622 262</strong>
            </p>

            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-center"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default sc_a1;

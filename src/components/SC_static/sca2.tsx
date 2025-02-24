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
    "[SCA2] Full code dự án portfolio giới thiệu bản thân, gây ấn tượng với nhà tuyển dụng (Nextjs + Tailwind CSS)",
  description:
    "Dự án portfolio được xây dựng bằng Next.js và Tailwind CSS, nhằm mang đến một giao diện hiện đại, tối giản nhưng vẫn tinh tế. Đặc biệt, tích hợp chế độ sáng/tối để người dùng có thể tùy chỉnh trải nghiệm theo sở thích, giúp tối ưu khả năng hiển thị trong các điều kiện ánh sáng khác nhau. Giao diện được thiết kế responsive, đảm bảo hiển thị tốt trên mọi thiết bị từ điện thoại đến máy tính. Bên cạnh đó, tôi cũng tối ưu hiệu suất để đảm bảo tốc độ tải nhanh và trải nghiệm mượt mà. Đây không chỉ là một trang web cá nhân mà còn là nơi trưng bày các dự án, kỹ năng và kinh nghiệm, giúp tạo ấn tượng chuyên nghiệp khi kết nối với nhà tuyển dụng hoặc khách hàng tiềm năng..",
  price: "50,000đ",
  originalPrice: "100,000đ",
  discount: "-50%",
  imageUrl: "/images/sourcecode/sca2/main-sca2.png",
  additionalDescription:
    "Dự án bao gồm: chế độ sáng tối, thông tin bản thân, dự án cá nhân",
  images: [
    "/images/sourcecode/sca2/main-sca2.png",
    "/images/sourcecode/sca2/home-sca2.png",
    "/images/sourcecode/sca2/project-sca2.png",
  ],
  demoLink: "https://www.youtube.com/watch?v=example",
};

const Sca2 = () => {
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
            href="https://docs.google.com/document/d/1yyE06bY6MuWub1ZTmX62dTCWbFCQlAUJvSdFGDHcIjQ/edit?usp=sharing"
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
              Vui lòng chuyển đúng số tiền <strong>50.000</strong> và nhập đúng
              nội dung chuyển khoản: email SCA2 (ví dụ: snakechain@gmail.com
              SCA2)
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

export default Sca2;

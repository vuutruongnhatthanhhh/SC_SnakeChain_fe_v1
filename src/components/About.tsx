import React from "react";
import Image from "next/image";
import config from "@/config";

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <Image
            src="/images/logo.png"
            alt={`${config.companyName} Logo`}
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          {config.companyName}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {config.companyName} chuyên cung cấp dịch vụ đào tạo lập trình và phát
          triển các giải pháp công nghệ, bao gồm thiết kế website và ứng dụng di
          động theo yêu cầu. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi
          cam kết mang đến những sản phẩm chất lượng và hiệu quả nhất cho khách
          hàng.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            {/* <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
              Sắp ra mắt
            </span> */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Mã nguồn dự án
            </h3>
            <p className="text-gray-600 mb-4">
              Chúng tôi cung cấp source code các dự án chuyên nghiệp, được thiết
              kế đẹp mắt, tối ưu hiệu suất và dễ dàng tùy chỉnh. Mỗi sản phẩm
              đều được xây dựng với tiêu chuẩn cao, đảm bảo chất lượng code
              sạch, logic chặt chẽ và có tài liệu hướng dẫn chi tiết, giúp bạn
              dễ dàng triển khai và mở rộng theo nhu cầu. Dù bạn là nhà phát
              triển, doanh nghiệp hay startup, chúng tôi đều có giải pháp phù
              hợp để giúp bạn tiết kiệm thời gian và tối ưu quy trình phát triển
              phần mềm.
            </p>
            <a
              href="/sourcecode"
              className="text-[#319795] hover:text-[#2C7A7B] font-semibold"
            >
              Xem thêm về mã nguồn dự án
            </a>
          </div>
          <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            {/* Nhãn "Sắp ra mắt" */}
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
              Sắp ra mắt
            </span>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Khóa học lập trình
            </h3>
            <p className="text-gray-600 mb-4">
              Chúng tôi cung cấp các khóa học lập trình từ cơ bản đến nâng cao.
              Các khóa học được thiết kế phù hợp với nhu cầu của học viên, từ
              lập trình web, app mobile đến phát triển phần mềm.
            </p>
            <a
              href="#"
              className="text-[#319795] hover:text-[#2C7A7B] font-semibold"
            >
              Xem thêm về khóa học
            </a>
          </div>

          <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
              Sắp ra mắt
            </span>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Thiết Kế Website
            </h3>
            <p className="text-gray-600 mb-4">
              Chúng tôi cung cấp dịch vụ thiết kế website tùy chỉnh, đáp ứng nhu
              cầu và yêu cầu riêng biệt của khách hàng, từ website giới thiệu
              doanh nghiệp đến các nền tảng thương mại điện tử.
            </p>
            <a
              href="#"
              className="text-[#319795] hover:text-[#2C7A7B] font-semibold"
            >
              Xem thêm về dịch vụ thiết kế website
            </a>
          </div>

          <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
              Sắp ra mắt
            </span>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Thiết Kế Ứng Dụng Di Động
            </h3>
            <p className="text-gray-600 mb-4">
              Chúng tôi cung cấp dịch vụ phát triển ứng dụng di động cho các nền
              tảng iOS và Android, giúp bạn mang sản phẩm của mình đến gần hơn
              với người dùng.
            </p>
            <a
              href="#"
              className="text-[#319795] hover:text-[#2C7A7B] font-semibold"
            >
              Xem thêm về dịch vụ thiết kế ứng dụng di động
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

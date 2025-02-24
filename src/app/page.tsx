import Slider from "@/components/Slider";
import Carousel from "@/components/TechCarousel";
// import Courses from "@/components/Courses";
// import Blogs from "@/components/Blogs";
// import QuoteRequestForm from "@/components/QuoteRequestForm";
import SourceCode from "@/components/SourceCode";

export default function Home() {
  const images = ["/images/banner-snake-chain.gif"];
  const techImages = [
    "/images/carousel/react-icon.png",
    "/images/carousel/nest-icon.png",
    "/images/carousel/next-icon.png",
    "/images/carousel/node.png",
    "/images/carousel/mongo-icon.png",
    "/images/carousel/mysql-icon.png",
    "/images/carousel/spring.png",
    "/images/carousel/vue-icon.png",
    "/images/carousel/hlf-icon.png",
    "/images/carousel/angular-icon.png",
    "/images/carousel/django-icon.png",
    "/images/carousel/solidity-icon.png",
  ];

  // const courses = [
  //   {
  //     title: "Khóa học lập trình React",
  //     description: "Học React từ cơ bản đến nâng cao",
  //     imageUrl: "/images/courses/course-reactjs.png",
  //     link: "/course/react",
  //   },
  //   {
  //     title: "Khóa học lập trình Node.js",
  //     description: "Lập trình backend với Node.js",
  //     imageUrl: "/images/courses/course-reactjs.png",
  //     link: "/course/nodejs",
  //   },
  //   {
  //     title: "Khóa học Python cho người mới bắt đầu",
  //     description: "Học Python dễ dàng với các bài tập thực hành",
  //     imageUrl: "/images/courses/course-reactjs.png",
  //     link: "/course/python",
  //   },
  //   {
  //     title: "Khóa học Machine Learning",
  //     description: "Khám phá thế giới học máy và AI",
  //     imageUrl: "/images/courses/course-reactjs.png",
  //     link: "/course/ml",
  //   },
  // ];

  // const blogs = [
  //   {
  //     title: "Cách tối ưu SEO với Next.js",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  //   {
  //     title: "Cách tối ưu SEO với Next.js 2",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  //   {
  //     title: "Cách tối ưu SEO với Next.js 3",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  //   {
  //     title: "Cách tối ưu SEO với Next.js 4",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  // ];

  const codes = [
    {
      title: "[SCA1] Full code dự án hệ sinh thái của doanh nghiệp",
      description: "ReactJs + NodeJs + MySQL + Cloudinary",
      imageUrl: "/images/sourcecode/eco/main-eco.png",
      link: "/sourcecodeDetail/sc_a1",
    },
    {
      title: "[SCA2] Dự án Portfolio có chế độ sáng / tối",
      description: "Nextjs + Tailwind CSS",
      imageUrl: "/images/sourcecode/sca2/main-sca2.png",
      link: "/sourcecodeDetail/sca2",
    },
    // {
    //   title: "[SC_A3] Code dự án Portfolio",
    //   description: "Html + Css + Js",
    //   imageUrl: "/images/sourcecode/source-code.png",
    //   link: "/course/react",
    // },
  ];
  return (
    <div>
      <Slider images={images} />
      <Carousel images={techImages} />

      {/* <Courses
        courses={courses}
        title="Khóa học nổi bật"
        allCoursesLink="#allcourse"
        showButton={true}
      /> */}
      {/* <QuoteRequestForm /> */}
      <SourceCode
        codes={codes}
        title="Source code nổi bật"
        allCodeLink="#allcourse"
      />
      {/* <Blogs blogs={blogs} title="Blog" allBlogLink="/blog" showButton={true} /> */}
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Description() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="relative isolate mx-auto max-w-[400px]">
        <img
          src="assets/bg.png"
          alt="bg1"
          className="absolute top-0 left-0 -z-10 max-w-[150px]"
        />
        <img
          src="assets/bg.png"
          alt="bg2"
          className="absolute right-0 bottom-0 -z-10 max-w-[150px]"
        />
        <img
          src="assets/about.png"
          alt="about"
          className="w-full rounded-full"
        />
      </div>

      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-400">
          Giới thiệu bản thân
        </h2>
        <p className="mb-8 text-gray-400 md:pr-4 lg:pr-12">
          Em là một sinh viên yêu thích công nghệ và đang theo đuổi con đường
          trở thành lập trình viên Fullstack. Với tinh thần trách nhiệm và sự
          kiên trì trong công việc, em luôn nỗ lực hoàn thiện từng công việc và
          không ngừng học hỏi để nâng cao kỹ năng của mình.
          <br /> Em đặc biệt yêu thích việc xây dựng phần mềm một cách chuyên
          nghiệp – từ việc tối ưu hoá trải nghiệm người dùng ở frontend đến việc
          thiết kế backend hiệu quả và dễ bảo trì. Trong giai đoạn học tập, em
          đã thử áp dụng quy trình phát triển phần học được ở trường đại học vào
          sản phẩm của mình.
        </p>
        <div>
          <a
            href="/CV_TranVietAnh_vn.pdf"
            download
            className="rounded-full bg-gradient-to-b from-[#a78bfa] to-[#7c3aed] px-6 py-3 text-base font-medium text-white shadow-[5px_5px_10px_rgba(100,100,100,0.2)]"
          >
            Tải CV
          </a>
        </div>
      </motion.div>
    </div>
  );
}

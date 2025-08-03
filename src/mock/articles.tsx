export const mockDescription = (imageUrl) =>
  `<div class="flex items-start text-base font-medium"></div><div class="flex items-start"><p>Bệnh nội khoa, tổng quát bao gồm rất nhiều bệnh lý thuộc các chuyên ngành y khác nhau, chủ yếu được điều trị bằng thuốc kết hợp các thủ thuật nhỏ (nếu có) và thay đổi lối sống, chế độ dinh dưỡng, nghỉ ngơi, vận động khoa học.</p></div><img class="rounded-lg" src="${imageUrl}" /><div><span><p class="mb-1.5">Khám nội tổng quát (hay khám nội khoa) hay khám sức khỏe nội tổng quát là cách hiệu quả để mỗi người chủ động phát hiện bệnh kịp thời và điều trị bệnh từ sớm. Quy trình thăm khám nội tổng quát thường bao gồm:</p><div class="mb-1.5 h-5"></div><p class="mb-1.5">Kiểm tra cơ bản: Bao gồm việc kiểm tra cân nặng, chiều cao, đo huyết áp… Các thông số này có thể cung cấp những thông tin quan trọng về tình trạng sức khỏe cơ bản của cơ thể.</p><p class="mb-1.5">Khám lâm sàng (nội hô hấp, tiêu hóa, nội tiết, thần kinh, cơ xương khớp, tai mũi họng, răng hàm mặt…): Thông qua việc khám lâm sàng, bác sĩ có thể đánh giá ban đầu tình trạng sức khỏe, bệnh lý của người bệnh..</p><p class="mb-1.5">Xét nghiệm, chụp chiếu: Sau khám lâm sàng, bác sĩ có thể chỉ định người bệnh thực hiện các cận lâm sàng chuyên sâu như xét nghiệm máu, xét nghiệm nước tiểu, siêu âm bụng, siêu âm tim, siêu âm tổng quát, chụp X-quang, chụp CT, chụp MRI, siêu âm… để tầm soát, đánh giá, phát hiện các bệnh lý liên quan, kể cả ung thư.</p><p>Lưu ý, quy trình ở trên chỉ mang tính tham khảo. Tùy mỗi bệnh lý hay tùy tại mỗi cơ sở y tế, danh mục khám nội tổng quát, quy trình sẽ được xây dựng khác nhau và còn thay đổi.</p></span></div>`;
  
//  `<div class="flex items-start text-base font-medium"></div>
// <div class="flex items-start"><p>Bệnh nội khoa, tổng quát bao gồm rất nhiều bệnh lý 
// thuộc các chuyên ngành y khác nhau, chủ yếu được điều trị bằng thuốc kết hợp các thủ 
// thuật nhỏ (nếu có) và thay đổi lối sống, chế độ dinh dưỡng, nghỉ ngơi, vận động khoa học
// .</p></div><img class="rounded-lg" src="${imageUrl}" /><div>
// <span><p class="mb-1.5">Khám nội tổng quát (hay khám nội khoa) hay khám sức khỏe nội 
// tổng quát là cách hiệu quả để mỗi người chủ động phát hiện bệnh kịp thời và điều trị bệnh
// từ sớm. Quy trình thăm khám nội tổng quát thường bao gồm:
// </p><div class="mb-1.5 h-5"></div><p class="mb-1.5">Kiểm tra cơ bản: Bao gồm việc kiểm 
// tra cân nặng, chiều cao, đo huyết áp… Các thông số này có thể cung cấp những thông tin 
// quan trọng về tình trạng sức khỏe cơ bản của cơ thể.</p>
// <p class="mb-1.5">Khám lâm sàng (nội hô hấp, tiêu hóa, nội tiết, thần kinh, 
// cơ xương khớp, tai mũi họng, răng hàm mặt…): Thông qua việc khám lâm sàng, bác sĩ 
// có thể đánh giá ban đầu tình trạng sức khỏe, bệnh lý của người bệnh..</p>
// <p class="mb-1.5">Xét nghiệm, chụp chiếu: Sau khám lâm sàng, bác sĩ có thể chỉ định 
// người bệnh thực hiện các cận lâm sàng chuyên sâu như xét nghiệm máu, xét nghiệm 
// nước tiểu, siêu âm bụng, siêu âm tim, siêu âm tổng quát, chụp X-quang, chụp CT, 
// chụp MRI, siêu âm… để tầm soát, đánh giá, phát hiện các bệnh lý liên quan, kể cả 
// ung thư.</p><p>Lưu ý, quy trình ở trên chỉ mang tính tham khảo. Tùy mỗi bệnh lý 
// hay tùy tại mỗi cơ sở y tế, danh mục khám nội tổng quát, quy trình sẽ được xây dựng 
// khác nhau và còn thay đổi.</p></span></div>`;

export async function mockArticles() {
  return [
    {
      id: 1,
      title:
        "Cùng Tín Nghĩa Mỹ tạm biệt năm Thìn, đón chào năm Ất Tỵ 2025",
      description:
        "Năm 2024 vừa qua chứng kiến nhiều biến động và thách thức không nhỏ đối với ngành vật liệu xây dựng nói chung và thị trường xi măng nói riêng. Tình hình kinh tế vĩ mô với những yếu tố khó khăn đã tạo ra áp lực không nhỏ lên các doanh nghiệp trong lĩnh vực. Tuy nhiên, bằng sự nỗ lực không ngừng, tinh thần đoàn kết và chiến lược kinh doanh linh hoạt, Công Ty Tín Nghĩa Mỹ đã vững vàng vượt qua \"cơn gió ngược\", duy trì ổn định hoạt động và tiếp tục khẳng định uy tín trên thị trường. Đây là minh chứng cho nội lực mạnh mẽ và sự tin tưởng của quý đối tác, khách hàng đã luôn đồng hành cùng chúng tôi.",
      timeAgo: "Đăng bởi Tín Nghĩa Mỹ vào lúc 28/03/2025",
      image: "https://bizweb.dktcdn.net/100/476/804/files/z6451141308611-5070255eb4d3eda39d2376a07c5eb12c-min.jpg?v=1743155553799",
      content: mockDescription("https://bizweb.dktcdn.net/100/476/804/files/z6451141308611-5070255eb4d3eda39d2376a07c5eb12c-min.jpg?v=1743155553799"),
    },
    {
      id: 2,
      title: "Khám phá bãi biển đẹp nhất Việt Nam",
      description:
        "Cục An toàn thực phẩm đề nghị Viện Dinh dưỡng quốc gia, Sở Y tế Đồng Nai kiểm tra",
      timeAgo: "1 tuần trước",
      image: "https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851",
      content: mockDescription("https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851"),
    },
    {
      id: 3,
      title: "Những phát minh khoa học mới nhất năm 2024",
      description:
        "Cục An toàn thực phẩm đề nghị Viện Dinh dưỡng quốc gia, Sở Y tế Đồng Nai kiểm tra",
      timeAgo: "3 ngày trước",
      image: "https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851",
      content: mockDescription("https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851"),
    },
    {
      id: 4,
      title: "Thiết kế phòng ngủ hiện đại cho gia đình",
      description:
        "Cục An toàn thực phẩm đề nghị Viện Dinh dưỡng quốc gia, Sở Y tế Đồng Nai kiểm tra",
      timeAgo: "5 ngày trước",
      image: "https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851",
      content: mockDescription("https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851"),
    },
    {
      id: 5,
      title: "Công thức nấu ăn ngon cho cả gia đình",
      description:
        "Cục An toàn thực phẩm đề nghị Viện Dinh dưỡng quốc gia, Sở Y tế Đồng Nai kiểm tra",
      timeAgo: "1 ngày trước",
      image: "https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851",
      content: mockDescription("https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851"),
    },
    {
      id: 6,
      title: "Lợi ích của Omega-3 cho sức khỏe",
      description:
        "Cục An toàn thực phẩm đề nghị Viện Dinh dưỡng quốc gia, Sở Y tế Đồng Nai kiểm tra",
      timeAgo: "4 ngày trước",
      image: "https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851",
      content: mockDescription("https://bizweb.dktcdn.net/thumb/medium/100/476/804/themes/894427/assets/logo.png?1743183151851"),
    },
  ];
}
type TopCarouselType = {
    key: string;
    id: string;
    imageSrc: string;
    heading: string;
    description: string;
};
type CardType = {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    category: string;
    date: string;
};

export const topCarousel: TopCarouselType[] = [
    {
        key: '92c52a00-06d0-56a1-b1d4-1b2b42502413',
        id: '92c52a00-06d0-56a1-b1d4-1b2b42502413',
        imageSrc: '/o/event%2Fcarousel-1-min.png?alt=media&token=fdfc58ef-4f46-4935-a403-e1a8d26b1ea2',
        heading: 'Sắp ra mắt nhạc nước <br/> Đầm Sen Water Show',
        description:
            'CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa',
    },
    {
        key: '3c9c3c8e-b0ed-5361-93cf-4e4fc622f6d4',
        id: '3c9c3c8e-b0ed-5361-93cf-4e4fc622f6d4',
        imageSrc: '/o/event%2Fcarousel-2-min.png?alt=media&token=afc24fde-87f6-450f-9bcf-12740d6c63d0',
        heading: 'Sắp ra mắt nhạc nước <br/> Đầm Sen Water Show',
        description:
            'CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa',
    },
    {
        key: '2e02622d-eaad-557f-9521-0814155d107b',
        id: '2e02622d-eaad-557f-9521-0814155d107b',
        imageSrc: '/o/event%2Fcarousel-3-min.png?alt=media&token=20f1e3b2-61fc-46e1-b196-9679565f20f8',
        heading: 'Sắp ra mắt nhạc nước <br/> Đầm Sen Water Show',
        description:
            'CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa',
    },
    {
        key: '945d39e8-1a6c-5ce5-9e28-922eefb3d831',
        id: '945d39e8-1a6c-5ce5-9e28-922eefb3d831',
        imageSrc: '/o/event%2Fcarousel-4-min.png?alt=media&token=b9fe930f-e416-4ef3-9584-aca537f0b175',
        heading: 'Sắp ra mắt nhạc nước <br/> Đầm Sen Water Show',
        description:
            'CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa',
    },
    {
        key: '69ba11d6-2783-5f11-86b7-544db39980fc',
        id: '69ba11d6-2783-5f11-86b7-544db39980fc',
        imageSrc: '/o/event%2Fcarousel-5-min.png?alt=media&token=be7ee815-3715-435e-98f9-054a926361b7',
        heading: 'Sắp ra mắt nhạc nước <br/> Đầm Sen Water Show',
        description:
            'CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa',
    },
];
export const cards: CardType[] = [
    {
        id: 'ra-mat-ve-djam-sen-special-choi-ca-2-cong-vien',
        imageSrc: '/o/event%2Fevent-list-1-min.png?alt=media&token=fb884d73-f921-47cc-b78f-d52d3ac1375d',
        title: 'Ra mắt vé Đầm Sen Special chơi cả 2 công viên',
        description: 'Loại vé này bao gồm cả 2 công viên với chủ đề “quẩy hè đi, chờ chi!”',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
    {
        id: 'sap-ra-mat-djam-sen-lake-show-cuoi-nam-2020',
        imageSrc: '/o/event%2Fevent-list-2-min.png?alt=media&token=253405fb-c4bd-4c2b-9c1f-a4328312000e',
        title: 'Sắp ra mắt Đầm Sen Lake Show cuối năm 2020',
        description:
            'Chỉ còn hơn 1 tháng nữa, Công viên văn hóa Đầm Sen sắp ra mắt dự án Lake Show (biểu diễn nhạc nước trên hồ) trên mặt hồ lớn nhất TP.HCM',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
    {
        id: 'djon-nam-moi-2020-nhieu-san-choi-mien-phi',
        imageSrc: '/o/event%2Fevent-list-3-min.png?alt=media&token=d24b3eb3-7204-4c18-afcb-1a4dfdec3efb',
        title: 'Đón năm mới 2020: nhiều sân chơi miễn phí',
        description:
            'Ngoài không gian “sống ảo” tại Đầm Sen, du khách còn được tham gia các sân chơi miễn phí của giáng sinh và đón năm mới 2020',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
    {
        id: 'he-2019-va-nhung-chuong-trinh-djac-biet-cho-thieu-nhi',
        imageSrc: '/o/event%2Fevent-list-4-min.png?alt=media&token=935eb330-6827-4d2f-8c44-61a9a69537c5',
        title: 'Hè 2019 và những chương trình đặc biệt cho thiếu nhi',
        description:
            'Với chủ đề “Đầm Sen Amazing Summer 2019”, các chương trình vui hè Đầm Sen bắt đầu từ 25/5 cho đến hết 11/8/2019',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
    {
        id: 'ra-mat-ve-djam-sen-special-choi-ca-2-cong-vien-fffweffgw',
        imageSrc: '/o/event%2Fevent-list-1-min.png?alt=media&token=fb884d73-f921-47cc-b78f-d52d3ac1375d',
        title: 'Ra mắt vé Đầm Sen Special chơi cả 2 công viên',
        description:
            'Loại vé này bao gồm cả 2 công viên để chào đón tháng hè đặc biệt của năm nay với chủ đề “quẩy hè đi, chờ chi!”',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
    {
        id: 'sap-ra-mat-djam-sen-lake-show-cuoi-nam-2020-3424ffhuhf',
        imageSrc: '/o/event%2Fevent-list-2-min.png?alt=media&token=253405fb-c4bd-4c2b-9c1f-a4328312000e',
        title: 'Sắp ra mắt Đầm Sen Lake Show cuối năm 2020',
        description:
            'Chỉ còn hơn 1 tháng nữa, Công viên văn hóa Đầm Sen sắp ra mắt dự án Lake Show (biểu diễn nhạc nước trên hồ) trên mặt hồ lớn nhất TP.HCM',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
    {
        id: 'djon-nam-moi-2020-nhieu-san-choi-mien-phi-e2389fewf',
        imageSrc: '/o/event%2Fevent-list-3-min.png?alt=media&token=d24b3eb3-7204-4c18-afcb-1a4dfdec3efb',
        title: 'Đón năm mới 2020: nhiều sân chơi miễn phí',
        description:
            'Ngoài không gian “sống ảo” tại Đầm Sen, du khách còn được tham gia các sân chơi miễn phí của giáng sinh và đón năm mới 2020',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
    {
        id: 'he-2019-va-nhung-chuong-trinh-djac-biet-cho-thieu-nhi-fwfwf',
        imageSrc: '/o/event%2Fevent-list-4-min.png?alt=media&token=935eb330-6827-4d2f-8c44-61a9a69537c5',
        title: 'Hè 2019 và những chương trình đặc biệt cho thiếu nhi',
        description:
            'Với chủ đề “Đầm Sen Amazing Summer 2019”, các chương trình vui hè Đầm Sen bắt đầu từ 25/5 cho đến hết 11/8/2019',
        category: 'Sự kiện',
        date: '06/11/2020',
    },
];
export const maybeYouLikeList: CardType[] = [
    {
        id: 'roller-coaster',
        imageSrc: '/o/event%2Fmade-you-like-1-min.png?alt=media&token=2e7b1e4c-b5cf-46d1-8db3-1c39057d7fad',
        title: 'Roller Coaster',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-xoay-khong-gian',
        imageSrc: '/o/event%2Fmade-you-like-2-min.png?alt=media&token=0176697b-c422-45f0-9458-0f2a0f79ccf6',
        title: 'Vòng xoay không gian',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-quay-than-toc',
        imageSrc: '/o/event%2Fmade-you-like-3-min.png?alt=media&token=cb0b5dec-9f34-4423-a526-384f9972bed2',
        title: 'Vòng quay thần tốc',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'ca-chep-nhao-lon',
        imageSrc: '/o/event%2Fmade-you-like-4-min.png?alt=media&token=212f2572-fab3-4811-a8b3-25d502e13c4b',
        title: 'Cá chép nhào lộn',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'roller-coaster-fwfw',
        imageSrc: '/o/event%2Fmade-you-like-1-min.png?alt=media&token=2e7b1e4c-b5cf-46d1-8db3-1c39057d7fad',
        title: 'Roller Coaster',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-xoay-khong-gian-fwefwefwf',
        imageSrc: '/o/event%2Fmade-you-like-2-min.png?alt=media&token=0176697b-c422-45f0-9458-0f2a0f79ccf6',
        title: 'Vòng xoay không gian',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-quay-than-toc-aggw',
        imageSrc: '/o/event%2Fmade-you-like-3-min.png?alt=media&token=cb0b5dec-9f34-4423-a526-384f9972bed2',
        title: 'Vòng quay thần tốc',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'ca-chep-nhao-lon-gwwgw',
        imageSrc: '/o/event%2Fmade-you-like-4-min.png?alt=media&token=212f2572-fab3-4811-a8b3-25d502e13c4b',
        title: 'Cá chép nhào lộn',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
];

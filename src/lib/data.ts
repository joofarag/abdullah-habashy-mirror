import { Course, Subject, LeaderboardEntry, StoreItem } from "@/types";

export const subjects: Subject[] = [
  {
    id: "chem-2sec",
    name: "كيمياء 2ث",
    grade: "الصف الثاني الثانوي",
    icon: "/assets/images/subject-chemistry.webp",
    courseCount: 4,
  },
];

export const courses: Course[] = [
  {
    id: "course-1",
    title: "شرح المنهج الجديد كيمياء 2ث - الكورس المجاني (الشرح فقط)",
    description:
      "يمكنك في هذا القسم مشاهد الشرح وتحميل وتصفح مذكرات 2ث الترم الثاني المنهج الجديد. الكورس يشمل شرح جميع الابواب والفصول بالتفصيل.",
    image: "/assets/images/course1.webp",
    price: null,
    currency: "EGP",
    subject: "كيمياء 2ث",
    grade: "2ث",
    type: "ابواب",
    author: {
      name: "عبدالله حبشي",
      avatar: "/assets/images/hero-photo.png",
    },
    isFree: true,
    createdAt: "2025-01-15",
  },
  {
    id: "course-2",
    title:
      "شرح وحل المنهج الجديد كيمياء 2ث - الكورس المدفوع (الشرح و الحل) - الترم كاملا",
    description:
      "يمكنك في هذا القسم مشاهد الشرح وتحميل وتصفح مذكرات 2ث الترم الثاني المنهج الجديد. شرح وحل تفصيلي لكل الابواب والمسائل.",
    image: "/assets/images/course3.webp",
    price: 250,
    currency: "EGP",
    subject: "كيمياء 2ث",
    grade: "2ث",
    type: "ابواب",
    author: {
      name: "عبدالله حبشي",
      avatar: "/assets/images/hero-photo.png",
    },
    isFree: false,
    createdAt: "2025-01-20",
  },
  {
    id: "course-3",
    title:
      "شرح وحل المنهج الجديد كيمياء 2ث - الكورس المدفوع (الشرح و الحل) - شهر فبراير",
    description:
      "يمكنك في هذا القسم مشاهد الشرح وتحميل وتصفح مذكرات 2ث الترم الثاني المنهج الجديد. محتوى شهر فبراير كاملاً.",
    image: "/assets/images/course4.webp",
    price: 100,
    currency: "EGP",
    subject: "كيمياء 2ث",
    grade: "2ث",
    type: "ابواب",
    author: {
      name: "عبدالله حبشي",
      avatar: "/assets/images/hero-photo.png",
    },
    isFree: false,
    createdAt: "2025-02-01",
  },
  {
    id: "course-4",
    title: "شرح وحل المنهج الجديد كيمياء 2ث - (الشرح والحل) شهر مارس",
    description:
      "يمكنك في هذا القسم مشاهدة الشرح وتحميل وتصفح مذكرات 2 ث الترم الثاني المنهج الجديد. محتوى شهر مارس كاملاً مع حل جميع التمارين.",
    image: "/assets/images/course5.webp",
    price: 100,
    currency: "EGP",
    subject: "كيمياء 2ث",
    grade: "2ث",
    type: "ابواب",
    author: {
      name: "عبدالله حبشي",
      avatar: "/assets/images/hero-photo.png",
    },
    isFree: false,
    createdAt: "2025-03-01",
  },
  {
    id: "course-5",
    title: "مراجعة شاملة كيمياء 2ث - مراجعة ليلة الامتحان",
    description:
      "مراجعة شاملة لكل المنهج مع حل أهم الأسئلة المتوقعة في الامتحان. تغطي جميع الابواب والفصول.",
    image: "/assets/images/course2.webp",
    price: 50,
    currency: "EGP",
    subject: "كيمياء 2ث",
    grade: "2ث",
    type: "مراجعة",
    author: {
      name: "عبدالله حبشي",
      avatar: "/assets/images/hero-photo.png",
    },
    isFree: false,
    createdAt: "2025-03-15",
  },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "أحمد محمد", avatar: "", score: 980, grade: "2ث", subject: "كيمياء" },
  { rank: 2, name: "فاطمة علي", avatar: "", score: 965, grade: "2ث", subject: "كيمياء" },
  { rank: 3, name: "محمد حسن", avatar: "", score: 950, grade: "2ث", subject: "كيمياء" },
  { rank: 4, name: "نور الهدى", avatar: "", score: 940, grade: "2ث", subject: "كيمياء" },
  { rank: 5, name: "يوسف أحمد", avatar: "", score: 935, grade: "2ث", subject: "كيمياء" },
  { rank: 6, name: "مريم سعيد", avatar: "", score: 920, grade: "2ث", subject: "كيمياء" },
  { rank: 7, name: "علي محمود", avatar: "", score: 910, grade: "2ث", subject: "كيمياء" },
  { rank: 8, name: "سارة خالد", avatar: "", score: 905, grade: "2ث", subject: "كيمياء" },
  { rank: 9, name: "عمر عادل", avatar: "", score: 895, grade: "2ث", subject: "كيمياء" },
  { rank: 10, name: "هدى إبراهيم", avatar: "", score: 890, grade: "2ث", subject: "كيمياء" },
];

export const storeItems: StoreItem[] = [
  {
    id: "store-1",
    name: "مذكرة كيمياء 2ث - الترم الثاني",
    description: "مذكرة شاملة تحتوي على شرح مبسط وأسئلة محلولة لكل الأبواب",
    price: 150,
    currency: "EGP",
    image: "/assets/images/course3.webp",
    category: "مذكرات",
    inStock: true,
  },
  {
    id: "store-2",
    name: "بنك أسئلة كيمياء 2ث",
    description: "مجموعة شاملة من الأسئلة المتوقعة مع إجاباتها النموذجية",
    price: 100,
    currency: "EGP",
    image: "/assets/images/course4.webp",
    category: "بنك أسئلة",
    inStock: true,
  },
  {
    id: "store-3",
    name: "حقيبة الامتحان - كيمياء 2ث",
    description: "كل ما تحتاجه للاستعداد للامتحان في مكان واحد",
    price: 200,
    currency: "EGP",
    image: "/assets/images/course5.webp",
    category: "حقائب",
    inStock: true,
  },
];

export default function InstructionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800/50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">سياسة الاستخدام</h1>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>توضح هذه الصفحة كيفية استخدام المنصة بشكل صحيح للحصول على أفضل تجربة تعليمية.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">كيفية التسجيل</h2>
            <p>قم بإنشاء حساب جديد باستخدام بريدك الإلكتروني واختيار المرحلة الدراسية المناسبة.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">الاشتراك في الكورسات</h2>
            <p>يمكنك تصفح الكورسات المتاحة والاشتراك في الكورسات المجانية مباشرة أو شراء الكورسات المدفوعة.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">متابعة التقدم</h2>
            <p>تابع تقدمك من خلال لائحة الصدارة وحقق أعلى النقاط للوصول إلى المراكز الأولى.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">الدعم الفني</h2>
            <p>في حال واجهت أي مشكلة، تواصل معنا عبر صفحاتنا على وسائل التواصل الاجتماعي.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

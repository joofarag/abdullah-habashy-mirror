export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800/50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">الشروط والأحكام</h1>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>باستخدامك لهذه المنصة، فإنك توافق على الالتزام بالشروط والأحكام التالية.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">استخدام المنصة</h2>
            <p>يجب استخدام المنصة للأغراض التعليمية فقط. يمنع نسخ أو توزيع المحتوى دون إذن مسبق.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">المحتوى المدفوع</h2>
            <p>الاشتراك في الكورسات المدفوعة يمنحك حق الوصول الشخصي فقط. لا يجوز مشاركة حسابك مع أي شخص آخر.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">سياسة الاسترجاع</h2>
            <p>يمكن طلب استرجاع المبلغ خلال 7 أيام من تاريخ الشراء إذا لم تتم مشاهدة أكثر من 20% من المحتوى.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-6">التعديلات</h2>
            <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

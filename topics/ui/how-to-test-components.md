# چگونه یک کامپوننت UI را از نظر accessibility تست کنیم

باید عادت کنید که هر بار روی یک کامپوننت UI کار می‌کنید — و همچنین هنگام بازبینی کد همکاران — آن را از نظر accessibility تست کنید. این کار باید به بخشی طبیعی از روند توسعه شما تبدیل شود.

در ادامه، مراحل تست دستی کامپوننت‌ها و صفحات را آورده‌ام:

<div className="styled-list">

1. با کیبورد و کلید TAB در صفحه حرکت کنید. آیا می‌توانید به تمام کنترل‌های تعاملی دسترسی پیدا کرده، آن‌ها را اجرا کرده و ببینید؟ آیا از کلیدهای جهتی می‌توان در ویجت‌های ترکیبی استفاده کرد؟  
    - توجه داشته باشید که همه عناصر لازم نیست تعاملی باشند (مثلاً headings).
2. از افزونه‌هایی مانند [Axe](https://www.deque.com/axe/devtools/) یا [Accessibility Insights](https://accessibilityinsights.io) برای شناسایی نقض‌های WCAG و بررسی بهترین روش‌ها استفاده کنید. ساختار headings را با نوار ابزار [Web Developer](https://chrispederick.com/work/web-developer/) بررسی کنید.  
    - از DevTools مرورگر برای اشکال‌زدایی عناصر استفاده کنید.
3. تا ۲۰۰٪ بزرگ‌نمایی کنید تا مطمئن شوید که صفحه بدون اسکرول افقی مجدداً چیدمان می‌شود. آیا کامپوننتی هنگام بزرگ‌نمایی دچار اختلال می‌شود؟
4. با یک screen reader مانند VoiceOver یا NVDA تست کنید.
5. بررسی کنید که آیا می‌توان انیمیشن، حرکت و ویدیوهای پخش خودکار را با کنترل‌ها و تنظیمات Reduced Motion خاموش کرد.
6. بررسی کنید که آیا محتوای رسانه‌ای نیاز به کپشن، رونوشت (transcript) یا محتوای جایگزین دیگر دارد.

</div>

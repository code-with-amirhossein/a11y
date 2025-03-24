# فرمان‌ها و حالت‌های تعامل در screen reader

در ادامه، نکات و فرمان‌هایی برای استفاده از انواع مختلف screen reader آورده شده است، از جمله VoiceOver برای MacOS و iOS، NVDA و JAWS در Windows و همچنین Android:

## details VoiceOver برای MacOS
- فعال‌سازی و غیرفعال‌سازی:
    - کلید Command (⌘) + F5  
    - در لپ‌تاپ‌ها: Fn + Command (⌘) + F5
- استفاده از کلیدهای فعال‌سازی VoiceOver:
    - Control + Option (VO)
- ناوبری در صفحه:
    - استفاده از کلیدهای TAB / Shift + TAB برای جابجایی بین عناصر قابل focus
    - استفاده از کلیدهای جهت برای پیمایش بین بخش‌های مختلف محتوا (بسته به حالت فعال)
    - نگه‌داشتن کلیدهای VO و استفاده از سایر فرمان‌ها. [cheat sheet](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)
    - اجرای VoiceOver Rotor:
        - با VO فعال، کلید VO + U را بزنید. با کلیدهای جهت جابجا شوید.
    - بستن بخش‌ها با کلید Escape (الگوی رایج)
- ساکت کردن گفتار:
    - نگه‌داشتن کلید Command هنگام صحبت screen reader باعث توقف فوری گفتار می‌شود (مناسب برای دمو)
- تغییر سرعت گفتار screen reader:
    - در برنامه VoiceOver Utility، بخش Speech

[VoiceOver cheat sheet برای دسکتاپ](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

## VoiceOver برای iOS

در دستگاه‌های iOS، از بخش _Settings > Accessibility_ می‌توانید VoiceOver یا Switch Control را تنظیم کرده تا با سه بار فشار دادن دکمه پاور فعال شود.

[VoiceOver cheat sheet برای iOS](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts)

## NVDA و JAWS برای Windows

[NVDA](https://www.nvaccess.org/download/) و [JAWS](https://www.freedomscientific.com/products/software/jaws/) از پرکاربردترین screen readerها در Windows هستند.

برای نصب NVDA روی Virtual Machine با Parallels (که نیاز به لایسنس Windows نیز دارد):  
https://jerryjones.dev/2020/08/06/setting-up-nvda-on-parallels-with-macos/

- [cheat sheet برای NVDA](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)  
- [cheat sheet برای JAWS](https://dequeuniversity.com/assets/pdf/screenreaders/jaws.pdf)  

## Accessibility در اندروید

- نکاتی برای تست در اندروید: https://developer.android.com/guide/topics/ui/accessibility/testing  
- [TalkBack cheat sheet](https://dequeuniversity.com/screenreaders/talkback-shortcuts)  

## حالت‌های تعامل در screen readerهای Windows

در حالی که VoiceOver بیشتر با ترکیب‌های چندکلیدی کار می‌کند، NVDA و JAWS روی Windows رویکرد متفاوتی دارند. با فرمان‌های ساده‌تر، screen readerهای Windows دارای مفهومی به نام [_interaction modes_](https://tink.uk/understanding-screen-reader-interaction-modes/) هستند که مهندسان باید با آن آشنا باشند.

<div className="float-right border-2 w-fit p-6 my-6 ml-6">
    <h3 className="font-bold text-lg border-b-2 mb-6">مثالی از فرم</h3>
    <label>
        <div className="mb-2"><em>First Name</em></div>
        <input type="text" placeholder="Rainier McCheddarton" />
    </label>
</div>

حالت پیش‌فرض در NVDA، **Browse Mode** است. این حالت به کاربر امکان می‌دهد محتوای صفحه را بخواند و مثلاً با کلید H بین headings جابجا شود.

وقتی فوکوس وارد یک ورودی فرم یا ویجت `contenteditable` می‌شود، حالت به **Forms Mode** یا همان **Focus Mode** تغییر می‌کند. در این حالت، مثلاً زدن حرف `H` باعث نوشتن آن حرف در فیلد می‌شود و دیگر به heading بعدی نمی‌رود. screen reader به‌صورت خودکار بر اساس role عنصر بین این دو حالت جابجا می‌شود.

می‌توانید با فرمان `NVDA + Space` (که `NVDA` معمولاً کلید Insert است) به‌صورت دستی بین حالت‌ها جابجا شوید.

## از نقش `role="application"` با احتیاط بسیار استفاده کنید

⚠️ نقش `application` در ARIA کاربر را مستقیماً وارد حالت Focus می‌کند. در استفاده از این role بسیار محتاط باشید، چون در اصل بسیاری از فرمان‌های screen reader در Windows را غیرفعال کرده و keystrokeها را مستقیماً به مرورگر می‌فرستید.

قبل از استفاده از این ویژگی، حتماً با کاربرانی که دائماً از screen reader استفاده می‌کنند تست انجام دهید. اشتباه در استفاده از آن بسیار آسان است و تجربه را به‌شدت می‌تواند خراب کند.

مطالعه بیشتر از Marco Zehe:  
https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/
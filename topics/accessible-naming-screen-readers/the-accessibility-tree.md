# درخت Accessibility

Accessibility Tree ساختاری موازی با DOM است که توسط [APIهای دسترسی پلتفرم‌ها](https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/) و مرورگرهای وب ایجاد می‌شود تا اطلاعات مربوط به accessibility را به Assistive Technology (AT) منتقل کند. این ساختار تحت تأثیر HTML، ARIA و گاهی CSS قرار می‌گیرد. زمانی که تغییری در درخت ایجاد شود، مرورگر رویدادهایی را به AT ارسال می‌کند که بخش‌هایی از درخت به‌روزرسانی شده‌اند.

این درخت، ساختاری را در اختیار AT قرار می‌دهد که عناصر غیرضروری مانند `style` و `script` و دیگر موارد حذف شده‌اند. APIهای دسترسی در macOS، iOS، Windows و سایر پلتفرم‌ها، نسخه‌های خاص خود از این درخت را ایجاد می‌کنند، به این معنا که نقش‌ها (roles) و سایر مشخصات ممکن است کمی متفاوت باشند.

<figure className="my-6">
    <img src="/geckoflow-ax-tree.png" alt="The Accessibility Tree flow in Firefox (Gecko)" />
</figure>

Accessibility Tree بیشتر در ابزارهایی مانند screen reader کاربرد دارد. (البته screen readerهای امروزی به‌طور هم‌زمان از DOM نیز استفاده می‌کنند. مثلاً JAWS برای بهبود تجربه در صفحات فاقد دسترسی مناسب از DOM کمک می‌گیرد.)

## چگونه Accessibility Tree را مشاهده و تست کنیم؟

در حال حاضر ابزارهای بسیار خوبی برای بررسی Accessibility Tree در اختیار داریم! همان ابزار Accessibility در Chrome DevTools که برای بررسی نام‌های قابل دسترس استفاده کردیم، در اینجا نیز کاربرد دارد. همچنین می‌توانید از Safari Developer Tools و Firefox Developer Tools استفاده کنید. یا یک screen reader اجرا کنید!

DevTools مرورگرهای مدرن بسیار مناسب هستند برای اینکه نشان دهند چگونه Accessibility Tree با DOM در ارتباط است. این ابزارها اطلاعاتی مانند نام قابل دسترس، نقش، وضعیت مخفی بودن یا نبودن یک عنصر، یا اینکه آیا اطلاعاتی برای AT فراهم می‌کند یا نه، نمایش می‌دهند.

<figure className="my-6">
    <img src="/devtools-accessible-name.png" alt="Chrome DevTools Accessibility Inspector on an icon button on StackBlitz" />
</figure>

## چرا این موضوع اهمیت دارد؟

با یادگیری نحوه عملکرد Accessibility Tree و ارتباط آن با DOM، درک بهتری از ARIA و رابطه‌اش با HTML خواهید داشت.

یکی از سوء‌تفاهم‌های رایج در مورد ARIA، تفاوت میان ویژگی `disabled` در HTML و ویژگی `aria-disabled` برای ورودی‌های فرم و کنترل‌های دیگر است. تنها `disabled` روی focusپذیری و ظاهر عنصر در رابط بصری تأثیر می‌گذارد، در حالی که `aria-disabled` هیچ‌گونه تغییری در ظاهر یا تعامل قابل مشاهده ایجاد نمی‌کند. ویژگی ARIA فقط از طریق Accessibility Tree بر AT اثر می‌گذارد و هیچ تغییری در DOM ایجاد نمی‌کند.

آگاهی از این تفاوت‌ها باعث می‌شود در استفاده از ویژگی‌ها در نشانه‌گذاری HTML خود دقت بیشتری داشته باشید و فرآیند تست نیز برایتان قابل پیش‌بینی‌تر و مؤثرتر خواهد بود.

## لینک‌های مرتبط
- https://marcysutton.com/accessibility-and-performance#What-impacts-the-accessibility-tree
- https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/
- https://marcysutton.com/accessibility-and-performance#What-impacts-the-accessibility-tree
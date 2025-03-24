# ARIA و محاسبه نام accessible

**ARIA یا Accessible Rich Internet Applications**، یک مشخصه استاندارد برای مجموعه‌ای از ویژگی‌هاست که اطلاعات مربوط به accessibility را از طریق HTML منتقل می‌کند.

ARIA شامل مفهومی مهم در نشانه‌گذاری HTML است: [accessible naming](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/).

کنترل‌های فرم در HTML دارای نام هستند. لینک‌ها و دکمه‌ها نیز نام دارند. عناصر section و table‌ها هم همین‌طور. (اما عناصر DIV نام ندارند.)

## نوشتن نام‌های accessible

راه‌های مختلفی برای اختصاص نام به یک عنصر وجود دارد که بسته به نقش (role) عنصر، متفاوت است: محتوای متنی، عنصر `<label>` برای فرم، ویژگی‌های `aria-label` و `aria-labelledby`، و حتی ویژگی‌های `title` و `placeholder`.

اما فقط یک نام در نهایت اعمال می‌شود. اگر چند ویژگی و محتوای متنی با هم استفاده شوند، کدام‌یک برنده می‌شود؟

## نام‌های accessible چگونه انتخاب می‌شوند؟

سندی به نام [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.2/) این فرآیند را استاندارد می‌کند تا از هرج‌ومرج در پلتفرم‌های مختلف جلوگیری شود.

```html
<label>
    Zip Code
    <input aria-label="zip-code" placeholder="00000" title="Zip code" type="number" />
</label>
```

مشخصه Accessible Naming تعیین می‌کند که برای عناصر غیر مخفی که امکان نام‌گذاری دارند، ترتیب به چه صورت باشد: ابتدا `aria-labelledby`، سپس `aria-label`، بعد `title` یا `placeholder` یا تگ `<label>` فرم، و سپس برخی کنترل‌های فرزند، و در نهایت محتوای متنی.

## توضیحات accessible چیستند؟

توضیحاتی که با `aria-describedby` و `title` ارائه می‌شوند، مانند نام‌ها، توسط screen reader خوانده می‌شوند. اما این اتفاق با تأخیر اندکی انجام می‌شود و ممکن است بسته به تنظیمات کاربر اصلاً پخش نشود. بنابراین نمی‌توان همیشه روی شنیده شدن توضیحات حساب کرد.

نام‌ها و توضیحات accessible در [مشخصه اصلی ARIA](https://www.w3.org/TR/wai-aria-1.2/#namecalculation) نیز توضیح داده شده‌اند. این اطلاعات ممکن است فنی باشند، اما هر توسعه‌دهنده‌ای باید با آن‌ها آشنا باشد.

## متن قابل مشاهده را در اولویت قرار دهید

استفاده از `aria-label` بسیار ساده است، ولی نباید به آن بسنده کرد. همیشه باید در صورت امکان متن‌های قابل مشاهده را در اولویت قرار داد تا تجربه‌ی بصری کاربران با آن‌چه توسط Assistive Technology دریافت می‌کنند، مطابقت داشته باشد.

در بسیاری از مواقع، ویژگی `aria-label` بعد از تغییر محتوا به‌روزرسانی نمی‌شود و دیگر بیانگر چیزی که روی صفحه دیده می‌شود نیست. این مسئله موضوع یکی از موفقیت‌های معیارهای WCAG است: [Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

## ابزار Accessibility در Chrome DevTools

یکی از ابزارهای مورد علاقه من برای مشاهده نام‌ها و توضیحات قابل دسترس، Accessibility Inspector در Chrome DevTools است. این ابزار در کنار تب Styles در پنجره Elements قرار دارد. در سناریوهایی با چند ویژگی یا محتوای متنی، نشان می‌دهد که “کدام‌یک برنده می‌شود” — که بسیار مفید است.

<figure className="my-6">
    <img src="/devtools-accessible-name.png" alt="Chrome DevTools Accessibility Inspector on an icon button on StackBlitz" />
</figure>

یا ممکن است نشان دهد که ورودی فرم شما اصلاً نام accessible ندارد، چون id آن با هیچ labelای تطابق ندارد. 
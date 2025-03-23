<script setup>
// import '../../components/VisibilityWidget.ts'
</script>

# متدهای Visibility

در زمان ساخت و اشکال‌زدایی UI، تکنیک‌هایی برای نمایش محتوا، پنهان‌سازی بصری، یا مخفی‌سازی کامل وجود دارد که باید با آن‌ها آشنا باشید! این تکنیک‌ها می‌توانند در قابل دسترس بودن یا نبودن یک عنصر تأثیر مستقیم داشته باشند.

## کلاس‌های CSS مانند `.visually-hidden` یا `.sr-only`

کلاس‌های سفارشی CSS مثل `.visually-hidden` یا `.sr-only` معمولاً برای افزودن محتوایی به کار می‌روند که به‌صورت بصری دیده نمی‌شوند ولی توسط screen reader خوانده می‌شوند. نسخه‌های مدرن این کلاس‌ها ترکیبی از ویژگی‌هایی مانند موقعیت مطلق، clip، margin منفی، `overflow: hidden` و غیره را به کار می‌گیرند.

در اینجا کلاس `.sr-only` در [Tailwind](https://tailwindcss.com/docs/screen-readers):

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

<visibility-widget name=".sr-only" classesToToggle="sr-only"></visibility-widget>

## استفاده از `display: none` در CSS

ویژگی `display: none` باعث مخفی شدن کامل محتوا برای همه می‌شود: کاربران کیبورد، screen reader، و کاربران بینا. فضای اشغال‌شده توسط عناصر با این ویژگی نیز به‌طور کامل حذف می‌شود.

```css
.custom-dropdown-panel {
    display: none;
}
.custom-dropdown-panel.active {
    display: flex;
}
```

`display: none` یکی از ابزارهای کلیدی در UI است، ولی باید در نظر داشت که این ویژگی سایر ویژگی‌های display مانند `flex`، `grid` یا `block` را خنثی می‌کند. همچنین بدون keyframe animation قابل انیمیشن‌سازی نیست.

<visibility-widget name="display: block" classesToToggle="hidden"></visibility-widget>

## استفاده از `visibility: hidden` در CSS

ویژگی `visibility: hidden` مشابه `display: none` باعث پنهان شدن محتوا می‌شود و دسترسی آن را از طریق کیبورد و screen reader نیز غیرفعال می‌کند، ولی برخلاف `display: none` فضای بصری آن را حفظ می‌کند. این ویژگی هم بدون keyframe animation قابل انیمیشن‌سازی نیست.

```html
<div style="visibility: hidden;">
    
</div>
```

<visibility-widget name="visibility: hidden" classesToToggle="invisible"></visibility-widget>

## استفاده از `opacity: 0` در CSS

ویژگی `opacity` با `display` و `visibility` متفاوت است. این ویژگی محتوا را از لحاظ بصری نامرئی می‌کند ولی همچنان برای کیبورد و screen reader قابل دسترس باقی می‌ماند. همچنین قابل انیمیشن‌سازی است.

```html
<div style="opacity: 0;">

</div>
```

<visibility-widget name="opacity: 0" classesToToggle="opacity-0"></visibility-widget>

## ویژگی `aria-hidden`

هیچ‌کدام از ویژگی‌های ARIA بر روی نمایش بصری یا دسترسی از طریق کیبورد تأثیر ندارند. اما ویژگی `aria-hidden` باعث پنهان شدن محتوا از screen reader می‌شود. این ویژگی ممکن است باعث سردرگمی تیم‌ها شود، چرا که اثر آن در ظاهر مشخص نیست.

```html
<div aria-hidden="true">
    <h1>This heading will be hidden from screen readers</h1>
    <button>This button will still be focusable without `tabIndex="-1"`</button>
</div>
```

<visibility-widget name='aria-hidden="true"' attributeToToggle="aria-hidden"></visibility-widget>

## ویژگی `hidden` در HTML

ویژگی `hidden` یکی از ویژگی‌های داخلی HTML است و عملکردی مشابه `display: none` دارد. بنابراین دقیقاً همان اثر را خواهد داشت و می‌تواند توسط CSS بازنویسی شود.

```html
<div hidden>
    <button>This button is hidden also</button>
</div>
```

<visibility-widget name='hidden' attributeToToggle="hidden"></visibility-widget>
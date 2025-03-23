import { defineConfig, type DefaultTheme } from "vitepress";

export const fa = defineConfig({
  title: "قابلیت دسترسی",
  lang: "fa-IR",
  description: "نگاهی به اهمیت accessibility در فرآیند توسعه",
  dir: "rtl",
  markdown: {
    container: {
      tipLabel: "نکته",
      warningLabel: "هشدار",
      dangerLabel: "خطر",
      infoLabel: "اطلاعات",
      detailsLabel: "جزئیات",
    },
  },
  themeConfig: {
    sidebar: sidebar(),
    docFooter: {
      prev: "قبلی",
      next: "بعدی",
    },

    outline: {
      label: "در این صفحه",
    },

    lastUpdated: {
      text: "آخرین به‌روزرسانی‌",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "تغییر زبان",
    returnToTopLabel: "بازگشت به بالا",
    sidebarMenuLabel: "منوی جانبی",
    darkModeSwitchLabel: "تم تاریک",
    lightModeSwitchTitle: "رفتن به حالت روشن",
    darkModeSwitchTitle: "رفتن به حالت تاریک",
    notFound: {
      linkLabel: "بازگشت به خانه",
      linkText: "بازگشت به خانه",
      title: "صفحه مورد نظر یافت نشد",
      code: "۴۰۴",
      quote:
        "اما اگر جهت خود را تغییر ندهید و اگر ادامه دهید به دنبال چیزی که دنبال می‌کنید، ممکن است در نهایت به جایی که در حال رفتن به سمتش هستید، برسید.",
    },
    siteTitle: "قابلیت دسترسی (accessibility)",
  },
});

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "مقدمه",
      base: "/topics/intro",
      items: [
        {
          text: "چه کسانی به accessibility نیاز دارند؟",
          link: "/who-is-a11y-for",
        },
        { text: "چرا accessibility مهم است؟", link: "/why-is-a11y-important" },
        { text: "راه‌اندازی کاربران Windows", link: "/windows-users" },
        // { text: "دموها: accessibility در محیط واقعی", link: "/examples" },
      ],
    },
    {
      text: "MVP",
      base: "/topics/mvp",
      items: [
        {
          text: "MVPها چه ارتباطی با accessibility دارند؟",
          link: "/mvp-and-a11y",
        },
        {
          text: "بازگشت به عقب بخاطر accessibility",
          link: "/shift-left",
        },
        {
          text: "Personaهای مرتبط با accessibility",
          link: "/persona",
        },
      ],
    },
    {
      text: "روابط کاربری accessible",
      base: "/topics/ui",
      items: [
        {
          text: "اصول پایه‌ای اعمال accessibility",
          link: "/intro",
        },
        {
          text: "چه چیزهایی باید حس خطر ما را فعال کنند؟",
          link: "/your-spidey-senses",
        },
        {
          text: "با div دکمه نسازید!",
          link: "/dont-be-a-div-button-creator",
        },
        {
          text: "متدهای Visibility",
          link: "/visibility-methods",
        },
        {
          text: "چگونه یک کامپوننت UI را از نظر accessibility تست کنیم",
          link: "/how-to-test-components",
        },
      ],
    },
  ];
}

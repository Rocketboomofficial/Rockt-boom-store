# Rocket Boom Store — PWA / PWABuilder package

این نسخه شامل کاتالوگ Rocket Boom و اپلیکیشن Shayan AI، تصاویر ارسالی، تم تاریک، آیکون‌های PNG استاندارد، Manifest و Service Worker نسخه‌بندی‌شده است.

## انتشار با PWABuilder
1. همه محتویات این پوشه را مستقیماً در ریشه مخزن GitHub قرار بده (نه پوشه مادر).
2. GitHub Pages یا هاست را روی HTTPS فعال کن و مطمئن شو آدرس اصلی، `index.html` را نمایش می‌دهد.
3. آدرس HTTPS سایت را در PWABuilder وارد کن و گزارش Manifest و Service Worker را بررسی کن.
4. اگر گزینه Package for Stores غیرفعال است، ابتدا خطاهای اعتبارسنجی PWABuilder را برطرف کن؛ صرفاً ZIP نمی‌تواند آن دکمه را فعال کند.
5. برای بسته Android، در بخش Android گزینه بسته‌بندی مورد پشتیبانی PWABuilder را انتخاب کن و شناسه برنامه (Application ID) یکتا را وارد کن.

## نکات مهم انتشار Android
- برای انتشار به‌صورت Trusted Web Activity (TWA)، دامنه باید تحت مالکیت شما باشد و فایل `/.well-known/assetlinks.json` با SHA-256 گواهی امضای نهایی برنامه روی همان دامنه منتشر شود.
- مقدار SHA-256 را بعد از ساخت APK/AAB از کلید امضای خودت استخراج کن؛ مقدار نمونه یا ساختگی قرار نده.
- فایل‌های امضای خصوصی و keystore را داخل مخزن عمومی GitHub قرار نده.
- برای Google Play معمولاً خروجی AAB و اطلاعات سیاست حریم خصوصی/رده‌بندی محتوا هم لازم است.

## آیکون
آیکون‌های `assets/icon-192.png` و `assets/icon-512.png` از لوگوی Rocket Boom موجود در پروژه ساخته شده‌اند. لوگوی Shayan AI در صفحه برنامه و تصاویر معرفی استفاده شده است.

## لینک دریافت Shayan AI
`https://cdn.imgurl.ir/uploads/j460697_.zip`

توجه: لینک دانلود خارجی داخل صفحه Shayan AI قرار دارد؛ در این محیط امکان تأیید محتوای فایل مقصد فراهم نشد.

## React proyektləri
---

Youtube kanalımda dərs videolarından yararlanmaq üçün [klikləyin](https://www.youtube.com/@rasul_jangirli).

Medium hesabımda məqalələrimlə tanış olmaq üçün [klikləyin](https://medium.com/@rasuljangirli).

Bu repomda bir çox fərqli mövzuya müraciət edən müxtəlif proyektlər mövcuddur. Bəzi proyektlərdə dataların gətirilməsini simulyasiya etmək üçün `JSON Server`-dən istifadə edilmişdir. Bunun quraşdırılması üçün aşağıdakı addımları izləyə bilərsiniz:

-    ### JSON Server Quraşdırılması və lahiyəni ayağa qaldırmaq

        Bu əməliyyat json serveri global olaraq compyuterinizə quracaq.
        
        ```bash
            npm install -g json-server
        ```

        İstəsəniz ki yalnız proyektə özəl olsun bu zaman

        ```bash
            npm install json-server
        ```
        əmrini icra edə bilərsiniz. Lakin məsləhət gördüyüm birinci variantdır.

        JSON Server ilə işləmək üçün bir **`db.json`** faylına ehtiyacınız olacaq. Bu faylda, serverdə, fake datalar , test dataları saxlanacaq.( zatən api folderinə əlavə edilib, sadəcə incləməyiniz məsləhətdir).

        Bu əmrlər icra olunduqdan sonra isə proyektə lazım olan node modulları yüklənməlidir.

        ```bash
            npm install
        ```
        əmrini icra edərək bu modulları proyektə əlavə edə bilərsiniz. (yarn v.s kimi texnologiyalardanda mümkündür);

        Sonra isə JSON serveri işə salmaq üçün aşağıdakı komandanı icra edin:

        ```bash
            json-server --watch db.json --port 3000
        ```
        burada fərqli port seçə bilərsiniz.

        Daha sonra isə proyekti ayağa qaldırmaq üçün 

        ```bash
            npm run dev 
        ```
        əmrini icra edin.

        Diqqət edilməli məqam odur ki burada JSON server ilə ana proyekt eyni portda ayağa qalxmamalıdır. Bu zaman xəta baş verə bilər. yəni işə salma zamanı iki portu eyni etmiyin. fərqli portlarda ayağa qalxmalıdırlar.

        Bir məlumatıda nəzərinizə çatdırım ki endpointlərə diqqət edilməlidir. məsələn siz back-endi 3000 portunda ayağa qaldırıb amma frontdan istəkləri örnək olaraq 3001 portuna göndərsəniz təbii ki məlumatları əldə edə bilməyəcəksiniz və error v.s olacaq. Bu səbəbdən JSON server hansı portda ayağa qalxıbsa frontdan istəkləri o porta ünvanlamalısınız.


### PROYEKTLƏR HAQQINDA MƏLUMAT:

- ###  - filename: `ffff`

---

Youtube kanalımda dərs videolarından yararlanmaq üçün [klikləyin](https://www.youtube.com/@rasul_jangirli).

Medium hesabımda məqalələrimlə tanış olmaq üçün [klikləyin](https://medium.com/@rasuljangirli).

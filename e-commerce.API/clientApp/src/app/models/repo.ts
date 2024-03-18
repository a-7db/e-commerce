import { Category } from "./Category";
import { Brand } from "./brand";
import { Product } from "./product";

export const products: Product[] = [
    {
        id: '111111',
        name: 'مياه للشرب',
        category: 'water',
        brand: 'أسواق التميمي',
        createdAt: new Date(),
        sizes: [
            {
                id: '29041',
                productSize: '330 مل',
                imagesUri: [{imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20220811/224965_1-20220811-121413.png'}],
                price: 16.95,
                discount: 0
            },
            {
                id: '29041',
                productSize: '40x330 مل',
                imagesUri: [{ imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20220811/224965_1-20220811-121413.png'}],
                price: 0.50,
                discount: 29,
            },
        ],
        slug: 'tamimi-markets-bottled-drinking-water-1'
    },
    {
        id: '2222',
        name: 'كريمة الطبخ كامل الدسم',
        category: 'cocking cream',
        brand: 'المراعي',
        createdAt: new Date(),
        
        sizes: [
            {
                id: '29041',
                productSize: '500 مل',
                imagesUri: [{imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20220323/274802_1-20220323-140917.png'},
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20201031/274802_2-20201031-220826.png'}],
                price: 11.50,
                discount: 40,
            },
            {
                id: '29041',
                productSize: '1 لتر',
                imagesUri: [{imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20230316/274803_2-20230316-122528.png'},
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20201031/274802_2-20201031-220826.png'}],
                price: 28.95,
                discount: 0,
            },
            {
                id: '29041',
                productSize: '250 مل',
                imagesUri: [{imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20220323/274800_1-20220323-140607.png'},
                    { imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20201031/274802_2-20201031-220826.png'}],
                price: 9.50,
                discount: 0,
            },
        ],
        slug: 'cocking-cream'
    },
    {
        id: '333333',
        name: 'طعام قطط سالمون مع المرق',
        category: 'قطط',
        brand: 'فريسكيز',
        createdAt: new Date(),
        sizes: [
            {
                id: '6526',
                price: 3.95,
                productSize: '85 غرام',
                imagesUri: [{ imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20220615/386613_1-20220615-220220.png'}],
                discount: 0,
            }
        ],
        slug: 'salmon-in-gravy'
    },
    {
        id: '44444',
        name: 'سائل غسيل الصحون بالليمون',
        category: '',
        brand: 'فيري',
        createdAt: new Date(),
        sizes: [
            {
                id: '51526',
                imagesUri: [{ imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20220705/366218_1-20220705-115928.png'}],
                price: 19.50,
                productSize: '1 لتر',
                discount: 0,
            },
        ],
        slug: 'dishwashing-gentle-hands-lemon-blossom'
    },
    {
        id: '55555',
        name: 'سيريلاك قمح',
        category: 'cerelac',
        brand: 'نستله',
        createdAt: new Date(),
        sizes: [
            {
                id: '51526',
                imagesUri: 
                [
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20240131/112608_1-20240131-074719.png'},
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20240131/112608_4-20240131-074729.png'},
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20240131/112608_6-20240131-074736.png'},
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20240131/112608_9-20240131-074748.png'},
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20240131/112608_11-20240131-074756.png'}
                ],
                price: 29.50,
                productSize: '1 لتر',
                discount: 0,
            },
        ],
        slug: 'cerelac-infant-cereal-wheat-1'
    },
    {
        id: '666666',
        name: 'اقراص فحم صناعي مغلف بالقصدير',
        category: '',
        brand: 'أورينكس',
        createdAt: new Date(),
        sizes: [
            {
                id: '51526',
                imagesUri: 
                [
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20201101/238501_1-20201101-012102.png'},
                    {imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20201101/238501_2-20201101-012105.png'}
                ],
                price: 26.95,
                productSize: '100 قرص',
                discount: 0,
            },
        ],
        slug: 'orinex-charcoal-round-tablets-in-foil'
    },
    {
        id: '77777',
        name: 'كاتشب طماطم',
        category: 'توابل',
        brand: 'هاينز',
        createdAt: new Date(),
        sizes: [
            {
                id: '51526',
                imagesUri:
                    [
                        { imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231019/112626_1-20231019-121101.png'},
                    ],
                price: 26.95,
                productSize: '910 غرام',
                discount: 21,
            }
        ],
        slug: 'tomato-ketchup-8'
    },
    {
        id: '8888',
        name: 'مسحوق الفلفل الأسود',
        category: 'بهارات',
        brand: 'اسناد',
        createdAt: new Date(),
        sizes: [
            {
                id: '51526',
                imagesUri:
                    [
                        { imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20220309/317552_1-20220309-121821.png'},
                    ],
                price: 15.95,
                productSize: '200 غرام',
                discount: 0,
            }
        ],
        slug: 'black-pepper-powder-9'
    },
    {
        id: '999999',
        name: 'زيت ذرة',
        category: 'بهارات',
        brand: 'نور',
        createdAt: new Date(),
        sizes: [
            {
                id: '51526',
                imagesUri:
                    [
                        { imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20230228/393469_1-20230228-000016.png'},
                    ],
                price: 29.95,
                productSize: '1.5 لتر',
                discount: 37,
            }
        ],
        slug: 'corn-oil-19'
    },
]

export const slides: string[] = [
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240220%2FRB_-7-20240220-134514.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240221%2FArtboard63-20240221-124506.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240221%2FRB_-16-20240221-054943.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240220%2FRB_-10-20240220-140000.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240221%2FArtboard66-20240221-124420.png&w=1920&q=100', //562
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240220%2FRB_-12-20240220-123229.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240220%2FRB_-10-20240220-123136.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240221%2FRB_16-20240221-135007.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240221%2FArtboard64-20240221-124648.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240220%2FRB_-15-20240220-075955.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240220%2FRB_-8-20240220-123019.png&w=1920&q=100',
    'https://shop.tamimimarkets.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftm-zopsmart-uploads%2Foriginals%2F20240220%2FRB_-8-20240220-123019.png&w=1920&q=100',
]


export const categories: Category[] = [
    {
        id: 'asf',
        title: 'الفاكهة والخضار',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231130/1-01-20231130-062002.png',
        slug: 'fruits--vegetables',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'المخبوزات',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20210122/TM1.2BAKERY-20210122-185350.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'اللحوم',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20190612/TM1.3MEAT-20190612-034224.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'الدواجن',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20240107/4-12-20240107-123154.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'مأكولات بحرية',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20210122/TM1.5SEAFOOD-20210122-185409.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'اللحوم الباردة والأجبان',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231204/3-12-06-20231204-065816.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'الالبان',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231203/1-07-20231203-054903.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'الزهور',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231130/1-08-20231130-084105.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'المكولات والمشأروبات',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231203/1-09-20231203-084014.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'الإفطار',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231203/1-10-20231203-080147.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'وجبات خفيفة',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231204/1-11-20231204-070733.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'زيت وسمن',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231130/1-12-20231130-075712.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'أرز ومكرونة',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231130/1-13-20231130-081737.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'خبز',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231130/1-14-20231130-091601.png',
        slug: '',
        isDisplayed: false
    },
    {
        id: 'asf',
        title: 'المياه والمشروبات',
        parentCategory: null,
        imageUri: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20231203/1-15-20231203-054937.png',
        slug: '',
        isDisplayed: false
    },
]

export const brands: Brand[] = [
    {
        id: 'awv',
        name: 'Sanita',
        image: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20200610/sanita-20200610-080621.png',
        slug: 'santia',
        isDisplayed: false
    },
    {
        id: 'awv',
        name: 'fam',
        image: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20200610/fam-final-20200610-075907.png',
        slug: 'fam',
        isDisplayed: false
    },
    {
        id: 'awv',
        name: 'freshdays',
        image: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20200610/freshdays-final-20200610-080213.png',
        slug: 'freshdays',
        isDisplayed: false
    },
    {
        id: 'awv',
        name: 'private',
        image: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20200610/private-final-20200610-080506.png',
        slug: 'private',
        isDisplayed: false
    },
    {
        id: 'awv',
        name: 'هلا',
        image: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20200610/hala-final-20200610-080414.png',
        slug: 'hala',
        isDisplayed: false
    },
    {
        id: 'awv',
        name: 'بامبي',
        image: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20200610/sanita-bambi-final-20200610-080704.png',
        slug: 'sanita-bambi',
        isDisplayed: false
    },
    {
        id: 'awv',
        name: 'SAFEWAY',
        image: 'https://storage.googleapis.com/tm-zopsmart-uploads/originals/20201015/safeway-logo-20201015-134515.png',
        slug: 'safeway',
        isDisplayed: false
    },
]
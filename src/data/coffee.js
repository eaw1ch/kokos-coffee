const coffee = [
    {
        id: 1,
        name: 'Эспрессо',
        info: [
            { size: 40, price: 100, key: 1 },
            { size: 80, price: 120, key: 2 },
        ],
        type: 'coffee',
        photo: 'https://static.tildacdn.com/tild3064-3564-4039-b739-333765313336/2ca2b4cf7160631d938f.jpg',
    },

    {
        id: 2,
        name: 'Американо',
        info: [
            { size: 200, price: 120, key: 3 },
            { size: 300, price: 140, key: 4 },
        ],
        type: 'coffee',
        photo: 'https://avatars.mds.yandex.net/i?id=13d2b545f6ff7687ceef2972bdd83ca65937096f-10147998-images-thumbs&n=13',
    },

    {
        id: 3,
        name: 'Капучино',
        info: [
            { size: 200, price: 150, key: 5 },
            { size: 300, price: 170, key: 6 },
            { size: 400, price: 190, key: 7 },
        ],
        type: 'coffee',
        photo: 'https://cdn.foodpicasso.com/assets/2022/12/16/bbcf0c919a39e3d47cbd3ba4284b9295---jpg_1000x_103c0_convert.jpg',
    },

    {
        id: 4,
        name: 'Латте',
        info: [
            { size: 300, price: 170, key: 8 },
            { size: 400, price: 190, key: 9 },
        ],
        type: 'coffee',
        photo: 'https://www.thesun.co.uk/wp-content/uploads/2022/05/NINTCHDBPICT000732165369.jpg?strip=all&quality=100&w=1920&h=1080&crop=1',
    },

    {
        id: 5,
        name: 'Флэт-уайт',
        info: [{ size: 200, price: 160, key: 10 }],
        type: 'coffee',
        photo: 'https://studychinese.ru/content/dictionary/pictures/27/13915.jpg',
    },

    {
        id: 6,
        name: 'Мокко',
        info: [
            { size: 200, price: 170, key: 11 },
            { size: 300, price: 190, key: 12 },
            { size: 400, price: 210, key: 13 },
        ],
        type: 'coffee',
        photo: 'https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg',
    },

    {
        id: 7,
        name: 'Фильтр',
        info: [
            { size: 200, price: 110, key: 14 },
            { size: 300, price: 130, key: 15 },
            { size: 400, price: 150, key: 16 },
        ],
        type: 'coffee',
        photo: 'https://attuale.ru/wp-content/uploads/2018/06/polza-i-vred-kofe.jpg',
    },

    {
        id: 8,
        name: 'Апельсиновый сок',
        info: [
            { size: 200, price: 150, key: 17 },
            { size: 300, price: 210, key: 18 },
            { size: 400, price: 290, key: 19 },
        ],
        type: 'juice',
        photo: 'https://www.thesun.co.uk/wp-content/uploads/2019/11/NINTCHDBPICT000528626045.jpg',
    },

    {
        id: 9,
        name: 'Яблочный сок',
        info: [
            { size: 200, price: 140, key: 20 },
            { size: 300, price: 180, key: 21 },
            { size: 400, price: 220, key: 22 },
        ],
        type: 'juice',
        photo: 'https://povardnya.ru/images/jMubUpSKQye8k7nTa2JD.jpg',
    },

    {
        id: 10,
        name: 'Морковный сок',
        info: [
            { size: 200, price: 140, key: 23 },
            { size: 300, price: 170, key: 24 },
            { size: 400, price: 210, key: 25 },
        ],
        type: 'juice',
        photo: 'https://www.naturalfoodseries.com/wp-content/uploads/2019/04/Carrot-Juice.jpeg',
    },

    {
        id: 11,
        name: 'Матча',
        info: [
            { size: 200, price: 150, key: 26 },
            { size: 300, price: 180, key: 27 },
            { size: 400, price: 200, key: 28 },
        ],
        type: 'nocoffee',
        photo: 'https://menu2go.ru/images/food/217/217_364_20210818161438_2045.jpg',
    },

    {
        id: 12,
        name: 'Какао',
        info: [
            { size: 200, price: 100, key: 29 },
            { size: 300, price: 130, key: 30 },
            { size: 400, price: 160, key: 31 },
        ],
        type: 'nocoffee',
        photo: 'https://restoran-goldenmileclub.ru/assets/components/phpthumbof/cache/shutterstock_1673894422.a06ce77e240be745b808e0da7a799f1a.jpg',
    },

    {
        id: 13,
        name: 'Горячий шоколад',
        info: [{ size: 300, price: 150, key: 32 }],
        type: 'nocoffee',
        photo: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674503880_catherineasquithgallery-com-p-fon-goryachii-shokolad-42.jpg',
    },

    {
        id: 14,
        name: 'Смузи',
        info: [{ size: 300, price: 190, key: 33 }],
        type: 'nocoffee',
        photo: 'https://sneg.top/uploads/posts/2023-03/1678633116_sneg-top-p-molochnie-kokteili-na-belom-fone-vkontakte-34.jpg',
    },

    {
        id: 15,
        name: 'Милкшейк',
        info: [{ size: 300, price: 180, key: 34 }],
        type: 'nocoffee',
        photo: 'https://sun9-76.userapi.com/impf/2fDE-Fe8QcqJiZA8oAK0LSGGT8lhU76DIvrzSQ/Sv38vnrumgg.jpg?size=320x213&quality=95&crop=123,0,2254,1500&sign=9adf7b55c2b15045ca4d57fb65099921&type=album',
    },

    {
        id: 16,
        name: 'Классический раф',
        info: [
            { size: 300, price: 180, key: 35 },
            { size: 400, price: 210, key: 36 },
        ],
        type: 'author',
        photo: 'https://coffeedon.ru/wp-content/uploads/6-4.jpg',
    },

    {
        id: 17,
        name: 'Медовый раф',
        info: [
            { size: 300, price: 190, key: 37 },
            { size: 400, price: 220, key: 38 },
        ],
        type: 'author',
        photo: 'https://zakipyati.ru/wp-content/uploads/2023/05/5medovyj.jpg',
    },

    {
        id: 18,
        name: 'Раф халва',
        info: [
            { size: 300, price: 200, key: 39 },
            { size: 400, price: 230, key: 40 },
        ],
        type: 'author',
        photo: 'https://avatars.mds.yandex.net/get-sprav-products/5512660/2a0000018336ff0d23ca1285ccca082a48c9/medium',
    },

    {
        id: 19,
        name: 'Раф фисташка',
        info: [{ size: 300, price: 250, key: 41 }],
        type: 'author',
        photo: 'https://i.pinimg.com/originals/11/99/28/1199282d3834f371dec4abbf39b09f1d.jpg',
    },

    {
        id: 20,
        name: 'Раф банан-корица',
        info: [
            { size: 300, price: 200, key: 42 },
            { size: 400, price: 230, key: 43 },
        ],
        type: 'author',
        photo: 'https://i.pinimg.com/originals/b9/96/25/b996252bce7ae6085b4e248f3198dd44.jpg',
    },

    {
        id: 21,
        name: 'Сникерс',
        info: [
            { size: 300, price: 210, key: 44 },
            { size: 400, price: 240, key: 45 },
        ],
        type: 'author',
        photo: 'https://www.nicepng.com/png/detail/863-8635521_snickers-milkshake-snickers-chocolate.png',
    },

    {
        id: 22,
        name: 'Латте пряная груша',
        info: [
            { size: 300, price: 200, key: 46 },
            { size: 400, price: 230, key: 47 },
        ],
        type: 'author',
        photo: 'https://api.selcdn.ru/v1/SEL_249678/ucsdelivery/a71d59c55ae84ce19ca15c1b5e997a68/3ce99e9d43724518897dffc019da3847.jpg',
    },

    {
        id: 23,
        name: 'Латте лаванда-кокос',
        info: [
            { size: 300, price: 200, key: 48 },
            { size: 400, price: 230, key: 49 },
        ],
        type: 'author',
        photo: 'https://static.tildacdn.com/tild6636-3639-4631-a135-363434616635/IMG_0066.jpg',
    },
]

export default coffee

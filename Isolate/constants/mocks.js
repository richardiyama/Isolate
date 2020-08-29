const categories = [
{
    id:  'clothes',
    name:"Clothes",
    tags:['products','inspirations','shop'],
    count:147,
    image: require('../assets/images/clothes.png')
},

{
    id: 'apps' ,
    name:'Apps',
    tags:['products','inspirations'],
    count:16,
    image: require('../assets/images/apps.png')
},
{
    id: 'electronics' ,
    name:'Electronics',
    tags:['products','shop'],
    count:68,
    image: require('../assets/images/electronics.png')
},
{
    id: 'furnitures' ,
    name:'Furnitures',
    tags:['products','shop'],
    count:47,
    image: require('../assets/images/furnitures.png')
},
{
    id: 'plastics' ,
    name:'Plastics',
    tags:['products','shop'],
    count:47,
    image: require('../assets/images/plastics.png')
},
{
    id: 'automobile' ,
    name:'Automobile',
    tags:['products','shop'],
    count:47,
    image: require('../assets/images/automobile.png')
}
];
const explore = [
//images
require('../assets/images/explore_1.png'),
require('../assets/images/explore_2.png'),
require('../assets/images/explore_3.png'),
require('../assets/images/explore_4.png'),
require('../assets/images/explore_5.png'),
];
const product = [
{
    id: 1,
    name:'',
    tags:['interiors','27m','Ideas'],
    gallery:[
        require('../assets/images/clothes_1.png'),
        require('../assets/images/clothes_2.png'),
        require('../assets/images/clothes_3.png'),
        require('../assets/images/clothes_4.png'),
        require('../assets/images/clothes_5.png'),
        require('../assets/images/clothes_6.png'),
    ]
}
];

const profile = {
    username:'richardiyama',
    location:'Nigeria',
    email:'richardiyama@yahoo.com',
    avater: require('../assets/images/avatar.png'),
    budget:1000,
    monthly_cap: 5000,
    notifications:true,
    newsletter:false,

};


export{
    categories,
    explore,
    product,
    profile,
}
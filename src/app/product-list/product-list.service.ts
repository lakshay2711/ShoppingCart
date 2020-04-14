import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductListService {

    products: Product[] = [
        {
            productID: 101,
            productName: 'HRX by Hrithik Roshan',
            productPrice: 519,
            quantities: 10,
            productPriceFormatted: 'Rs 519',
            productActualPriceFormatted: 'Rs 1299',
            percentageDiscount: "60% OFF",
            category: 'male',
            productDescription: 'Men White Lifestyle Regular Fit Polo Collar T-shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10106117/2019/11/28/0df158cd-7c4e-40ae-afde-6b2ad628177c1574924175278-HRX-by-Hrithik-Roshan-Men-Tshirts-5851574924172336-1.jpg'
        },
        {
            productID: 102,
            productName: 'Superdry',
            productPrice: 2399,
            quantities: 5,
            productPriceFormatted: 'Rs 2399',
            productActualPriceFormatted: 'Rs 2999',
            percentageDiscount: "20% OFF",
            category: 'male',
            productDescription: 'Men Navy Blue & White Striped Round Neck T-shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9901805/2019/7/16/8139e933-b2a1-4d35-8a9f-d01cf3e1ace81563256634726-Roadster-Men-Tshirts-5541563256633223-1.jpg'
        },
        {
            productID: 103,
            productName: 'Tommy Hilfiger',
            productPrice: 979,
            quantities: 2,
            productPriceFormatted: 'Rs 979',
            productActualPriceFormatted: 'Rs 2999',
            percentageDiscount: "30% OFF",
            category: 'female',
            productDescription: 'Women Red Solid Round Neck T-shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10238173/2019/8/16/83739a77-7e14-4034-ae8d-47fe31978b341565929153093-Tommy-Hilfiger-Women-Tshirts-3781565929151650-1.jpg'
        },
        {
            productID: 104,
            productName: 'U.S. Polo Assn. Denim Co.',
            productPrice: 1121,
            quantities: 1,
            productPriceFormatted: 'Rs 1121',
            productActualPriceFormatted: 'Rs 1495',
            percentageDiscount: "25% OFF",
            category: 'male',
            productDescription: 'Men Green Printed Round Neck T-shirt',
            imageUrl: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10207589/2019/8/6/8c9add52-b699-4119-9cd5-e1e0a74cf3b31565090592233-US-Polo-Assn-Denim-Co-Men-Tshirts-901565090590365-1.jpg'
        },
    ];
    
    constructor() {}

    getProductsHandler() {
        return this.products.slice();
    }

}

export interface Product {
    productID: number;
    productName: string;
    productPrice: number;
    quantities: number;
    productPriceFormatted: string;
    productActualPriceFormatted: string;
    percentageDiscount: string;
    category: string;
    productDescription: string;
    imageUrl: string;
}
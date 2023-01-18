import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = [
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "3M Gold Privacy Filter for 17\" Widescreen Laptop (16:10) (GF170W1B)",
            "seller": "3M",
            "wholePrice": "68",
            "priceFraction": "36",
            "stock": 36,
            "star": 3,
            "starCount": 3245,
            "img": "https://images-na.ssl-images-amazon.com/images/I/415oziPFA0L._AC_US218_.jpg",
            "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_1?ie=UTF8&adId=A03956601N6RBLKGAP4W1&url=https%3A%2F%2Fwww.amazon.com%2F3M-Privacy-Filter-Widescreen-Laptop%2Fdp%2FB002RL8IYK%2Fref%3Dsr_1_1%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-1-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_atf",
            "features": [
                {
                    "description": "Display Size",
                    "value": "17 inches"
                },
                {
                    "description": "Hardware Platform",
                    "value": "PC"
                }
            ],
            "price": 68.36,
            "shipping": 7.99
        },
        {
            "key": "B01LZ2WZGH",
            "category": "laptop",
            "name": "Manfrotto MB LF-WN-BP camera & laptop backpack for DSLR Lifestyle Windsor, grey",
            "seller": "Manfrotto",
            "wholePrice": "169",
            "priceFraction": "88",
            "stock": 55,
            "star": 2,
            "starCount": 2899,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51mEVhwXGKL._AC_US218_.jpg",
            "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_2?ie=UTF8&adId=A04941221ULRUNSJPY1RW&url=https%3A%2F%2Fwww.amazon.com%2FManfrotto-MB-LF-WN-BP-backpack-Lifestyle%2Fdp%2FB01LZ2WZGH%2Fref%3Dsr_1_2%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-2-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_atf",
            "features": [],
            "price": 169.88,
            "shipping": 3.99
        },
        {
            "key": "B01K1IO3QW",
            "category": "laptop",
            "name": "Acer Aspire E 15 E5-575-33BM 15.6-Inch Full HD Notebook (Intel Core i3-7100U Processor 7th Generation , 4GB DDR4, 1TB 5400RPM Hard Drive, Intel HD Graphics 620, Windows 10 Home), Obsidian Black",
            "seller": "Acer",
            "wholePrice": "349",
            "priceFraction": "99",
            "stock": 3,
            "star": 3,
            "starCount": 3525,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-E5-575-33BM-15-6-Inch-Processor-Generation/dp/B01K1IO3QW/ref=sr_1_3?s=electronics&ie=UTF8&qid=1499124890&sr=1-3&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "1000 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i3"
                }
            ],
            "price": 349.99,
            "shipping": 3.99
        },
        {
            "key": "B01LD4MGY4",
            "category": "laptop",
            "name": "Acer Aspire E 15 E5-575G-57D4 15.6-Inches Full HD Notebook (i5-7200U, 8GB DDR4 SDRAM, 256GB SSD, Windows 10 Home), Obsidian Black",
            "seller": "Acer",
            "wholePrice": "579",
            "priceFraction": "99",
            "stock": 49,
            "star": 4,
            "starCount": 4232,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-E5-575G-57D4-15-6-Inches-Notebook-i5-7200U/dp/B01LD4MGY4/ref=sr_1_4?s=electronics&ie=UTF8&qid=1499124890&sr=1-4&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5"
                },
                {
                    "description": "Display Technology",
                    "value": "LED-Lit"
                }
            ],
            "price": 579.99,
            "shipping": 7.99
        },
        {
            "key": "B01M18UZF5",
            "category": "laptop",
            "name": "ASUS ZenBook UX330UA-AH54 13.3-inch Ultra-Slim Laptop (Core i5 Processor, 8GB DDR3, 256GB SSD, Windows 10) With Harman Kardon Audio, Backlit keyboard, Fingerprint Reader",
            "seller": "Asus",
            "wholePrice": "699",
            "priceFraction": "00",
            "stock": 23,
            "star": 4,
            "starCount": 2457,
            "img": "https://images-na.ssl-images-amazon.com/images/I/417yCr3mvYL._AC_US218_.jpg",
            "url": "https://www.amazon.com/UX330UA-AH54-13-3-inch-Ultra-Slim-Processor-Fingerprint/dp/B01M18UZF5/ref=sr_1_5?s=electronics&ie=UTF8&qid=1499124890&sr=1-5&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "13.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "256 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5 7200u"
                }
            ],
            "price": 699,
            "shipping": 3.99
        },
        {
            "key": "B01DBGVB7K",
            "category": "laptop",
            "name": "ASUS Chromebook C202SA-YS02 11.6\" Ruggedized and Water Resistant Design with 180 Degree (Intel Celeron 4 GB, 16GB eMMC, Dark Blue)",
            "seller": "Asus",
            "wholePrice": 220,
            "priceFraction": 49,
            "stock": 54,
            "star": 4,
            "starCount": 2777,
            "img": "https://images-na.ssl-images-amazon.com/images/I/31inMpRxCFL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Chromebook-C202SA-YS02-Ruggedized-Resistant-Celeron/dp/B01DBGVB7K/ref=sr_1_6?s=electronics&ie=UTF8&qid=1499124890&sr=1-6&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "11.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "4 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Chrome"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "16 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "celeron"
                }
            ],
            "price": 220.49,
            "shipping": 3.99
        },
        {
            "key": "B015WXL0C6",
            "category": "laptop",
            "name": "Apple MacBook Air 13.3-Inch Laptop (Intel Core i5 1.6GHz, 128GB Flash, 8GB RAM, OS X El Capitan)",
            "seller": "Apple",
            "wholePrice": "848",
            "priceFraction": "99",
            "stock": 22,
            "star": 4,
            "starCount": 2830,
            "img": "https://images-na.ssl-images-amazon.com/images/I/51GRACqhHbL._AC_US218_.jpg",
            "url": "https://www.amazon.com/Apple-MacBook-13-3-Inch-Laptop-Capitan/dp/B015WXL0C6/ref=sr_1_7?s=electronics&ie=UTF8&qid=1499124890&sr=1-7&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "13.3 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8.0 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Mac OS X"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "128 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5"
                }
            ],
            "price": 848.99,
            "shipping": 7.99
        },
        {
            "key": "B06Y4GZS9C",
            "category": "laptop",
            "name": "Acer Predator Helios 300 Gaming Laptop, Intel Core i7, GeForce GTX 1 060, 15.6\" Full HD, 16GB DDR4, 256GB SSD, G3-571-77QK",
            "seller": "Acer",
            "wholePrice": "1,049",
            "priceFraction": "99",
            "stock": 22,
            "star": 3,
            "starCount": 257,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41v2oytxs9L._AC_US218_.jpg",
            "url": "https://www.amazon.com/Acer-Predator-Helios-GeForce-G3-571-77QK/dp/B06Y4GZS9C/ref=sr_1_8?s=electronics&ie=UTF8&qid=1499124890&sr=1-8&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "16 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10 Home"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i7"
                },
                {
                    "description": "Cpu Model Manufacturer",
                    "value": "Intel"
                }
            ],
            "price": 1,
            "shipping": 7.99
        },
        {
            "key": "B06XJJG4PD",
            "category": "laptop",
            "name": "ASUS P-Series P2540UA-AB51 business standard Laptop, 7th Gen Intel Core i5, 2.5GHz (3M Cache, up to 3.1GHz), FHD Display, 8GB RAM, 1TB HDD, Windows 10 Home, Fingerprint, TPM, 9hrs battery life",
            "seller": "Asus",
            "wholePrice": "499",
            "priceFraction": "00",
            "stock": 35,
            "star": 3,
            "starCount": 599,
            "img": "https://images-na.ssl-images-amazon.com/images/I/41PUHRFGpvL._AC_US218_.jpg",
            "url": "https://www.amazon.com/P2540UA-AB51-business-standard-Display-Fingerprint/dp/B06XJJG4PD/ref=sr_1_9?s=electronics&ie=UTF8&qid=1499124890&sr=1-9&keywords=laptop",
            "features": [
                {
                    "description": "Display Size",
                    "value": "15.6 inches"
                },
                {
                    "description": "Computer Memory Size",
                    "value": "8 GB"
                },
                {
                    "description": "Operating System",
                    "value": "Windows 10"
                },
                {
                    "description": "Hard Disk Size",
                    "value": "1000 GB"
                },
                {
                    "description": "Cpu Model Family",
                    "value": "core i5 7200u"
                }
            ],
            "price": 499,
            "shipping": 7.99
        }
    ]
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd} 
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
                
            </div>
            
            
        </div>
    );
};

export default Shop;
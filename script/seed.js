'use strict'

const db = require('../server/db')
const {User, Product, Order, OrderItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all([
    User.create({
      firstName: 'Gianni',
      lastName: 'LaTange',
      email: 'gianni@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Madison',
      lastName: 'Kneller',
      email: 'madison@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Samantha',
      lastName: 'Jardanowski',
      email: 'sam@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Vivian',
      lastName: 'Xu',
      email: 'vivian@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Patrick',
      lastName: 'Star',
      email: 'underarock@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Robyn',
      lastName: 'Fenty',
      email: 'riri@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Ashlee',
      lastName: 'Fellow',
      email: 'ashlee@email.com',
      password: '123',
      isAdmin: true
    })
  ])

  await Promise.all([
    Product.create({
      name: 'Prada FW1999 Split Boots',
      description: 'Iconic futuristic split sole boot design',
      price: '100.00',
      category: 'shoes',
      imageUrl:
        'https://process.fs.heroine.com/AFb875wTiRuaf060oJed7z/cache=expiry:max/rotate=deg:exif/resize=width:1200,fit:crop/output=quality:70/compress/MfGxhuPbSeCYGiYMO3bR',
      quantity: 0,
      orderId: 1
    }),
    Product.create({
      name: 'Miu Miu FW1999 Fur Tech Bag',
      description: 'Extremely rare runway piece.',
      price: '20.00',
      category: 'accessories',
      imageUrl:
        'https://d2h1pu99sxkfvn.cloudfront.net/b0/12675972/525748506_ji7ltvQ9NP/P0.jpg',
      quantity: 0,
      orderId: 1
    }),
    Product.create({
      name: 'Gaultier Fluid Twill Dress',
      description:
        'This silk twill dress with a micro-check print reminiscent of typical tie patterns is characterized by its austere allure and flowing silhouette with band collar.',
      price: '1000.00',
      category: 'wholebody',
      imageUrl:
        'https://live.staticflickr.com/65535/48302062717_0b80b85e9e_b.jpg',
      quantity: 1,
      orderId: 2,
      onHold: true
    }),
    Product.create({
      name: 'Noritaka Tatehana Ballet Shoes',
      description: 'Pink leather ballerina pointe-style shoes',
      price: '1000.00',
      category: 'shoes',
      imageUrl:
        'https://live.staticflickr.com/65535/49014186342_61220d9aa3_b.jpg',
      quantity: 1,
      orderId: 2,
      onHold: true
    }),
    Product.create({
      name: '18th-Century Guipure Dress',
      description:
        'The dress is made of refined lace with hand-embroidered floral motifs and buttons that illuminate the garment.',
      price: '1000.00',
      category: 'wholebody',
      imageUrl:
        'https://live.staticflickr.com/4786/25918424607_d2377d33a3_b.jpg',
      quantity: 1,
      orderId: 2,
      onHold: true
    }),
    Product.create({
      name: 'Helmut Lang White Bodysuit',
      description: 'Make a statement head to toe.',
      price: '3000.00',
      category: 'wholebody',
      imageUrl:
        'https://live.staticflickr.com/4245/34829438805_89a4de6165_b.jpg',
      quantity: 0,
      orderId: 3
    }),
    Product.create({
      name: 'Rick Owens Boots',
      description: 'Stay warm and in fashion.',
      price: '500.00',
      category: 'shoes',
      imageUrl:
        'https://cdn.rickowens.eu/products/80056/large/RP20F2843LGFLWN_9999__1.jpg?1588690637',
      quantity: 0,
      orderId: 3
    }),
    Product.create({
      name: 'Ganni Dress',
      description:
        "Meet the epitome of party dresses. Boasting a flared design and whimsical rose print, this mini dress from GANNI will turn you into the prettiest one of any event. Now let's have some fun.",
      price: '2000.00',
      category: 'wholebody',
      imageUrl:
        'https://cdn-images.farfetch-contents.com/15/87/78/22/15877822_30100693_1000.jpg',
      quantity: 0,
      orderId: 3
    }),
    Product.create({
      name: 'Collina Strada Shirt',
      description:
        "Florals in spring may be overrated, but they'll always be adored. Made from breathable cotton, the ones on this shirt will make you look great no matter the occasion. It's just too good.",
      price: '200.00',
      category: 'tops',
      imageUrl:
        'https://cdn-images.farfetch-contents.com/15/41/01/91/15410191_30129490_1000.jpg',
      quantity: 0,
      orderId: 3
    }),
    Product.create({
      name: 'Givenchy Hoodie',
      description: 'Black hoodie with reflective band.',
      price: '600.00',
      category: 'tops',
      imageUrl:
        'https://www.givenchy.com/dw/image/v2/BBRT_PRD/on/demandware.static/-/Sites-Givenchy_master/default/dw4f24be96/images/BMJ09030AF001/BMJ09030AF001-02-01.jpg'
    }),
    Product.create({
      name: 'Prada Extreme-Tex Rain Jacket',
      description:
        'A sleek, distinctive design characterizes this rain jacket born from the desire to combine cutting-edge textile technologies with eco-sustainable manufacturing methods.',
      price: '500.00',
      category: 'tops',
      imageUrl:
        'https://www.prada.com/content/dam/pradanux_products/S/SGB/SGB625/1XV1F0342/SGB625_1XV1_F0342_S_202_SLF.png/_jcr_content/renditions/cq5dam.web.white.1200.1500.webp',
      onHold: true,
      orderId: 4
    }),
    Product.create({
      name: 'Rick Owens Light Bonded Bottoms',
      description:
        'Highly waterproof and breathable pants made of Komatsu Matere® fabric.',
      price: '200.00',
      category: 'bottoms',
      imageUrl:
        'https://cdn.rickowens.eu/products/80447/large/RP20F2300QLX_09_40_-1.jpg?1588775617',
      onHold: true,
      orderId: 4
    }),
    Product.create({
      name: 'Rick Owens Performa Boots',
      description:
        'Reinterpreting the classic Chelsea boot, these brushed leather booties are characterized by the rubber welt with an indented motif.',
      price: '900.00',
      category: 'shoes',
      imageUrl:
        'https://cdn.rickowens.eu/products/81425/large/RP20F2884LDE_90_-_1.jpg?1591352033',
      onHold: true,
      orderId: 4
    }),
    Product.create({
      name: 'Prada Sheepskin Coat',
      description:
        'This sheepskin coat is characterized by its striking vintage finish. A frog toggle closure decorates the front of the coat with distinctive shirt-style collar.',
      price: '2000.00',
      category: 'wholebody',
      imageUrl:
        'https://www.prada.com/content/dam/pradanux_products/U/UPS/UPS418/889F0002/UPS418_889_F0002_SLF.png/_jcr_content/renditions/cq5dam.web.white.1200.1500.webp'
    }),
    Product.create({
      name: 'Prada Sable Dress',
      description:
        'Flowing lines moved by the sunray pleats on the skirt define the design of this light sablé dress. The garment with refined three-quarter sleeves and a waist belt in the same fabric has a vibrant floral print.',
      price: '1000.00',
      category: 'wholebody',
      imageUrl:
        'https://www.prada.com/content/dam/pradanux_products/P/P3C/P3C65H/1X5TF0002/P3C65H_1X5T_F0002_S_202_SLF.png/jcr:content/renditions/cq5dam.web.white.2400.3000.webp'
    }),
    Product.create({
      name: 'XULY.Bët (Lamine Kouyaté) Ensemble',
      description: 'Acrylic and nylon, fall 1994, France. ',
      price: '3500.00',
      category: 'wholebody',
      imageUrl:
        'https://live.staticflickr.com/4777/40747846332_98929945a4_b.jpg'
    }),
    Product.create({
      name: 'Baby The Stars Shine Bright Ensemble',
      description: '2009, Japan, museum purchase.',
      price: '200.00',
      category: 'wholebody',
      imageUrl: 'https://live.staticflickr.com/817/41344765111_ea9407e31b_b.jpg'
    }),
    Product.create({
      name: 'Gaultier Madonna Multi Chain Necklace',
      description:
        'The Jean Paul Gaultier Madonna Multi Chain Necklace is a tribute to the iconic figure in haute style. Featuring medallions and charms with the Madonna in pewter and brass, crosses and metal balls all in Gothic style with adjustable chain. French design.',
      price: '100.00',
      category: 'accessories',
      imageUrl: 'https://i1.adis.ws/i/forzieri/jp292713-001-1x-t?$nlpv$'
    })
  ])

  await Promise.all([
    Order.create({
      address: '1234 S Main St, New York, NY',
      status: 'Shipped',
      paymentInfo: '12345678910',
      userId: 6
    }),
    Order.create({
      address: '5678 N Main St, New Orleans, LA',
      status: 'Cart',
      paymentInfo: '12345678910',
      userId: 2
    }),
    Order.create({
      address: '314 Cherry Lane, Detroit, MI',
      status: 'Shipped',
      paymentInfo: '12345678910',
      userId: 3
    }),
    Order.create({
      address: '5325 S Michigan Ave, Chicago IL',
      status: 'Cart',
      paymentInfo: '12345678910',
      userId: 5
    })
  ])

  await Promise.all([
    OrderItem.create({
      orderId: 1,
      productId: 1,
      price: 100.0
    }),
    OrderItem.create({
      orderId: 1,
      productId: 2,
      price: 20.0
    }),
    OrderItem.create({
      orderId: 2,
      productId: 3,
      price: 1000.0
    }),
    OrderItem.create({
      orderId: 2,
      productId: 4,
      price: 1000.0
    }),
    OrderItem.create({
      orderId: 2,
      productId: 5,
      price: 1000.0
    }),
    OrderItem.create({
      orderId: 3,
      productId: 6,
      price: 3000.0
    }),
    OrderItem.create({
      orderId: 3,
      productId: 7,
      price: 500.0
    }),
    OrderItem.create({
      orderId: 3,
      productId: 8,
      price: 2000.0
    }),
    OrderItem.create({
      orderId: 3,
      productId: 9,
      price: 200.0
    }),
    OrderItem.create({
      orderId: 4,
      productId: 10,
      price: 500.0
    }),
    OrderItem.create({
      orderId: 4,
      productId: 11,
      price: 200.0
    }),
    OrderItem.create({
      orderId: 4,
      productId: 12,
      price: 900.0
    })
  ])

  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed

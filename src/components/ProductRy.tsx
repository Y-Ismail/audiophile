// import {useParams, useNavigate} from 'react-router-dom'
// import { useState } from 'react';
// import { Product } from '../types/product';

// export interface Product {
//   id: string;
//   name: string;
//   category: 'headphones' | 'speakers' | 'earphones';
//   price: number;
//   description: string;
//   features: string;
//   inTheBox: Array<{ item: string; quantity: number }>;
//   images: {
//     main: {
//       desktop: string;
//       tablet: string;
//       mobile: string;
//     };
//     gallery: Array<{
//       desktop: string;
//       tablet: string;
//       mobile: string;
//     }>;
//   };
//   relatedProducts: Array<{
//     id: string;
//     name: string;
//     image: {
//       desktop: string;
//       tablet: string;
//       mobile: string;
//     };
//   }>;
// }

// // src/components/ProductDetail.tsx


// interface Props {
//   className?: string;
// }

// const ProductDetail: React.FC<Props> = ({ className }) => {
//   const { id } = useParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);

//     function clsx(...classes: (string | undefined)[]): string {
//         return classes
//             .filter(Boolean)
//             .join(' ')
//             .trim();
//     }

//   return (
//     <div className={clsx('product-detail', className)}>
//       {/* Hero Section */}
//       <section className="product-hero">
//         <picture>
//           <source 
//             srcSet={product?.images.main.desktop} 
//             media="(min-width: 1024px)" 
//           />
//           <source 
//             srcSet={product?.images.main.tablet} 
//             media="(min-width: 768px)" 
//           />
//           <img 
//             src={product?.images.main.mobile} 
//             alt={product?.name} 
//             className="product-image"
//           />
//         </picture>
        
//         <div className="product-info">
//           <h1>{product?.name}</h1>
//           <p className="price">${product?.price}</p>
//           {/* Add to cart button etc */}
//         </div>
//       </section>

//       {/* Features & In The Box */}
//       <section className="product-features">
//         <div className="features">
//           <h2>FEATURES</h2>
//           <p>{product?.features}</p>
//         </div>
        
//         <div className="in-the-box">
//           <h2>IN THE BOX</h2>
//           <ul>
//             {product?.inTheBox.map(item => (
//               <li key={item.item}>
//                 <span className="quantity">{item.quantity}x</span>
//                 <span className="item">{item.item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="product-gallery">
//         {product?.images.gallery.map((image:any, index:any) => (
//           <picture key={index}>
//             <source srcSet={image.desktop} media="(min-width: 1024px)" />
//             <source srcSet={image.tablet} media="(min-width: 768px)" />
//             <img src={image.mobile} alt={`Gallery ${index + 1}`} />
//           </picture>
//         ))}
//       </section>

//       {/* Related Products */}
//       <section className="related-products">
//         <h2>YOU MAY ALSO LIKE</h2>
//         <div className="products-grid">
//           {product?.relatedProducts.map(related => (
//             <div key={related.id} className="related-product">
//               <picture>
//                 <source srcSet={related.image.desktop} media="(min-width: 1024px)" />
//                 <source srcSet={related.image.tablet} media="(min-width: 768px)" />
//                 <img src={related.image.mobile} alt={related.name} />
//               </picture>
//               <h3>{related.name}</h3>
//               <button onClick={() => navigate(`/product/${related.id}`)}>
//                 SEE PRODUCT
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };
// export default ProductDetail;
// // function ProductDetail(props:any){
// //     return (
// //         <>
// //         <div>
// //             <div></div>
// //             <div></div>
// //         </div>

// //         <div>
// //             <h2></h2>
// //             <article></article>
// //             <h2></h2>
// //             <ul>
// //                 <li></li>
// //             </ul>

// //         </div>

// //         <div>
// //             <div>
// //                 <img />
// //                 <img />
// //             </div>
// //             <div></div>
// //         </div>

// //         <h2>You may also like</h2>


// //         </>
// //     )
// // }

 export default ProductDetail;


import React from 'react'
// images called 
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product, products }) => {

    // make it easier to call instead product.image
    const { image, name, details, price } = product;

  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])} />
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback:'blocking'
    }
 }

// from index.js but changing it a little for product page
// using getStaticProps to pre-render page

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
      props: { products, product }
    }
  }

export default ProductDetails
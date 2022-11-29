// importing sanity client as well as other things
// from sanity-client
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'f4q1h5xm',
    dataset: 'production',
    apiVersion: '2022-11-17',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// need to be able to use sanity images so use
const builder = imageUrlBuilder(client);

// exporting images ** call urlFor **
export const urlFor = (source) => builder.image(source);
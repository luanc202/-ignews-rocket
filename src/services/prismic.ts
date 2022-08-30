import * as prismic from '@prismicio/client'

const endpoint = prismic.getRepositoryEndpoint(process.env.PRISMIC_ENDPOINT);

export function getPrismicClient(req?: unknown) {
    const client = prismic.createClient(endpoint, {
        accessToken: process.env.PRISMIC_ACESS_TOKEN,
    });
    client.enableAutoPreviewsFromReq(req);
    return client;
}
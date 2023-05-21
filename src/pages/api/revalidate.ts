const crypto = require('crypto');

export default async function handler(req: any, res: any) {
    const {
        method,
        body: { full_slug },
    } = req;
    const webhookSignature = req.headers['webhook-signature'];

    if (method !== 'POST') {
        return req.status(405).send('Method Not Allowed');
    }

    const webhookSecret = process.env.REVALIDATION_TOKEN;

    const bodyHmac = crypto
        .createHmac('sha1', webhookSecret)
        .update(JSON.stringify(req.body))
        .digest('hex');

    if (webhookSignature !== bodyHmac) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        const revalidationRequests = [await res.revalidate(`/${full_slug}`)];

        await Promise.all(revalidationRequests);
        return res.status(200).json({ revalidated: true });
    } catch (err) {
        return res.status(500).send('Error revalidating');
    }
}
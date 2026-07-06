import { createHmac, timingSafeEqual } from "crypto";

export class WebhookUtils {
  static verifySignature(headerSignature:string,secret:string,rawBody:string|Buffer) : boolean {
    const [algo, signature] = headerSignature.split('=');
    if (algo !== 'sha256') return false;
    const expected = createHmac('sha256', secret).update(rawBody).digest('hex');
    return timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expected, 'hex'));
  }
}
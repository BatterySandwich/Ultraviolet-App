export function addSecurityHeaders(fastify) {
  fastify.addHook('onSend', (request, reply, payload, done) => {
    reply.header('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    reply.header('X-Content-Type-Options', 'nosniff');
    reply.header('X-Frame-Options', 'DENY');
    reply.header('X-XSS-Protection', '1; mode=block');
    reply.header('Referrer-Policy', 'strict-origin-when-cross-origin');
    // Optionally add Content-Security-Policy or others as needed
    done();
  });
}

'use strict';

exports.parse = function parse(request) {
    var operationId = request.param('messageId');
    console.info({ type: 'request', operationId: operationId, query: request.query, body: request.body});
    return {
        userId: request.param('msisdn'),
        operationId: operationId,
        content: request.param('text')
    };
}
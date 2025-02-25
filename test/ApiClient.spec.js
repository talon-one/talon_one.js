// ApiClient.spec.js


import ApiClient from '../src/ApiClient.js';
import nock from 'nock';
import assert from 'assert';


// Extended ApiClient class
class ExtendedApiClient extends ApiClient {
    constructor() {
        super();
    }


    wrapperMethod(path, method) {
        return this.callApi(
            path,
            method,
            {},
            {},
            {},
            {},
            null,
            [],
            ['application/json'],
            ['application/json'],
            'Object'
        );
    }
}


describe('ApiClient and ExtendedApiClient', function () {
    // Set timeout for this suite
    this.timeout(5000);


    let apiClient;
    let extendedApiClient;


    beforeEach(() => {
        apiClient = new ApiClient();
        extendedApiClient = new ExtendedApiClient();
        nock.disableNetConnect();
    });


    afterEach(() => {
        nock.cleanAll();
        nock.enableNetConnect();
    });


    it('ApiClient callApi should handle request cancellation', async function () {
        const path = '/test';
        const method = 'GET';
        const mockResponse = { data: 'test data' };


        // Create mock with request tracking
        const scope = nock(apiClient.basePath)
            .get(path)
            .delay(3000)
            .reply(200, mockResponse);


        // Log initial pending mocks
        console.log('Pending mocks before request:', nock.pendingMocks());


        const promise = apiClient.callApi(
            path,
            method,
            {},
            {},
            {},
            {},
            null,
            [],
            ['application/json'],
            ['application/json'],
            'Object'
        );


        // Cancel and verify request state
        promise.cancel();


        // Log final state of pending mocks
        console.log('Pending mocks after cancel:', nock.pendingMocks());


        try {
            await promise;
            assert.fail('Promise should have been rejected');
        } catch (error) {
            console.log('Caught error:', error);
            //Why Verify request was actually pending when cancelled:
            //If mock is still in activeMocks, request hadn't completed
            //If mock is gone, request completed before cancellation
            //Proves cancellation happened during request, not after
            assert.ok(scope.activeMocks().length > 0, 'Request should have been pending when cancelled');


            // Verify it was actually cancelled
            assert.ok(error.error, 'Should have error object');
            assert.strictEqual(error.error.code, 'ABORTED');
            assert.ok(error.error.message && error.error.message.includes('aborted'),
                'Should have aborted message');
        }
    });


    it('ApiClient callApi should complete successfully when not canceled', async function () {
        const path = '/test-complete';
        const method = 'GET';
        const mockResponse = { data: 'test data' };


        // Create mock with shorter delay
        const scope = nock(apiClient.basePath)
            .get(path)
            .delay(50)  // Short delay to ensure it completes
            .reply(200, mockResponse);


        // Log initial pending mocks
        console.log('Pending mocks before request:', nock.pendingMocks());


        const promise = apiClient.callApi(
            path,
            method,
            {},
            {},
            {},
            {},
            null,
            [],
            ['application/json'],
            ['application/json'],
            'Object'
        );


        try {
            const result = await promise;
            // Verify successful completion
            assert.ok(result.data, 'Should have response data');
            assert.deepStrictEqual(result.data, mockResponse);
            // Verify request was completed
            assert.strictEqual(scope.activeMocks().length, 0, 'Request should have completed');
        } catch (error) {
            assert.fail('Promise should not have been rejected: ' + error.message);
        }
    });


    it('ExtendedApiClient wrapperMethod should handle request cancellation', async function () {
        const path = '/extended-test';
        const method = 'GET';
        const mockResponse = { data: 'extended test data' };


        const scope = nock(extendedApiClient.basePath)
            .get(path)
            .delay(3000)
            .reply(200, mockResponse);




        // Log initial pending mocks
        console.log('Pending mocks before request:', nock.pendingMocks());


        const promise = extendedApiClient.wrapperMethod(path, method);


        promise.cancel();


        // Log final state of pending mocks
        console.log('Pending mocks after cancel:', nock.pendingMocks());


        // original method is "promise.then", but it should be "await promise"
        // to avoid breaking changes, I kept the original method request.end
        // using then will call request.end twice, which will cause an error
        try {
            await promise;
            assert.fail('Promise should have been rejected');
        } catch (error) {
            console.log('Error:', error);
            // Verify request was pending when cancelled
            assert.ok(scope.activeMocks().length > 0, 'Request should have been pending when cancelled');
            // Verify it was actually cancelled
            assert.ok(error.error, 'Should have error object');
            assert.strictEqual(error.error.code, 'ABORTED');
            assert.ok(error.error.message && error.error.message.includes('aborted'),
                'Should have aborted message');
        }
    });


    it('ApiClient callApi should handle custom abort callback', async function () {
        const path = '/test-callback';
        const method = 'GET';
        const mockResponse = { data: 'test data' };


        // Create mock with delay
        const scope = nock(apiClient.basePath)
            .get(path)
            .delay(3000)
            .reply(200, mockResponse);


        // Track callback execution
        let callbackExecuted = false;
        const abortCallback = (reject) => {
            callbackExecuted = true;
            console.log('Custom abort callback executed');
            reject({ error: { code: 'CUSTOM_ABORTED', message: 'Request aborted' } });
        };


        const promise = apiClient.callApi(
            path,
            method,
            {},
            {},
            {},
            {},
            null,
            [],
            ['application/json'],
            ['application/json'],
            'Object',
            null,
            abortCallback
        );


        // Log initial state
        console.log('Pending mocks before cancel:', nock.pendingMocks());


        // Cancel request
        console.log('Calling cancel');
        promise.cancel();


        // Log final state
        console.log('Pending mocks after cancel:', nock.pendingMocks());


        try {
            await promise;
            assert.fail('Promise should have been rejected');
        } catch (error) {
            console.log('Caught error:', error);
            // Verify callback was executed
            assert.ok(callbackExecuted, 'Abort callback should have been executed');
            // Verify request was pending
            assert.ok(scope.activeMocks().length > 0, 'Request should have been pending when cancelled');
            // Verify standard abort handling
            assert.ok(error.error, 'Should have error object');
            assert.strictEqual(error.error.code, 'CUSTOM_ABORTED');
            assert.ok(error.error.message && error.error.message.includes('aborted'),
                'Should have aborted message');
        }
    });


    it('should handle cancel after request error', async function () {
        const path = '/test-error';
        const method = 'GET';


        const scope = nock(apiClient.basePath)
            .get(path)
            .delay(3000)
            .replyWithError('Network error');


        // give time to nock to intercept the request
        await new Promise(resolve => setTimeout(resolve, 200));


        const promise = apiClient.callApi(
            path, method, {}, {}, {}, {}, null, [],
            ['application/json'], ['application/json'], 'Object'
        );


        promise.cancel();


        try {
            await promise;
            assert.fail('Promise should have been rejected');
        } catch (error) {
            assert.ok(error.error, 'Should have error object');
            assert.ok(scope.activeMocks().length > 0, 'Request should have been pending when cancelled');
        }
    });


    it('should ignore cancel on completed request', async function () {
        const path = '/test-complete';
        const method = 'GET';
        const mockResponse = { data: 'test data' };


        const scope = nock(apiClient.basePath)
            .get(path)
            .reply(200, mockResponse); // No delay


        // time to nock to intercept the request
        await new Promise(resolve => setTimeout(resolve, 100));


        const promise = apiClient.callApi(
            path, method, {}, {}, {}, {}, null, [],
            ['application/json'], ['application/json'], 'Object'
        );


        // Wait for request to complete
        await new Promise(resolve => setTimeout(resolve, 100));


        const result = await promise;
        promise.cancel(); // Cancel after completion


        assert.ok(result.data);
        assert.deepStrictEqual(result.data, mockResponse);
        assert.strictEqual(scope.activeMocks().length, 0);
    });


    it('should handle multiple cancel calls', async function () {
        const path = '/test-multiple-cancel';
        const method = 'GET';


        const scope = nock(apiClient.basePath)
            .get(path)
            .delay(1000)
            .reply(200, {});


        // give time to nock to intercept the request
        await new Promise(resolve => setTimeout(resolve, 200));


        const promise = apiClient.callApi(
            path, method, {}, {}, {}, {}, null, [],
            ['application/json'], ['application/json'], 'Object',
        );


        console.log('Pending mocks before first cancel:', nock.pendingMocks());


        promise.cancel();


        console.log('Pending mocks after first cancel:', nock.pendingMocks());


        promise.cancel(); // Second cancel call


        try {
            await promise;
            assert.fail('Promise should have been rejected');
        } catch (error) {
            assert.strictEqual(error.error.code, 'ABORTED');
            assert.ok(scope.activeMocks().length > 0, 'Request should have been pending when cancelled');
        }
    });
});
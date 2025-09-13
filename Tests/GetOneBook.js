pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const response = pm.response.json();


pm.test("Is in Stock", function () {
    pm.expect(response['current-stock']).to.be.above(1);
});


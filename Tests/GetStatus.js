pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const response = pm.response.json();

console.log(response['status']);

pm.test("Status should be OK", () => {
    pm.expect(response.status).to.eql("OK");
});


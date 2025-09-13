pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const response = pm.response.json();

const nonFictionBooks = response.filter((book) => book.available === true);


const book = nonFictionBooks[0];

if (book) {
    pm.globals.set("bookId", book.id);
}

pm.test("Book found", () => {
    pm.expect(book).to.be.an('object');
    pm.expect(book.available).to.be.true;
    pm.expect(book.type).to.be.eql("non-fiction");
});


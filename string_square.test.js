const string_square=require("./string_square");
const fetch=require("node-fetch");

test("Void test", () => {
    expect (string_square().result).toBe(-1)
});

test("Nomal test", () => {
    expect (string_square("abc").result).toBe(9)
});

test("Number test", () => {
    expect (string_square(-5).result).toBe(-1)
});

test("Empty String test", () => {
    expect (string_square("").result).toBe(0)
});

test("Empty String test", () => {
    expect (string_square("").result).toBe(0)
});

test("null test", () => {
    expect (string_square(null).result).toBe(-1)
});

test("undefined test", () => {
    expect (string_square(undefined).result).toBe(-1)
});

test("object test", () => {
    expect (string_square([0, "abc"]).result).toBe(-1)
});

test("fetch test Normal String", () => {
    return fetch("https://simulazione-05-12.herokuapp.com/square?string=abc")
	.then(res => {
	    expect(res.status).toBe(200)
	    return res.json()
	})
	.then(resBody => {
	    expect(resBody.result).toBe(9)
	})
});

test("fetch test Empty String", () => {
    return fetch("https://simulazione-05-12.herokuapp.com/square?string=")
	.then(res => {
	    expect(res.status).toBe(200)
	    return res.json()
	})
	.then(resBody => {
	    expect(resBody.result).toBe(0)
	})
});

test("fetch test Empty String", () => {
    return fetch("https://simulazione-05-12.herokuapp.com/square?edjhvcbyfrjh=abc")
	.then(res => {
	    expect(res.status).toBe(200)
	    return res.json()
	})
	.then(resBody => {
	    expect(resBody.result).toBe(-1)
	})
});

test("fetch test Empty String", () => {
    return fetch("https://simulazione-05-12.herokuapp.com/square")
	.then(res => {
	    expect(res.status).toBe(200)
	    return res.json()
	})
	.then(resBody => {
	    expect(resBody.result).toBe(-1)
	})
});

test("fetch test Empty String", () => {
    return fetch("https://simulazione-05-12.herokuapp.com/square?string=a b c")
	.then(res => {
	    expect(res.status).toBe(200)
	    return res.json()
	})
	.then(resBody => {
	    expect(resBody.result).toBe(25)
	})
});


test( "testing hello world function", function() {
 var result = helloWorld();
    equal(result, "hello world");
});
test( "testing hello_uppercase world function", function() {
 var result = hello_uppercase("lindani");
    equal(result, "Hello LINDANI!");
});
test("testing hello_joe function", function(){
    var result = hello_joe("lindani");
    equal(result, "Hello lindani");
});

test("testing hell0_joe function using joe", function(assert){
    var result = hello_joe("joe");
    equal(result, "hello!");
});
test("testing hello world function using bob", function(assert){
    var result = hello_joe("bob");
    equal(result, "hello!");
});
test("testing number_list function", function(assert){
    var result = number_list(6);
    equal(result.toString(), [1,2,3,4,5,6].toString());
});
test("testing hello_sum function", function(assert){
    var result = number_sum(6);
    equal(result.toString(), [21].toString());
});

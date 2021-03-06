
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
test("testing length function", function(assert){
    var result = length("lindani");
    equal(result, 7);
});
test("testing uppercase function", function(assert){
    var result = uppercase("lindani");
    equal(result, "LINDANI");
});

test("testing reverseName function", function(assert){
    var result = reverseName("lindani");
    equal(result, "inadnil");
});
test("testing hello_list function", function(assert){
    var result = hello_list(1);
    equal(result, "hello world");
});
test("testing count_words function", function(assert){
    var result = count_words("I love soccer");
    equal(result, 3);
});
test("testing sum_words function", function(assert){
    var result = sum_words("I love soccer");
    equal(result, 11);
});
test("testing longest_word function", function(assert){
    var result = longest_word("I love soccer");
    equal(result, "soccer");
});
test("testing shortest_word function", function(assert){
    var result = shortest_word("I love soccer");
    equal(result, "I");
});

test("testing word_length function for average word length rounded up & down", function(assert){
    var result = word_length("I love soccer");
    equal(result, "Lower average is 3 and Upper average is 4");
});



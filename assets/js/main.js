const colors=[
    "#00d9e9","#e90084","#f65858","#eeff00","#04ff00","#e646ff"
]

const updateColor =()=>{
    const color = Math.floor(Math.random() * colors.length)
    $("body , #new-quote, #tweet-quote").css("background",`linear-gradient(${colors[color]}, white)`)
    $("#text").css("color",colors[color])
}

const updateQuote =()=>{
  $.ajax({
    url: "./assets/json/quotes.json",
    success: function (response) {
      const quote = Math.floor(Math.random() * response.quotes.length)
      console.log(quote)
      const final = response.quotes[quote]
      $("#text").html(final.quote);
      $("#author").html(final.author)
      const url = encodeURI(`https://twitter.com/intent/tweet?text="${final.quote}" -${final.author}`)
      $("#tweet-quote").attr("href", url);
    },
    error: function (){
      $text("text").html("Fail to load the quote, please try again!")
    } 
  });
}



updateColor()
updateQuote()
$("#new-quote").click(function (e) { 
    e.preventDefault();
    updateColor()
    updateQuote()
});






const url = "https://api.coinlore.net/api/tickers/";

$(document).ready(function () {
  setInterval(function () {
    $.ajax({
      type: "GET",
      url: url,
      success: function (response) {
        $(".information").empty();
        const alldata = response.data;
        const title = "<h1>Crypto currency prices </h1> <br/>";
        $(".information").append(title);
        alldata.forEach((item) => {
          html = `
          <br/>
           <div class="card bg-dark text-white">
           <div class="card-header">
           <h3>${item.name}</h3>
           </div>
           <div class="card-body">
           <p>ID : ${item.id}</p>
           <p>Market Cap : $ ${item.market_cap_usd}</p>
           <p>Name : ${item.name}</p>
           <p>NameId : ${item.nameid}</p>
           <p>Rank : ${item.rank}</p>
           <p>Symbol : ${item.symbol}</p>
           <p>Percent Change 1h  : ${item.percent_change_1h}%</p>
           <p>Percent Change 7d  : ${item.percent_change_7d}%</p>
           <p>Percent Change 24h :  ${item.percent_change_24h}%</p>
           </div>
           </div>
           <br/><br/>
          `;
          $(".information").append(html);
        });
      },
      error: function (response) {
        alert("An error occured");
      },
    });
  }, 1000);
});

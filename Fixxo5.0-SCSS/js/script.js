fetch('https://kyh-net22.azurewebsites.net/api/products/%7Btag%7D')
.then(Response =>Response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
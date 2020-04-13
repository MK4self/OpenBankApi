const config = require('../SharedCode/config');
const CosmosClient = require('@azure/cosmos').CosmosClient;
const endpoint = config.endpoint;
const key = config.key;
const client = new CosmosClient({ endpoint, key });
module.exports = async function (context, req) {
    try{
        var productid = context.bindingData.productid;
        const querySpec = {
            query: "Select * From Products P WHERE P.data.productId = '" + productid + "'"
        };
        const {resources:results} = await client.database(config.databaseId).container(config.containerId).items.query(querySpec.query).fetchAll();
            context.res = {
                headers:{"content-type": "application/json"},
                body: JSON.stringify(results),
                status:200
                //resources
            };
    }
    catch(e){
            context.res={
                headers:{"content-type": "application/json"},
                    body: 'Internal server Error',
                    status:400
            
        };
    }
    finally{

    };
    
  
};
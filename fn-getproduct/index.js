const config = require('../SharedCode/config');
const CosmosClient = require('@azure/cosmos').CosmosClient;
const endpoint = config.endpoint;
const key = config.key;
const client = new CosmosClient({ endpoint, key });
module.exports = async function (context, req) {
    try{
        var productid=context.bindingData.productid;
        const querySpec = {
            query: "SELECT * FROM PRODUCTS P WHERE P.data.productid ='"+productid+"'"
        };
        const {resources} = await client.database(config.databaseId).container(config.containerId).items.query(querySpec).fetchAll();
            context.res = {
                headers:{"content-type": "application/json"},
                body: JSON.stringify(resources),
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
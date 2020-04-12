const config = {
    endpoint: "https://cosmos-acc-openbankingapi.documents.azure.com:443/",
    key: "RVwew5IiEGy3ktTIx8ikgtuWtGibnjLuZNxVg9BFnRPo8vR8O3QJTIRexSxMVuwfdisqAgERh3WhBPdXfsuWkQ==",
    databaseId: "cosmos-db-openbankingapi",
    containerId: "products",
    partitionKey: { kind: "Hash", paths: ["/Type"] }
  };
  
  module.exports = config;
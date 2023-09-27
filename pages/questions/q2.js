export default function q2() {
  return <h2 className={`mb-3 text-2xl font-semibold`} style={{ whiteSpace: "pre-line" }}>
  {"Question: Decribe how you solved a challenge or techinal issue that you faced in a previous role. How did you determine that your solution was successful? <br/> <br/> Answer: A challenge I helped with recently (in a support role) was to help a customer find out why they are missing APM data in a monitoring application. <br/> First, I helped the customer to understand if the data was present in the application, but lost in their UI. We did this via running a query/aggregation across their environment, looking for all instrumented services. We found the service was not present, meaning the data really was missing. <br/> Knowing that the data was missing, we began to look upstream for answers and determined the customers APM server receiving this data was not able to hand data off to a backend database application. This was causing the APM component queue to fill, and no APM data to be ingested. <br/> We resolved the comminication issue between components (bad credentials) and began to see APM data flowing as expected afterwards.<br/> I know my solution was successful because the customer was able to view the data in question afterward and verified everything was copacetic.".split("<br/>").join("\n")}
  </h2>
  ;
}
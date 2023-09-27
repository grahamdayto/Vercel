export default function q4() {
  return <h2 className={`mb-3 text-2xl font-semibold`} style={{ whiteSpace: "pre-line" }}>
  {"Question: When would you choose to use edge functions, serverless functions, or edge middleware <br/> <br/> Answer: I am over the three hours so going to take a shot in the dark on this one (I don't know the differences between these items) <br/> This will depend on the customer and exactly what they're trying to do with Vercel. Do they have staff to manage an on-prem solution? Do they have money to throw at a serverless solution that they don't need to handle themselves? Is the data they're working with sensitive? Is it acceptable to route data through an online component? Understanding customer needs and what information processing standards they need to obey would be my first step here".split("<br/>").join("\n")}
  </h2>
  ;
}
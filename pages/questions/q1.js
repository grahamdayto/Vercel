export default function q1() {
  return <h2 className={`mb-3 text-2xl font-semibold`} style={{ whiteSpace: "pre-line" }}>
  {"Question: What do you want to learn or do more of at work? <br/> <br/> Answer: I'd like to become well acquainted with development and containerization, as I see those as being future-proof and valuable things to learn.  I'd like to help more customers who are 'stuck' rather then broken or 'down'.".split("<br/>").join("\n")}
  </h2>
  ;
}
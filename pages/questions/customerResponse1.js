export default function customerReponse1() {
  return <h2 className={`mb-3 text-2xl font-semibold`} style={{ whiteSpace: "pre-line" }}>
  {"Hello customer, thank you for reaching out. My name is Graham, I'll be helping you with case 1234 regarding a build issue you've run into. I understand these things can be incredibly frustrating and I'll admit I am not very familiar with this particular framework; but I do have some time available nearby. Would you be available for a short call to show me the issue and work through it with me? I may not know the answer from the top of my head, but if you can provide me with further details I should be able to find what we need through another engineer or offline resource. Thank you for your patience so far and I hope to speak to you soon.".split("<br/>").join("\n")}
  </h2>
  ;
}
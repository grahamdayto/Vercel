export default function customerReponse3() {
  return <h2 className={`mb-3 text-2xl font-semibold`} style={{ whiteSpace: "pre-line" }}>
  {"Hello customer, thank you for reaching out. My name is Graham, I'll be helping you with case 1432 regarding a way to avoid those pesky web crawlers. Please see our documentation here for a quick example on how to avoid this https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt. You might use \'User-agent: * Disallow: /\' in your configuration to disable all crawlers from the site. I think this will get things taken care of for you, but if you still need a hand with something or have questions don't hesitate to let me know. Thanks and have a good week. <br/>".split("<br/>").join("\n")}
  </h2>
  ;
}
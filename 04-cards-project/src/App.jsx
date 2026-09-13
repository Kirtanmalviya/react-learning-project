import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      company: "Google",
      datePosted: "2 days ago",
      post: "Software Engineer II",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$35/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      company: "Apple",
      datePosted: "3 days ago",
      post: "Software Engineer - iOS",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$42/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      company: "Meta",
      datePosted: "4 days ago",
      post: "Software Engineer - Full Stack",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$45/hour",
      location: "Gurugram, India",
    },
    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      company: "Microsoft",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$40/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      company: "Amazon",
      datePosted: "6 days ago",
      post: "Software Development Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$38/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      company: "Adobe",
      datePosted: "1 week ago",
      post: "Software Development Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$37/hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
      company: "IBM",
      datePosted: "3 days ago",
      post: "Backend Software Developer",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$30/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
      company: "Oracle",
      datePosted: "4 days ago",
      post: "Cloud Software Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$36/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
      company: "Netflix",
      datePosted: "5 days ago",
      post: "Senior Software Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$55/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
      company: "Spotify",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$40/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
      company: "NVIDIA",
      datePosted: "2 days ago",
      post: "Software Engineer - AI",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$43/hour",
      location: "Pune, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=cisco.com&sz=128",
      company: "Cisco",
      datePosted: "3 days ago",
      post: "Software Engineer - Networking",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$35/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
      company: "Uber",
      datePosted: "4 days ago",
      post: "Software Engineer II",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$39/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
      company: "Airbnb",
      datePosted: "5 days ago",
      post: "Software Engineer - Platform",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$44/hour",
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
      company: "Stripe",
      datePosted: "6 days ago",
      post: "Software Engineer - Payments",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$43/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=shopify.com&sz=128",
      company: "Shopify",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$41/hour",
      location: "Remote, India",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=paypal.com&sz=128",
      company: "PayPal",
      datePosted: "3 days ago",
      post: "Software Engineer - APIs",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$34/hour",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=atlassian.com&sz=128",
      company: "Atlassian",
      datePosted: "4 days ago",
      post: "Full Stack Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$42/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=accenture.com&sz=128",
      company: "Accenture",
      datePosted: "1 week ago",
      post: "Application Developer",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$25/hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=goldmansachs.com&sz=128",
      company: "Goldman Sachs",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$38/hour",
      location: "Bengaluru, India",
    },
  ];
  return (
    <div className="parent">
      {jobs.map(function (ele, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={ele.brandLogo}
              company={ele.company}
              datePosted={ele.datePosted}
              post={ele.post}
              tag1={ele.tag1}
              tag2={ele.tag2}
              pay={ele.pay}
              location={ele.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;

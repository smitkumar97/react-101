import React from "react";
import styles from "./card.module.css";
import Card from "./Card";

const CardContainer = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "data:image/jpeg;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA",
    },
    {
      brandLogo:
        "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA",
    },
    {
      brandLogo:
        "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$77/hour",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className={styles.parent}>
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              brandLogo={elem.brandLogo}
              pay={elem.pay}
              tag2={elem.tag2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;

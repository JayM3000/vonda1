export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  hours: {
    days: string;
    hours: string;
  }[];
  about: {
    title: string;
    content: string[];
    image: string;
  };
  socialMedia: {
    platform: string;
    url: string;
  }[];
}

export const restaurantInfo: RestaurantInfo = {
  name: "VONDA'S KITCHEN",
  tagline: "Upscale yet inviting dining experience in Newark, NJ",
  address: {
    street: "183 W. Kinney Street",
    city: "Newark",
    state: "NJ",
    zip: "07103"
  },
  contact: {
    phone: "973-732-4532",
    email: "Vondascatering@gmail.com",
    website: "www.vondaskitchennj.com"
  },
  hours: [
    {
      days: "Wednesday – Friday",
      hours: "09:00 AM – 7:00 PM"
    },
    {
      days: "Saturday – Sunday",
      hours: "09:00 AM – 6:00 PM"
    },
    {
      days: "Monday – Tuesday",
      hours: "Closed"
    }
  ],
  about: {
    title: "ABOUT US",
    content: [
      "Vonda McPherson, the visionary behind VONDA'S KITCHEN, embarked on a remarkable journey from the structured realm of Corporate America to become a celebrated restaurateur, chef, and community pillar in Newark, New Jersey.",
      
      "After years in the corporate world, Vonda discovered her true passion in the culinary arts and boldly traded her executive suit for a chef's apron. This transition wasn't merely a career change—it was the beginning of a mission to bring exceptional dining experiences to her community while honoring the rich culinary traditions she grew up with.",
      
      "Vonda's entrepreneurial spirit led her to establish several successful ventures before VONDA'S KITCHEN. Her catering business, Vonda Catering and Events, quickly gained recognition for its exceptional service and delectable offerings. The success of her BBQ restaurant and The Greenhouse Café further cemented her reputation as a culinary force in Newark.",
      
      "VONDA'S KITCHEN represents the culmination of Vonda's expertise and passion. Every aspect of the restaurant bears her personal touch—from the carefully crafted menu that blends traditional favorites with innovative twists, to the warm, inviting interior design that makes every guest feel at home while enjoying an upscale dining experience.",
      
      "Beyond her business accomplishments, Vonda is deeply committed to the Newark community. She creates employment opportunities, sources ingredients locally when possible, and participates in community initiatives that strengthen the social fabric of the neighborhood she loves.",
      
      "Through VONDA'S KITCHEN, Vonda doesn't just serve food—she serves experiences, memories, and a taste of home elevated through her unique vision. Her journey from corporate executive to beloved restaurateur embodies the power of following one's passion and giving back to the community along the way."
    ],
    image: "/images/vondapicture.jpg"
  },
  socialMedia: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/vondaskitchen"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/vondaskitchen"
    },
    {
      platform: "Twitter",
      url: "https://www.twitter.com/vondaskitchen"
    }
  ]
};

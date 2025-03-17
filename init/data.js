const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
    {
      "title": "Modern Loft in Downtown",
      "description": "Stay in the heart of the city in this stylish loft apartment.",
      "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "price": 1200,
      "location": "New York City",
      "country": "United States"
    },
    {
      "title": "Mountain Cabin Retreat",
      "description": "Escape to the Rockies in this cozy log cabin with panoramic views.",
      "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "price": 180,
      "location": "Rocky Mountains",
      "country": "Canada"
    },
    {
      "title": "Beachfront Villa Paradise",
      "description": "Private white sand beach and infinity pool in tropical Bali.",
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      "price": 850,
      "location": "Bali",
      "country": "Indonesia"
    },
    {
      "title": "Historic Stone Cottage",
      "description": "300-year-old character property with English country garden.",
      "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      "price": 220,
      "location": "Cotswolds",
      "country": "United Kingdom"
    },
    {
      "title": "Alpine Ski Chalet",
      "description": "Slope-side luxury with private sauna and mountain views.",
      "image": "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      "price": 650,
      "location": "Swiss Alps",
      "country": "Switzerland"
    },
    {
      "title": "Tokyo Penthouse Suite",
      "description": "Ultra-modern high-rise with panoramic city skyline views.",
      "image": "https://images.unsplash.com/photo-1493514789931-586cb221d7a7",
      "price": 2000,
      "location": "Tokyo",
      "country": "Japan"
    },
    {
      "title": "Santorini Cave House",
      "description": "Traditional cycladic architecture with private caldera access.",
      "image": "https://images.unsplash.com/photo-1530158956483-82c157bb8e7d",
      "price": 450,
      "location": "Oia",
      "country": "Greece"
    },
    {
      "title": "Rainforest Treehouse",
      "description": "Elevated eco-lodge surrounded by Costa Rican wildlife.",
      "image": "https://images.unsplash.com/photo-1575501265017-6cba6d02536f",
      "price": 300,
      "location": "Monteverde",
      "country": "Costa Rica"
    },
    {
      "title": "Parisian Artist Studio",
      "description": "Charming Montmartre attic with original art deco features.",
      "image": "https://images.unsplash.com/photo-1503174971373-b1f69850bced",
      "price": 280,
      "location": "Paris",
      "country": "France"
    },
    {
      "title": "Patagonian Wilderness Lodge",
      "description": "Remote luxury basecamp for mountain adventures.",
      "image": "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
      "price": 950,
      "location": "Torres del Paine",
      "country": "Chile"
    },
    {
      "title": "Houseboat Haven",
      "description": "Floating home on Amsterdam's historic canals.",
      "image": "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7",
      "price": 350,
      "location": "Amsterdam",
      "country": "Netherlands"
    },
    {
      "title": "Desert Oasis Villa",
      "description": "Private palm grove with pool in Marrakech outskirts.",
      "image": "https://images.unsplash.com/photo-1513628253939-010e64ac66cd",
      "price": 400,
      "location": "Moroccan Desert",
      "country": "Morocco"
    },
    {
      "title": "Tropical Overwater Bungalow",
      "description": "Direct lagoon access in the Maldives' turquoise waters.",
      "image": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      "price": 2500,
      "location": "Malé Atoll",
      "country": "Maldives"
    },
    {
      "title": "Arctic Glass Igloo",
      "description": "Northern Lights viewing from your thermal glass dome.",
      "image": "https://images.unsplash.com/photo-1506535995048-638aa1b62b77",
      "price": 700,
      "location": "Lapland",
      "country": "Finland"
    },
    {
      "title": "Cliffside Aegean Villa",
      "description": "Dramatic sea views from multiple infinity pools.",
      "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
      "price": 1800,
      "location": "Mykonos",
      "country": "Greece"
    },
    {
      "title": "Canadian Lakehouse",
      "description": "Secluded waterfront property with private dock and sauna.",
      "image": "https://images.unsplash.com/photo-1575517111478-7f6afd0973db",
      "price": 320,
      "location": "Muskoka Lakes",
      "country": "Canada"
    },
    {
      "title": "Lisbon Tile Apartment",
      "description": "Traditional azulejo decor in Alfama district.",
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      "price": 130,
      "location": "Lisbon",
      "country": "Portugal"
    },
    {
      "title": "Kyoto Machiya Townhouse",
      "description": "Traditional wooden home near Golden Pavilion.",
      "image": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      "price": 280,
      "location": "Kyoto",
      "country": "Japan"
    },
    {
      "title": "Rio Beach Penthouse",
      "description": "Copacabana frontage with 360° ocean views.",
      "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
      "price": 1500,
      "location": "Rio de Janeiro",
      "country": "Brazil"
    },
    {
      "title": "Venetian Palazzo",
      "description": "Grand canal-facing palace with private boat dock.",
      "image": "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8",
      "price": 2800,
      "location": "Venice",
      "country": "Italy"
    },
    {
      "title": "Himalayan Tea House",
      "description": "Mountain views from traditional Nepalese retreat.",
      "image": "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6",
      "price": 80,
      "location": "Pokhara",
      "country": "Nepal"
    },
    {
      "title": "Sydney Harbour Cottage",
      "description": "Victorian home steps from Opera House.",
      "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "price": 950,
      "location": "The Rocks",
      "country": "Australia"
    },
    {
      "title": "Floating Lake House",
      "description": "Unique waterfront property on crystal-clear Lake Bled.",
      "image": "https://images.unsplash.com/photo-1521405924368-64c5b84bec60",
      "price": 410,
      "location": "Julian Alps",
      "country": "Slovenia"
    },
    {
      "title": "Luxury Safari Tent",
      "description": "Five-star glamping experience in the Maasai Mara reserve.",
      "image": "https://images.unsplash.com/photo-1506535995048-638aa1b62b77",
      "price": 1500,
      "location": "Maasai Mara",
      "country": "Kenya"
    }
];

module.exports = { data: sampleListings };

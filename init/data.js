const sampleListings = [

  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:{url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage"},
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Rustic Countryside Villa",
    description: "Experience countryside living in this beautiful rustic villa surrounded by open fields and fresh air.",
    image: {url:"https://media.istockphoto.com/id/471826199/photo/french-brittany-typical-house.jpg?s=612x612&w=0&k=20&c=Izy6Ms8WytO21jJ2gtuUlylIDl38TMgZYcFZTncFAcM=",
      filename:"listingimage"},
    price: 800,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Indulge in luxury in this stunning penthouse suite, offering panoramic views and world-class amenities.",
    image: {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQ1XmSV602hG-IfZeE5U8-8RRqIwHkBrMCA&s",
      filename:"listingimage"},
    price: 2500,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Charming Historic Home",
    description: "Step back in time with this charming historic home, filled with character and timeless elegance.",
    image: {url:"https://onekindesign.com/wp-content/uploads/2023/07/Traditional-Family-Home-Renovation-Massachusetts-Oak-Hill-Architects-01-1-Kindesign-1024x719.jpg",
      filename:"listingimage"},
    price: 900,
    location: "Charleston",
    country: "United States"
  },
  
  {
    title: "Lakeside Cabin",
    description:
      "Cozy up in this lakeside cabin perfect for a peaceful retreat with beautiful water views.",
    image: {url:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFrZXNpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage"},
    price: 700,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Ski Resort Condo",
    description:
      "Hit the slopes from this modern ski resort condo with all the amenities for an adventurous winter stay.",
    image: {url:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpJTIwcmVzb3J0JTIwY29uZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage"},
    price: 1100,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Desert Glamping Tent",
    description:
      "Experience luxury camping in this fully furnished desert tent with incredible night sky views.",
    image: {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirEjUS4Vn49QZY7ol5lIMAqCsVrnqzYEUMg&s",
      filename:"listingimage"},
    price: 600,
    location: "Sahara",
    country: "Morocco",
  },
  {
    title: "City Center Apartment",
    description:
      "Modern apartment in the heart of the city, close to shops, cafes, and cultural landmarks.",
    image: {url:"https://assets.marketapts.com/assets/converted/CENTRE/images/apartments/photos/8350f8c85ef265a0af78472848d68c5b.jpg.800x600.jpg",
      filename:"listingimage"},
    price: 950,
    location: "Paris",
    country: "France",
  },
  
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {url:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 1500,
      location: "Malibu",
      country: "United States"
    },
    {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 1200,
      location: "New York City",
      country: "United States"
    },
    {
      title: "Rustic Mountain Cabin",
      description: "Unplug and unwind in this secluded mountain cabin surrounded by nature. A perfect escape from city life.",
      image: {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9GMCsPrsO_rXo2mBRxeVPNpo-DcBxfVeLw&s",
        filename:"listingimage"},
        price: 950,
      location: "Aspen",
      country: "United States"
    },
    
    {
      title: "Luxury Villa with Private Pool",
      description: "Indulge in luxury at this spacious villa featuring a private pool, garden, and ocean views.",
      image:{url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 3000,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Charming Countryside Bungalow",
      description: "Relax in this cozy bungalow nestled in the peaceful countryside, ideal for a quiet retreat.",
      image: {url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 800,
      location: "Tuscany",
      country: "Italy"
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description: "Hit the slopes right from your doorstep in this cozy ski chalet, perfect for winter sports lovers.",
      image: {url:"https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 2000,
      location: "Zermatt",
      country: "Switzerland"
    },
    {
      title: "Tropical Jungle Treehouse",
      description: "Experience adventure in this elevated treehouse surrounded by lush jungle and exotic wildlife.",
      image: {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-aXgzgkSRiyrAB3p-Xkq4rxTafKHMXnekA&s",
        filename:"listingimage"},
        price: 1100,
      location: "Bali",
      country: "Indonesia"
    }
    ,
    {
      title: "Urban High-Rise Apartment",
      description: "Sleek and modern apartment located in a luxury high-rise with sweeping city views.",
      image: {url:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 1800,
      location: "Tokyo",
      country: "Japan"
    },
    {
      title: "Desert Adobe Retreat",
      description: "A serene adobe-style home in the desert with breathtaking sunset views and tranquility.",
      image:{url: "https://img.freepik.com/premium-photo/desert-retreat-with-adobe-walls-courtyard-oasis_1029473-415537.jpg",
        filename:"listingimage"},
        price: 1400,
      location: "Sedona",
      country: "United States"
    },
    {
      title: "Historic Canal House",
      description: "Charming home right along the canal with original beams and modern touches.",
      image: {url:"https://media.istockphoto.com/id/1043100380/photo/houses-of-amstardam-netherlands.jpg?s=612x612&w=0&k=20&c=kWdTq5aXmkWMkdjr7s2i4ScHl2DB-aat1h-sF0JMO2g=",
        filename:"listingimage"},
        price: 1700,
      location: "Amsterdam",
      country: "Netherlands"
    },
    {
      title: "Cliffside Ocean View Villa",
      description: "Watch the waves crash from this private cliffside villa with panoramic ocean views.",
      image: {url:"https://thumbs.dreamstime.com/b/modern-cliffside-villa-overlooking-tranquil-ocean-sunset-luxurious-perched-cliff-offers-breathtaking-views-under-vibrant-357485114.jpg",
        filename:"listingimage"},
        price: 2900,
      location: "Big Sur",
      country: "United States"
    },
    
    
    {
      title: "Minimalist Zen Studio",
      description: "A quiet, meditative space with clean lines and natural light, ideal for remote work or rest.",
      image: {url:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 900,
      location: "Kyoto",
      country: "Japan"
    },
    {
      title: "Secluded Forest Cabin",
      description: "Cozy cabin in the woods with a wood-burning stove and starry night skies.",
      image:{url: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 750,
      location: "Portland",
      country: "United States"
    },
    
    {
      title: "Floating Houseboat",
      description: "Sleep on water in this modern, fully equipped houseboat in a peaceful marina.",
      image: {url:"https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 1300,
      location: "Copenhagen",
      country: "Denmark"
    },
    {
      title: "Alpine A-Frame Cabin",
      description: "Quaint A-frame with wood interiors, located in a snowy alpine village.",
      image: {url:"https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 1050,
      location: "Innsbruck",
      country: "Austria"
    },
  
    {
      title: "Artistic Studio with Courtyard",
      description: "Bright studio with bohemian decor and private courtyard, ideal for creatives.",
      image: {url:"https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 950,
      location: "Buenos Aires",
      country: "Argentina"
    },

    {
      title: "Historic Stone Cottage",
      description: "Charming stone cottage with fireplace and antique decor in a medieval village.",
      image: {url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 950,
      location: "Provence",
      country: "France"
    },

    
    {
      title: "Vintage Parisian Apartment",
      description: "Classic Haussmann architecture, parquet floors, and a view of the Eiffel Tower.",
      image: {url:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 2500,
      location: "Paris",
      country: "France"
    },
    {
      title: "Countryside Farmstay",
      description: "Stay on a working farm with fresh produce, animals, and peaceful views.",
      image: {url:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 600,
      location: "Wales",
      country: "United Kingdom"
    },
    {
      title: "Clifftop Yurt",
      description: "Experience off-grid glamping in a scenic clifftop yurt with coastal views.",
      image: {url:"https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=800&q=60",
        filename:"listingimage"},
        price: 780,
      location: "Newfoundland",
      country: "Canada"
    },
   
  
    {
      title: "Architect's Desert Retreat",
      description: "Modern desert hideaway with striking architecture and minimalist interiors.",
      image: {url:"https://images.adsttc.com/media/images/61b8/c5c2/1385/fc46/45bd/083d/newsletter/hdr-adamrouse-9375.jpg?1639499270",
        filename:"listingimage"},
        price: 1650,
      location: "Palm Springs",
      country: "United States"
    },
    {
      title: "Harbourfront Boathouse",
      description: "Classic wooden boathouse with a dock, fishing gear, and scenic harbor views.",
      image: {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOd6WDFiwvEpPyDni86o-lZ7DP9hbZAscqA&s",
        filename:"listingimage"},
        price: 1250,
      location: "Halifax",
      country: "Canada"
    }
    


];

module.exports = sampleListings;

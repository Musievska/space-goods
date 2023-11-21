const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const products = [
    {
        name: "Moon Exploration Guide",
        description: "A comprehensive guide to exploring the Moon, featuring maps and tips.",
        price: 25.00,
        rating: 4.6,
        category: "Space Literature",
        imageUrl: "/images/moon_exploration_guide.jpg"
    },
    {
        name: "Mars Colonization Handbook",
        description: "A handbook detailing the essentials of colonizing Mars.",
        price: 35.00,
        rating: 4.8,
        category: "Space Literature",
        imageUrl: "/images/mars_colonization_handbook.jpg"
    },
    {
        name: "Galactic Encyclopedia",
        description: "An encyclopedia covering the wonders of our galaxy.",
        price: 50.00,
        rating: 5.0,
        category: "Space Literature",
        imageUrl: "/images/galactic_encyclopedia.jpg"
    },
    {
        name: "Rocket Science Handbook",
        description: "A comprehensive handbook on rocket science and space engineering.",
        price: 40.00,
        rating: 4.9,
        category: "Space Literature",
        imageUrl: "/images/rocket_science_handbook.jpg"
    },
    {
        name: "Space Suit Replica",
        description: "A detailed replica of a space suit, great for display or costume.",
        price: 700.00,
        rating: 4.8,
        category: "Space Suits",
        imageUrl: "/images/space_suit_replica.jpg"
    },
    {
        name: "Meteorite Fragment",
        description: "A fragment of a meteorite, a unique and rare collectible.",
        price: 300.00,
        rating: 5.0,
        category: "Space Decor",
        imageUrl: "/images/meteorite_fragment.jpg"
    },
    {
        name: "Alien Life Encyclopedia",
        description: "An encyclopedia exploring the possibilities of extraterrestrial life.",
        price: 55.00,
        rating: 4.6,
        category: "Space Literature",
        imageUrl: "/images/alien_life_encyclopedia.jpg"
    },
    {
        name: "Space Exploration VR Kit",
        description: "A virtual reality kit for experiencing space exploration.",
        price: 250.00,
        rating: 4.7,
        category: "Space Tech",
        imageUrl: "/images/space_exploration_vr_kit.jpg"
    },
    {
        name: "Galactic Map Poster",
        description: "A detailed map of our galaxy, perfect for education and decoration.",
        price: 35.00,
        rating: 4.9,
        category: "Space Decor",
        imageUrl: "/images/galactic_map_poster.jpg"
    },
    {
        name: "Interstellar Travel Guide",
        description: "A speculative guide on interstellar travel and exploration.",
        price: 40.00,
        rating: 4.8,
        category: "Space Literature",
        imageUrl: "/images/interstellar_travel_guide.jpg"
    },
    {
        name: "Space Station Model",
        description: "A detailed model of an international space station.",
        price: 110.00,
        rating: 4.9,
        category: "Space Decor",
        imageUrl: "/images/space_station_model.jpg"
    }
    
];

async function main() {
  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

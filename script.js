
// Modal Elements
const modal = document.getElementById('infoModal');
const closeModal = document.querySelector('.close');
const countryName = document.getElementById('countryName');
const religionInfo = document.getElementById('religionInfo');
const christianityInfo = document.getElementById('christianityInfo');
const uniqueFeatures = document.getElementById('uniqueFeatures');
const funFacts = document.getElementById('funFacts');
const culture = document.getElementById('culture');

// Country Information
const countryData = {
  cameroon: {
    name: 'Cameroon',
    religion: 'Christianity is the most practiced religion, with 70% of the population being Christians.',
    christianityEntry: 'Christianity was introduced by Portuguese missionaries in the 15th century.',
    uniqueFeatures: 'Popular food: Ndolé (bitterleaf stew).',
    funFacts: 'Cameroon is called "Africa in miniature" because of its geological and cultural diversity.',
    culture: 'Cameroon has a diverse culture with over 250 ethnic groups.'
  },
  zimbabwe: {
    name: 'Zimbabwe',
    religion: 'About 84% of the population in Zimbabwe identifies as Christian.',
    christianityEntry: 'Christianity was introduced by European missionaries in the 19th century.',
    uniqueFeatures: 'Popular food: Sadza (a cornmeal staple).',
    funFacts: 'Zimbabwe is home to Victoria Falls, one of the largest waterfalls in the world.',
    culture: 'Zimbabwean culture is a mixture of influences, with strong Shona and Ndebele traditions.'
  },
  'ivory-coast': {
    name: 'Ivory Coast',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes (traditional wrap cloth). Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },
  nepal: {
    name: 'Nepal',
    religion: 'Christianity is a minority religion, comprising around 1.4% of the population.',
    christianityEntry: 'Christianity entered Nepal via Western missionaries in the 1950s.',
    uniqueFeatures: 'Popular food: Dal Bhat (rice and lentil soup).',
    funFacts: 'Nepal is home to eight of the world’s ten highest peaks, including Mount Everest.',
    culture: 'Nepali culture is shaped by Hindu and Buddhist traditions, with unique festivals and practices.'
  },
  'sierra-leone': {
    name: 'Sierra Leone',
    religion: 'Christianity accounts for about 21% of the population.',
    christianityEntry: 'Christianity entered through freed slaves returning from Britain and the Americas in the 18th century.',
    uniqueFeatures: 'Popular food: Cassava leaves and rice.',
    funFacts: 'Sierra Leone is known for its diamond mining and beautiful beaches.',
    culture: 'The culture is a mix of ethnic traditions, with significant Krio influence.'
  },
  kenya: {
    name: 'Kenya',
    religion: 'Christianity is the dominant religion, with about 85% of the population being Christians.',
    christianityEntry: 'Christianity was introduced by European missionaries in the 19th century.',
    uniqueFeatures: 'Popular food: Ugali (maize porridge).',
    funFacts: 'Kenya is known for its wildlife and is home to the Maasai people.',
    culture: 'Kenyan culture is diverse, with over 40 ethnic groups, each with unique customs and traditions.'
  },
  india: {
    name: 'India',
    religion: 'Christianity accounts for about 2.3% of the population.',
    christianityEntry: 'Christianity was introduced by the Apostle Thomas in 52 AD.',
    uniqueFeatures: 'Attire: Saree (for women) and Dhoti (for men). Popular food: Biryani.',
    funFacts: 'India is the birthplace of several major religions, including Hinduism and Buddhism.',
    culture: 'Indian culture is rich in festivals, languages, and traditions, varying across regions.'
  },
  zambia: {
    name: 'Zambia',
    religion: 'Christianity is the official religion, with over 95% of the population being Christians.',
    christianityEntry: 'Christianity was introduced by Scottish missionary David Livingstone in the 19th century.',
    uniqueFeatures: 'Popular food: Nshima (cornmeal porridge).',
    funFacts: 'Zambia is home to Victoria Falls, one of the Seven Natural Wonders of the World.',
    culture: 'Zambian culture is shaped by Bantu traditions, with a focus on family and community.'
  },
  ghana: {
    name: 'Ghana',
    religion: 'Christianity is the largest religion, practiced by 71% of the population.',
    christianityEntry: 'Christianity was introduced by European missionaries in the 15th century.',
    uniqueFeatures: 'Popular attire: Kente cloth. Popular food: Jollof rice.',
    funFacts: 'Ghana was the first African country to gain independence from colonial rule.',
    culture: 'Ghanaian culture is a blend of traditional African customs and Western influences.'
  },
  nigeria: {
    name: 'Nigeria',
    religion: 'Christianity is practiced by about 49% of the population, mainly in the southern regions.',
    christianityEntry: 'Christianity was introduced by Portuguese missionaries in the 15th century.',
    uniqueFeatures: 'Popular food: Jollof rice and Pounded yam.',
    funFacts: 'Nigeria is the most populous country in Africa.',
    culture: 'Nigeria has over 250 ethnic groups, with rich traditions and vibrant cultural practices.'
  },
  togo: {
    name: 'Togo',
    religion: 'Christianity accounts for about 29% of the population.',
    christianityEntry: 'Christianity was introduced by German and French missionaries in the 19th century.',
    uniqueFeatures: 'Popular food: Fufu and groundnut soup.',
    funFacts: 'Togo is one of the world’s largest producers of phosphate.',
    culture: 'Togo’s culture includes traditional music, dance, and craftsmanship from various ethnic groups.'
  },
  rwanda: {
    name: 'Rwanda',
    religion: 'Christianity is the dominant religion, practiced by 93.6% of the population.',
    christianityEntry: 'Christianity was introduced by German and Belgian missionaries in the 19th century.',
    uniqueFeatures: 'Popular food: Isombe (cassava leaves).',
    funFacts: 'Rwanda is known as the "Land of a Thousand Hills" for its mountainous landscape.',
    culture: 'Rwandan culture emphasizes unity and reconciliation, especially after the 1994 genocide.'
  },
  liberia: {
    name: 'Liberia',
    religion: 'Christianity is the predominant religion, with 85.5% of the population being Christians.',
    christianityEntry: 'Christianity entered through freed African American slaves in the 19th century.',
    uniqueFeatures: 'Popular food: Jollof rice and Fufu.',
    funFacts: 'Liberia is Africa’s oldest republic, founded in 1847.',
    culture: 'Liberian culture reflects African American influences, alongside indigenous traditions.'
  },
  usa: {
    name: 'United States of America',
    religion: 'Christianity is the largest religion, with 65% of Americans identifying as Christians.',
    christianityEntry: 'Christianity was brought by European colonists in the 16th and 17th centuries.',
    uniqueFeatures: 'Popular food: Burgers, apple pie.',
    funFacts: 'The USA has the third-largest population in the world.',
    culture: 'American culture is a melting pot of diverse traditions and practices from around the globe.'
  },
  jamaica: {
    name: 'Jamaica',
    religion: 'Christianity is practiced by over 60% of the population.',
    christianityEntry: 'Christianity was introduced by Spanish and British colonists in the 16th century.',
    uniqueFeatures: 'Popular food: Jerk chicken and ackee with saltfish.',
    funFacts: 'Jamaica is known for its reggae music and being the home of Bob Marley.',
    culture: 'Jamaican culture is vibrant, with influences from African, European, and indigenous Taino roots.'
  },
  uganda: {
    name: 'Uganda',
    religion: 'Christianity is practiced by 84% of the population.',
    christianityEntry: 'Christianity was introduced by British missionaries in the 19th century.',
    uniqueFeatures: 'Popular food: Matoke (steamed bananas).',
    funFacts: 'Uganda is home to the source of the Nile River.',
    culture: 'Ugandan culture is a blend of indigenous customs, with over 50 ethnic groups.'
  },
  'burkina-faso': {
    name: 'Burkina Faso',
    religion: 'Christianity is practiced by about 24% of the population.',
    christianityEntry: 'Christianity was introduced by French missionaries during the colonial period.',
    uniqueFeatures: 'Popular food: Tô (millet or sorghum porridge).',
    funFacts: 'Burkina Faso hosts one of Africa’s largest film festivals, FESPACO.',
    culture: 'Burkinabe culture includes traditional music, dance, and storytelling.'
  },
  'south-africa': {
    name: 'South Africa',
    religion: 'Christianity is practiced by about 80% of the population.',
    christianityEntry: 'Christianity was introduced by Dutch settlers in the 17th century.',
    uniqueFeatures: 'Popular food: Biltong (dried meat).',
    funFacts: 'South Africa has 11 official languages.',
    culture: 'South Africa’s culture is diverse, with influences from various ethnic groups and colonial history.'
  },
  congo: {
    name: 'Democratic Republic of the Congo',
    religion: 'Christianity is the dominant religion, with over 90% of the population being Christians.',
    christianityEntry: 'Christianity was introduced by Portuguese missionaries in the 15th century and spread during the Belgian colonial period.',
    uniqueFeatures: 'Traditional attire: Liputa (colorful printed fabric). Popular food: Fufu and Pondu (cassava leaves).',
    funFacts: 'The DRC is home to the second-largest rainforest in the world, after the Amazon.',
    culture: 'Congolese culture is known for its vibrant music and dance, including genres like Soukous and Rumba.'
  }

};


// Open modal when a flag is clicked
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    const country = this.getAttribute('data-country');
    if (countryData[country]) {
      const data = countryData[country];
      countryName.textContent = data.name;
      religionInfo.textContent = `Most dominant religion: ${data.religion}`;
      christianityInfo.textContent = `How Christianity started: ${data.christianityEntry}`;
      uniqueFeatures.textContent = `Unique attire/food: ${data.uniqueFeatures}`;
      funFacts.textContent = `Fun facts: ${data.funFacts}`;
      culture.textContent = `Culture: ${data.culture}`;
      modal.style.display = 'flex';
    }
  });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


// Get the carousel and modals
const carousel = document.querySelector('.carousel');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');
const cards = document.querySelectorAll('.card');

// Open modal and stop rotation
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        document.getElementById('modal-' + (index + 1)).style.display = 'flex';
        carousel.style.animationPlayState = 'paused'; // Pause rotation
    });
});

// Close modal and resume rotation
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        closeButton.closest('.modal').style.display = 'none';
        carousel.style.animationPlayState = 'running'; // Resume rotation
    });
});

// Close modal when clicking outside modal content
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            carousel.style.animationPlayState = 'running'; // Resume rotation
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//   const music = document.getElementById('background-music');
//   music.play().catch(error => {
//       console.error("Error playing music:", error);
//       // Handle auto-play restrictions in some browsers
//   });
// });


const music = document.getElementById('background-music');
const musicControlButton = document.getElementById('music-control');

musicControlButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicControlButton.textContent = "Pause Music";
    } else {
        music.pause();
        musicControlButton.textContent = "Play Music";
    }
});


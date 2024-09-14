
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
  // Add more country data for each flag here
  zimbabwe: {
    name: 'Zimbabwe',
    religion: 'About 84% of the population in Zimbabwe identifies as Christian.',
    christianityEntry: 'Christianity was introduced by European missionaries in the 19th century.',
    uniqueFeatures: 'Popular food: Sadza (a cornmeal staple).',
    funFacts: 'Zimbabwe is home to Victoria Falls, one of the largest waterfalls in the world.',
    culture: 'Zimbabwean culture is a mixture of influences, with strong Shona and Ndebele traditions.'
  },
  // More country data (use the same structure)...
  'ivory-coast': {
    name: 'Ivory Coast',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'nepal': {
    name: 'Nepal',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'sierra-leone': {
    name: 'Sierra Leone',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'kenya': {
    name: 'Kenya',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'india': {
    name: 'South Africa',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'zambia': {
    name: 'Zambia',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'ghana': {
    name: 'Ghana',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'nigeria': {
    name: 'Nigeria',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'togo': {
    name: 'Togo',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'rwanda': {
    name: 'Rwanda',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'liberia': {
    name: 'Liberia',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'usa': {
    name: 'United States of America',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'jamaica': {
    name: 'Jamaica',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'uganda': {
    name: 'Uganda',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
  },

  'burkina-faso': {
    name: 'Burkina Faso',
    religion: 'Christianity accounts for about 34% of the population.',
    christianityEntry: 'Christianity entered via French missionaries during the colonial period.',
    uniqueFeatures: 'Attire: Pagnes, a traditional wrap cloth. Food: Alloco (fried plantains).',
    funFacts: 'Ivory Coast is the world’s largest producer of cocoa.',
    culture: 'Ivorian culture reflects both its diverse ethnic makeup and its colonial history.'
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

// LittleLibrary.app — Configuration
// Part of UPD8 GROUP portfolio

const CONFIG = {
  app: {
    name: 'LittleLibrary',
    domain: 'littlelibrary.app',
    tagline: 'Take one. Leave one.',
    subtitle: 'Books, seeds, toys — free, near you.',
    version: '1.0.0',
    powered_by: 'UPD8 GROUP',
    powered_by_url: 'https://upd8.group',
  },
  map: {
    apiKey: 'AIzaSyByuYcj_qjTbjC2sRWx8VmlMLMxELQ3fB8',
    defaultCenter: { lat: -25.2744, lng: 133.7751 }, // Australia centre
    defaultZoom: 5,
    clusterMinZoom: 0,
    clusterMaxZoom: 14,
    markerZoom: 16,
    dataFile: 'littlelibrary-au.json',
    style: [
      { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      { featureType: 'transit', stylers: [{ visibility: 'off' }] },
      { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9dde4' }] },
      { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f0e8' }] },
      { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#e8e2d6' }] },
      { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8a7e6b' }] },
    ],
  },
  categories: {
    street_library: {
      emoji: '📚',
      label: 'Street Libraries',
      color: '#8B5E3C',
      description: 'Take a book, leave a book',
      filterDefault: true,
    },
    public_library: {
      emoji: '🏛️',
      label: 'Public Libraries',
      color: '#2C5F8A',
      description: 'Council libraries with hours & services',
      filterDefault: true,
    },
    seed_library: {
      emoji: '🌱',
      label: 'Seed Libraries & Gardens',
      color: '#4A8B3F',
      description: 'Borrow seeds, grow food, share the harvest',
      filterDefault: true,
    },
    toy_library: {
      emoji: '🧸',
      label: 'Toy Libraries',
      color: '#D4882A',
      description: 'Borrow toys instead of buying them',
      filterDefault: true,
    },
  },
  colours: {
    cream: '#FAF6EE',
    warmWhite: '#FFFDF7',
    woodBrown: '#8B5E3C',
    darkBrown: '#5C3A1E',
    leafGreen: '#4A8B3F',
    softGreen: '#E8F0E4',
    skyBlue: '#2C5F8A',
    softBlue: '#E4EDF5',
    toyOrange: '#D4882A',
    softOrange: '#FDF0E0',
    text: '#3D2E1C',
    textLight: '#7A6B58',
    border: '#E0D7C8',
    cardBg: '#FFFFFF',
  },
  forms: {
    reportName: 'littlelibrary-report',
  },
  portfolio: [
    { name: 'HolyShit.app', url: 'https://holyshit.app', desc: 'Find a toilet' },
    { name: 'BabyShit.app', url: 'https://babyshit.app', desc: 'Find a change table' },
    { name: 'DogBowl.app', url: 'https://dogbowl.app', desc: 'Find water for your dog' },
    { name: 'PublicBBQ.app', url: 'https://publicbbq.app', desc: 'Find a free BBQ' },
    { name: 'EVZap.app', url: 'https://evzap.app', desc: 'Find a charger' },
    { name: 'HelpNear.app', url: 'https://helpnear.app', desc: 'Find support services' },
    { name: 'LittleLibrary.app', url: 'https://littlelibrary.app', desc: 'Find what your community shares' },
  ],
};

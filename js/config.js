/**
 * MH MEDICAL CENTRE - CENTRAL CONFIGURATION OBJECT
 * 
 * Location: N-53, Gali No. 5, Dr. Ambedkar Basti, Maujpur, Delhi – 110053
 * Google Maps: https://www.google.com/maps/place/MH+MEDICAL+CENTRE+N+53+GALI+NO+5+MAUJPR/@28.6879468,77.2703229,17z/
 * Coordinates: 28.6879468, 77.2728978
 * 
 * NOTE FOR CLINIC OWNER / WEBMASTER:
 * Update verified values below. Do not add unverified medical claims or fake credentials.
 */

const clinicConfig = {
  // Brand & Business Information
  name: "MH Medical Centre",
  shortName: "MH Medical",
  logo: "assets/images/logo.png",
  tagline: "Trusted Medical Care in Maujpur, Delhi",
  description: "MH Medical Centre provides accessible medical consultation and patient-focused care in Maujpur, Delhi – 110053.",
  
  // Strict NAP (Name, Address, Phone)
  address: {
    street: "N-53, Gali No. 5, Dr. Ambedkar Basti",
    locality: "Maujpur",
    subDistrict: "Shahdara",
    city: "Delhi",
    postalCode: "110053",
    country: "India",
    countryCode: "IN",
    fullFormatted: "N-53, Gali No. 5, Dr. Ambedkar Basti, Maujpur, Delhi – 110053",
    landmark: "Near Maujpur Metro Station / Gali No. 5"
  },
  
  // Precise Geolocation (from official Google Maps listing)
  coordinates: {
    latitude: 28.6879468,
    longitude: 77.2728978
  },
  
  // Contact & Channels (Verified from Google Listing / Editable)
  contact: {
    // Verified Clinic Phone: +91 98113 85441
    phoneDisplay: "+91 98113 85441",
    phoneTel: "+919811385441",
    
    // WhatsApp Number for appointment requests
    // wa.me format: 919811385441
    whatsappNumber: "919811385441",
    whatsappDisplay: "+91 98113 85441",
    
    // Google Maps official listing link
    googleMapsUrl: "https://www.google.com/maps/place/MH+MEDICAL+CENTRE+N+53+GALI+NO+5+MAUJPR/@28.6879468,77.2703229,17z/",
    googleMapsEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.734789518047!2d77.2703229!3d28.6879468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc8d5069a689%3A0xe54e85aa3ef9a5ba!2sMH%20MEDICAL%20CENTRE%20N%2053%20GALI%20NO%205%20MAUJPR!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  
  // Operating Hours (Subject to clinic confirmation)
  timings: {
    days: "Monday – Saturday",
    morningHours: "09:30 AM – 01:30 PM",
    eveningHours: "05:30 PM – 09:30 PM",
    sunday: "Sunday: Please contact clinic for confirmation",
    note: "Timings may vary on holidays. Please confirm via WhatsApp or call before visiting."
  },
  
  // Doctor Profile (Factual & verified representation only)
  doctor: {
    name: "Dr. Feroz Khan",
    altSpelling: "Dr. Feeroj Khan",
    qualifications: "MBBS",
    designation: "Consultant Physician",
    image: "assets/images/drImage.png",
    registrationNumber: "Pending Registration Verification", // MCI/DMC Reg number
    bio: "Consultant Physician providing patient-first medical evaluations and general healthcare consultations at MH Medical Centre in Maujpur, Delhi.",
    verifiedStatus: "Publicly referenced Consultant Physician. Contact clinic for specific consultation availability."
  },
  
  // Verified/Configurable Consultation Services
  services: [
    {
      id: "general-consultation",
      title: "General Physician Consultation",
      titleHi: "सामान्य चिकित्सक परामर्श",
      description: "Primary evaluation for common illnesses, fever, respiratory discomfort, infections, and general health concerns.",
      descriptionHi: "सामान्य बीमारियों, बुखार, सर्दी-खांसी और स्वास्थ्य संबंधी समस्याओं के लिए प्राथमिक परामर्श।",
      icon: "stethoscope"
    },
    {
      id: "routine-checkup",
      title: "Health Evaluation & Vitals",
      titleHi: "स्वास्थ्य जांच एवं वाइटल्स",
      description: "Routine assessment including blood pressure measurement, pulse check, and general clinical examination.",
      descriptionHi: "ब्लड प्रेशर, पल्स और सामान्य स्वास्थ्य की नियमित जांच एवं मार्गदर्शन।",
      icon: "activity"
    },
    {
      id: "followup-care",
      title: "Follow-up & Treatment Review",
      titleHi: "फॉलो-अप एवं परामर्श समीक्षा",
      description: "Progress monitoring and treatment review for patients following initial consultations and medical advice.",
      descriptionHi: "उपचार के बाद सुधार की समीक्षा और निरंतर स्वास्थ्य मार्गदर्शन।",
      icon: "clipboard"
    },
    {
      id: "preventive-guidance",
      title: "Preventive Health Advice",
      titleHi: "निवारक स्वास्थ्य सलाह",
      description: "Evidence-based health counseling, lifestyle advice, seasonal illness prevention, and hygiene guidance.",
      descriptionHi: "मौसमी बीमारियों से बचाव, जीवनशैली में सुधार और स्वास्थ्य बनाए रखने के लिए मार्गदर्शन।",
      icon: "shield"
    }
  ],
  
  // Gallery Media Items
  gallery: [
    {
      id: "exterior",
      category: "clinic",
      title: "Clinic Entrance & Exterior",
      titleHi: "क्लिनिक का मुख्य द्वार",
      caption: "N-53, Gali No. 5, Dr. Ambedkar Basti, Maujpur",
      image: "assets/images/Clinic_Entrance.png",
      alt: "MH Medical Centre exterior entrance at Gali No 5 Maujpur Delhi"
    },
    {
      id: "reception",
      category: "reception",
      title: "Reception & Enquiry Desk",
      titleHi: "रिसेप्शन एवं पूछताछ काउंटर",
      caption: "Patient registration and token enquiry area",
      image: "assets/images/waiting area.png",
      alt: "MH Medical Centre reception and patient waiting area"
    },
    {
      id: "consultation",
      category: "doctor",
      title: "Doctor Consultation Room",
      titleHi: "डॉक्टर परामर्श कक्ष",
      caption: "Clean, well-equipped room for private patient consultations",
      image: "assets/images/Doctor Consultation Room.png",
      alt: "Doctor consultation desk and examination space at MH Medical Centre"
    },
    {
      id: "facilities",
      category: "facilities",
      title: "Waiting & Care Facilities",
      titleHi: "प्रतीक्षा क्षेत्र एवं सुविधाएं",
      caption: "Comfortable seating and hygienic clinical environment",
      image: "assets/images/waiting area.png",
      alt: "Patient seating and clinical facilities at MH Medical Centre Maujpur"
    },
    {
      id: "video-tour",
      category: "videos",
      title: "Clinic Tour & Walkthrough",
      titleHi: "क्लिनिक वीडियो टूर",
      caption: "Direct video walkthrough of MH Medical Centre",
      videoSrc: "assets/images/MH_medical_video.mp4",
      poster: "assets/images/mh_tour_poster.jpg"
    },
    {
      id: "video-render",
      category: "videos",
      title: "3D Facility Architecture & Render",
      titleHi: "3D आर्किटेक्चर एवं सुविधा टूर",
      caption: "3D visual overview of clinic infrastructure",
      videoSrc: "assets/images/MH medical render 3.mp4",
      poster: "assets/images/mh_render_poster.jpg"
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.clinicConfig = clinicConfig;
}

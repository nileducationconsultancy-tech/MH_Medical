/**
 * MH MEDICAL CENTRE - MAIN JAVASCRIPT ENGINE
 * Vanilla JavaScript, highly optimized, accessible & fast.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Localization
  if (typeof initLanguage === "function") {
    initLanguage();
  }

  // 2. Language Switcher Buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      if (typeof setLanguage === "function") {
        setLanguage(targetLang);
      }
    });
  });

  // 3. Mobile Navigation Drawer Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const header = document.querySelector(".site-header");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("is-active");
      document.body.classList.toggle("nav-open");
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-active");
        document.body.classList.remove("nav-open");
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("is-active")) {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-active");
        document.body.classList.remove("nav-open");
        navToggle.focus();
      }
    });
  }

  // 4. Header Shadow on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header?.classList.add("is-scrolled");
    } else {
      header?.classList.remove("is-scrolled");
    }
  }, { passive: true });

  // 5. Gallery Filter Tabs
  const galleryTabs = document.querySelectorAll(".gallery-tab");
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      galleryTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const filter = tab.getAttribute("data-filter");
      galleryItems.forEach(item => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
          item.classList.remove("is-hidden");
        } else {
          item.style.display = "none";
          item.classList.add("is-hidden");
        }
      });
    });
  });

  // 6. FAQ Accordion with Accessibility
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const answer = btn.nextElementSibling;

      // Close other accordion items for clean UI
      faqQuestions.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          if (otherBtn.nextElementSibling) {
            otherBtn.nextElementSibling.hidden = true;
          }
        }
      });

      btn.setAttribute("aria-expanded", !isExpanded);
      if (answer) {
        answer.hidden = isExpanded;
      }
    });
  });

  // 7. Video Facade Player
  const videoFacade = document.getElementById("video-facade");
  const videoPlayerContainer = document.getElementById("video-player-container");

  if (videoFacade && videoPlayerContainer) {
    videoFacade.addEventListener("click", () => {
      // Lazy load video element or clean walkthrough player
      videoPlayerContainer.innerHTML = `
        <div class="video-responsive-wrapper">
          <div class="video-notice-card">
            <div class="video-notice-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3>MH Medical Centre Video Tour</h3>
            <p>Direct video tour of our clinic in Maujpur. (Owner video can be embedded here as an MP4 or verified YouTube link).</p>
            <div class="video-notice-actions">
              <a href="#location" class="btn btn-primary btn-sm">Get Clinic Directions</a>
              <a href="#appointment" class="btn btn-outline btn-sm">Book Appointment</a>
            </div>
          </div>
        </div>
      `;
    });
  }

  // 8. Appointment Modal Popup System
  const appointmentModal = document.getElementById("appointment-modal");
  const modalCloseBtns = document.querySelectorAll("[data-close-modal]");
  const modalTriggers = document.querySelectorAll('[data-open-modal="appointment"], .open-appointment-modal, a[href="#appointment"]');

  function openAppointmentModal(serviceName = "") {
    if (!appointmentModal) return;
    appointmentModal.hidden = false;
    // Force reflow for smooth transition
    void appointmentModal.offsetWidth;
    appointmentModal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    // Set service prefill if triggered from a service card
    const reasonInput = document.getElementById("modal-visit-reason") || document.getElementById("visit-reason");
    if (reasonInput && serviceName) {
      reasonInput.value = serviceName;
    }

    // Set focus to the first input field
    const firstInput = document.getElementById("modal-patient-name") || document.getElementById("patient-name");
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }

  function closeAppointmentModal() {
    if (!appointmentModal) return;
    appointmentModal.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => {
      appointmentModal.hidden = true;
    }, 220);
  }

  // Attach triggers to all "Book Appointment" buttons
  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const serviceAttr = trigger.getAttribute("data-service-name") || "";
      openAppointmentModal(serviceAttr);
    });
  });

  // Close buttons & Backdrop clicks
  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      closeAppointmentModal();
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && appointmentModal && !appointmentModal.hidden) {
      closeAppointmentModal();
    }
  });

  // 9. Appointment Form Validation & WhatsApp Dispatch (Handles both page and modal forms)
  const forms = [
    {
      form: document.getElementById("appointment-form"),
      feedback: document.getElementById("form-feedback"),
      nameId: "patient-name",
      phoneId: "patient-phone",
      dateId: "preferred-date",
      timeId: "preferred-time",
      reasonId: "visit-reason",
      notesId: "additional-notes"
    },
    {
      form: document.getElementById("modal-appointment-form"),
      feedback: document.getElementById("modal-form-feedback"),
      nameId: "modal-patient-name",
      phoneId: "modal-patient-phone",
      dateId: "modal-preferred-date",
      timeId: "modal-preferred-time",
      reasonId: "modal-visit-reason",
      notesId: "modal-additional-notes"
    }
  ];

  forms.forEach(cfg => {
    if (!cfg.form) return;

    // Set minimum date to today
    const dateInput = document.getElementById(cfg.dateId);
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.setAttribute("min", today);
    }

    cfg.form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (cfg.feedback) {
        cfg.feedback.className = "form-feedback";
        cfg.feedback.textContent = "";
        cfg.feedback.style.display = "none";
      }

      const nameInput = document.getElementById(cfg.nameId);
      const phoneInput = document.getElementById(cfg.phoneId);
      const dateVal = document.getElementById(cfg.dateId)?.value.trim() || "Earliest Available";
      const timeVal = document.getElementById(cfg.timeId)?.value.trim() || "Any Available Time";
      const reasonVal = document.getElementById(cfg.reasonId)?.value.trim() || "General Consultation";
      const notesVal = document.getElementById(cfg.notesId)?.value.trim() || "None";

      const name = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";

      if (!name || name.length < 2) {
        showFeedback(cfg.feedback, "error", "Please enter the patient's full name.");
        nameInput?.focus();
        return;
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      const cleanedPhone = phone.replace(/[\s\-+]/g, "").slice(-10);

      if (!phoneRegex.test(cleanedPhone)) {
        showFeedback(cfg.feedback, "error", "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).");
        phoneInput?.focus();
        return;
      }

      const whatsappNumber = (window.clinicConfig && window.clinicConfig.contact.whatsappNumber) 
        ? window.clinicConfig.contact.whatsappNumber 
        : "919811385441";

      const messageText = 
`Hello MH Medical Centre,
I would like to request an appointment.

Patient Name: ${name}
Contact Phone: ${cleanedPhone}
Preferred Date: ${dateVal}
Preferred Time: ${timeVal}
Reason for Visit: ${reasonVal}
Additional Notes: ${notesVal}

Please confirm appointment availability.
Thank you.`;

      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      showFeedback(cfg.feedback, "success", "Opening WhatsApp with your appointment request enquiry...");

      setTimeout(() => {
        const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (!opened || opened.closed || typeof opened.closed === "undefined") {
          window.location.href = whatsappUrl;
        }
      }, 350);
    });
  });

  function showFeedback(el, type, message) {
    if (!el) return;
    el.style.display = "block";
    el.className = `form-feedback ${type}`;
    el.textContent = message;
    el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // 10. Interactive Map Facade / Embed Trigger
  const loadMapBtn = document.getElementById("load-interactive-map");
  const mapContainer = document.getElementById("map-container");

  if (loadMapBtn && mapContainer) {
    loadMapBtn.addEventListener("click", () => {
      const embedSrc = (window.clinicConfig && window.clinicConfig.contact.googleMapsEmbedSrc) 
        ? window.clinicConfig.contact.googleMapsEmbedSrc 
        : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.734789518047!2d77.2703229!3d28.6879468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc8d5069a689%3A0xe54e85aa3ef9a5ba!2sMH%20MEDICAL%20CENTRE%20N%2053%20GALI%20NO%205%20MAUJPR!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

      mapContainer.innerHTML = `
        <iframe 
          src="${embedSrc}" 
          width="100%" 
          height="380" 
          style="border:0; border-radius: 12px;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade" 
          title="MH Medical Centre Google Maps Location">
        </iframe>
      `;
    });
  }
});


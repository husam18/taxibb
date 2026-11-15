"use strict";

// Replace this with your WhatsApp number in international format,
// without +, spaces, or dashes. Example: 31612345678
const WHATSAPP_NUMBER = "31681110006";

document.querySelectorAll(".year").forEach(element => {
  element.textContent = new Date().getFullYear();
});

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!bookingForm.reportValidity()) return;

    const formData = new FormData(bookingForm);

    const message = [
      "Holland Way Tours — Taxi Enquiry",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Pickup: ${formData.get("pickup")}`,
      `Destination: ${formData.get("destination")}`,
      `Pickup date/time: ${formData.get("date")}`,
      `Passengers: ${formData.get("passengers")}`,
      `Extra details: ${formData.get("notes") || "None"}`,
      "",
      "Please confirm availability and price. I understand this is an enquiry, not a confirmed booking."
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}